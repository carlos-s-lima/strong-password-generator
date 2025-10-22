import React, { useState, useCallback } from 'react';
import './PasswordGenerator.css';

// Constantes para os conjuntos de caracteres
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const PasswordGenerator = () => {
    // Estados para controlar os inputs e o output
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false); // Mudei para false por padrão, mas você pode deixar true.
    
    // Estado para feedback do botão "Copy"
    const [copied, setCopied] = useState(false);

    // Lógica principal de geração de senha
    const generatePassword = useCallback(() => {
        // 1. Constrói o conjunto de caracteres com base nas seleções do usuário
        let availableChars = '';
        const criteria = []; // Para garantir que pelo menos um caractere de cada tipo selecionado esteja presente

        if (includeUppercase) {
            availableChars += UPPERCASE_CHARS;
            criteria.push(UPPERCASE_CHARS);
        }
        if (includeLowercase) {
            availableChars += LOWERCASE_CHARS;
            criteria.push(LOWERCASE_CHARS);
        }
        if (includeNumbers) {
            availableChars += NUMBER_CHARS;
            criteria.push(NUMBER_CHARS);
        }
        if (includeSymbols) {
            availableChars += SYMBOL_CHARS;
            criteria.push(SYMBOL_CHARS);
        }

        // Se nenhum critério for selecionado, evita um loop infinito e define uma senha de erro
        if (availableChars.length === 0) {
            setPassword('Selecione ao menos um critério!');
            return;
        }

        let newPassword = '';
        const finalLength = parseInt(length); // Garante que o length seja um número inteiro

        // 2. Garante que pelo menos um caractere de cada critério selecionado esteja na senha
        criteria.forEach(charSet => {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            newPassword += charSet[randomIndex];
        });

        // 3. Preenche o restante da senha com caracteres aleatórios
        const remainingLength = finalLength - criteria.length;
        
        for (let i = 0; i < remainingLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            newPassword += availableChars[randomIndex];
        }

        // 4. Embaralha a senha para que os caracteres obrigatórios não fiquem sempre no início
        newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');

        setPassword(newPassword);

    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]); // Dependências do useCallback

    // Chama generatePassword ao clicar no botão
    const handleGeneratePassword = () => {
        generatePassword();
        setCopied(false); 
    };

    // Lógica para copiar a senha para a área de transferência
    const handleCopyPassword = () => {
        // Usa a API Clipboard (navegadores modernos)
        if (navigator.clipboard && password) {
            navigator.clipboard.writeText(password).then(() => {
                setCopied(true);
                // Reseta o "Copiado!" após 2 segundos
                setTimeout(() => setCopied(false), 2000);
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
                alert('Erro ao copiar a senha. Por favor, tente novamente ou copie manualmente.');
            });
        }
    };

    // Gera a senha na montagem inicial e sempre que as configurações mudarem (Melhora a UX)
    React.useEffect(() => {
        generatePassword();
    }, [generatePassword]); 

    return (
        <div className="generator-container">
            <h2 className="generator-title">Gerador de Senha Forte</h2>

            {/* 1. Campo de Saída e Botão "Copy" */}
            <div className="output-field">
                <input 
                    type="text" 
                    value={password} 
                    readOnly  // Impede o usuário de digitar
                    placeholder="Clique em 'Gerar'"
                />
                <button onClick={handleCopyPassword} className="copy-btn" disabled={!password}>
                    {copied ? 'Copiado! ✅' : 'Copy'}
                </button>
            </div>

            {/* 2. Botão "Generate" */}
            {/* O botão agora força a geração da senha, mesmo que as dependências não tenham mudado */}
            <button onClick={handleGeneratePassword} className="generate-btn">
                Gerar Senha
            </button>

            {/* 3. Configurações */}
            <div className="settings">
                {/* 3a. Slider de Comprimento */}
                <div className="setting">
                    {/* Exibe o valor do length como integer */}
                    <label htmlFor="length">Número de Caracteres: <span>{parseInt(length)}</span></label> 
                    <input 
                        type="range" 
                        id="length"
                        min="8" 
                        max="32" 
                        value={length}
                        // O onChange aciona a geração da nova senha via useEffect
                        onChange={(e) => setLength(e.target.value)} 
                        className="slider"
                    />
                </div>

                {/* 3b. Checkboxes de Critérios */}
                {/* O onChange de cada checkbox aciona a geração da nova senha via useEffect */}
                <div className="setting checkbox-group">
                    <input type="checkbox" id="uppercase" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
                    <label htmlFor="uppercase">Incluir Letras Maiúsculas</label>
                </div>

                <div className="setting checkbox-group">
                    <input type="checkbox" id="lowercase" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
                    <label htmlFor="lowercase">Incluir Letras Minúsculas</label>
                </div>

                <div className="setting checkbox-group">
                    <input type="checkbox" id="numbers" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                    <label htmlFor="numbers">Incluir Números</label>
                </div>

                <div className="setting checkbox-group">
                    <input type="checkbox" id="symbols" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                    <label htmlFor="symbols">Incluir Caracteres Especiais</label>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
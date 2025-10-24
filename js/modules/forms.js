// js/modules/forms.js

// Função genérica para aplicar máscaras (simplificada)
function applyMask(input, mask, placeholder = '_') {
    // Para um projeto de faculdade, esta implementação manual é aceitável.
    // Em um projeto real, usaríamos uma biblioteca.
    
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove não-dígitos
        let maskedValue = '';
        let charIndex = 0;
        
        for (let i = 0; i < mask.length; i++) {
            const maskChar = mask[i];
            const valChar = value[charIndex];

            if (!valChar) break; // Acabou o input do usuário

            if (maskChar === '9') {
                maskedValue += valChar;
                charIndex++;
            } else {
                // Adiciona o caractere fixo (ponto, traço, parênteses)
                maskedValue += maskChar;
                // Se o próximo input do usuário for o caractere fixo, ignora.
                if (valChar === maskChar) {
                    charIndex++;
                }
            }
        }
        e.target.value = maskedValue;
    });
}

// Implementa a validação customizada para o CPF (exemplo de verificação de consistência)
function customCPFValidation(input) {
    input.addEventListener('input', (e) => {
        // Remove a mensagem de erro padrão para que possamos usar a nossa
        e.target.setCustomValidity('');
    });
    
    input.addEventListener('blur', (e) => {
        const cpf = e.target.value.replace(/\D/g, '');
        
        // Exemplo BÁSICO de verificação de CPF. A validação real é complexa.
        if (cpf.length === 11) {
            if (cpf === '00000000000' || cpf === '11111111111' /* ... outros padrões ... */ ) {
                // Inconsistência de dados: CPF inválido
                e.target.setCustomValidity('CPF inválido ou padrão repetitivo. Verifique os números.');
                e.target.reportValidity(); // Mostra o aviso ao usuário
                
            } else {
                // Se a validação nativa passar (via pattern) e este básico também
                e.target.setCustomValidity(''); 
            }
        } else if (e.target.value !== '' && cpf.length !== 11) {
            e.target.setCustomValidity('O CPF deve conter 11 dígitos.');
            e.target.reportValidity(); 
        }
    });
}


export function initForms() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    // 1. Aplica Máscaras
    if (cpfInput) {
        // Máscara: 999.999.999-99
        applyMask(cpfInput, '999.999.999-99');
        customCPFValidation(cpfInput); // Ativa a validação de consistência
    }
    
    if (telefoneInput) {
        // Máscara: (99) 99999-9999 (para telefones fixos/celulares)
        // OBS: Máscaras de telefone são complexas, esta é simplificada para 11 dígitos.
        applyMask(telefoneInput, '(99) 99999-9999'); 
    }
    
    if (cepInput) {
        // Máscara: 99999-999
        applyMask(cepInput, '99999-999');
    }
    
    // 2. Avisos de preenchimento incorreto (Simulando feedback)
    const form = document.querySelector('#form-cadastro form');
    if (form) {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                // Se a validação nativa falhar (campos required não preenchidos, etc.)
                alert('Atenção: Por favor, preencha todos os campos obrigatórios corretamente antes de enviar.');
            } else {
                // Simulação de envio bem-sucedido
                // e.preventDefault(); // Descomentar para evitar que a página recarregue
                // alert('Cadastro enviado com sucesso! Aguarde nosso contato.');
            }
        });
    }
}
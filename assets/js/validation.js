<<<<<<< HEAD
// ------------------------------------
// validation.js - Validação e Feedback de Formulário
// ------------------------------------

/**
 * Adiciona feedback visual e de texto para campos inválidos.
 * @param {HTMLFormElement} form - O formulário a ser validado.
 */
function addCustomValidationFeedback(form) {
    form.addEventListener('submit', function (e) {
        // Remove a submissão nativa se a validação JS estiver ativa
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Iterar sobre todos os elementos do formulário
        Array.from(form.elements).forEach(element => {
            // Apenas para campos que podem ser validados e são obrigatórios
            if (element.validity) {
                
                // 1. Adiciona/Remove classes visuais do CSS (para bordas verdes/vermelhas)
                if (element.validity.valid) {
                    element.classList.remove('is-invalid');
                    element.classList.add('is-valid');
                    removeFeedbackMessage(element);
                } else {
                    element.classList.remove('is-valid');
                    element.classList.add('is-invalid');
                    showFeedbackMessage(element, getValidationMessage(element));
                }

                // Acessibilidade (ARIA)
                element.setAttribute('aria-invalid', element.validity.invalid);
            }
        });

        // Simula o sucesso após validação (apenas para fins de demonstração da Fase 3)
        if (form.checkValidity()) {
             // Aqui você chamaria uma função de sucesso ou AJAX (form-handler.js)
             console.log('Formulário válido, pronto para envio!');
             // e.preventDefault(); // Manter preventDefault para evitar recarregamento
             // form.reset();
        }
    }, false);
}

/**
 * Define a mensagem de erro específica.
 * @param {HTMLElement} element - O campo com erro.
 * @returns {string} - Mensagem de erro.
 */
function getValidationMessage(element) {
    if (element.validity.valueMissing) {
        return 'Por favor, preencha este campo obrigatório.';
    }
    if (element.validity.typeMismatch && element.type === 'email') {
        return 'O e-mail digitado não é válido.';
    }
    if (element.validity.patternMismatch) {
        // Mensagem customizada para CPF/CEP/Telefone
        return 'Formato incorreto. Use o modelo: ' + element.placeholder;
    }
    if (element.validity.tooShort) {
        return `O campo requer no mínimo ${element.minLength} caracteres.`;
    }
    return 'O valor digitado é inválido.';
}


/**
 * Cria e exibe a mensagem de feedback de erro.
 * @param {HTMLElement} element - O campo com erro.
 * @param {string} message - A mensagem de erro.
 */
function showFeedbackMessage(element, message) {
    // Verifica se a mensagem de feedback já existe para evitar duplicatas
    const existingFeedback = element.nextElementSibling;
    if (existingFeedback && existingFeedback.classList.contains('feedback-message')) {
        existingFeedback.textContent = message;
        return;
    }

    // Cria e insere a nova mensagem
    const feedback = document.createElement('div');
    feedback.className = 'feedback-message error'; // Classe CSS para estilização
    feedback.textContent = message;
    feedback.id = `${element.id}-feedback`;
    element.setAttribute('aria-describedby', feedback.id);

    element.parentNode.insertBefore(feedback, element.nextSibling);
}

/**
 * Remove a mensagem de feedback de erro.
 * @param {HTMLElement} element - O campo válido.
 */
function removeFeedbackMessage(element) {
    const existingFeedback = element.nextElementSibling;
    if (existingFeedback && existingFeedback.classList.contains('feedback-message')) {
        existingFeedback.remove();
        element.removeAttribute('aria-describedby');
    }
}


/**
 * Inicializa a validação customizada para todos os formulários.
 */
export function initializeValidation() {
    const form = document.getElementById('form-cadastro');
    if (form) {
        // Desativa a validação nativa para que o JS a controle visualmente
        form.setAttribute('novalidate', true); 
        addCustomValidationFeedback(form);

        // Adiciona validação em tempo real (on blur) para melhor UX
        Array.from(form.elements).forEach(element => {
            if (element.validity) {
                element.addEventListener('blur', () => {
                    if (element.validity.invalid) {
                        showFeedbackMessage(element, getValidationMessage(element));
                    } else {
                        removeFeedbackMessage(element);
                    }
                });
            }
        });
    }
=======
// ------------------------------------
// validation.js - Validação e Feedback de Formulário
// ------------------------------------

/**
 * Adiciona feedback visual e de texto para campos inválidos.
 * @param {HTMLFormElement} form - O formulário a ser validado.
 */
function addCustomValidationFeedback(form) {
    form.addEventListener('submit', function (e) {
        // Remove a submissão nativa se a validação JS estiver ativa
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Iterar sobre todos os elementos do formulário
        Array.from(form.elements).forEach(element => {
            // Apenas para campos que podem ser validados e são obrigatórios
            if (element.validity) {
                
                // 1. Adiciona/Remove classes visuais do CSS (para bordas verdes/vermelhas)
                if (element.validity.valid) {
                    element.classList.remove('is-invalid');
                    element.classList.add('is-valid');
                    removeFeedbackMessage(element);
                } else {
                    element.classList.remove('is-valid');
                    element.classList.add('is-invalid');
                    showFeedbackMessage(element, getValidationMessage(element));
                }

                // Acessibilidade (ARIA)
                element.setAttribute('aria-invalid', element.validity.invalid);
            }
        });

        // Simula o sucesso após validação (apenas para fins de demonstração da Fase 3)
        if (form.checkValidity()) {
             // Aqui você chamaria uma função de sucesso ou AJAX (form-handler.js)
             console.log('Formulário válido, pronto para envio!');
             // e.preventDefault(); // Manter preventDefault para evitar recarregamento
             // form.reset();
        }
    }, false);
}

/**
 * Define a mensagem de erro específica.
 * @param {HTMLElement} element - O campo com erro.
 * @returns {string} - Mensagem de erro.
 */
function getValidationMessage(element) {
    if (element.validity.valueMissing) {
        return 'Por favor, preencha este campo obrigatório.';
    }
    if (element.validity.typeMismatch && element.type === 'email') {
        return 'O e-mail digitado não é válido.';
    }
    if (element.validity.patternMismatch) {
        // Mensagem customizada para CPF/CEP/Telefone
        return 'Formato incorreto. Use o modelo: ' + element.placeholder;
    }
    if (element.validity.tooShort) {
        return `O campo requer no mínimo ${element.minLength} caracteres.`;
    }
    return 'O valor digitado é inválido.';
}


/**
 * Cria e exibe a mensagem de feedback de erro.
 * @param {HTMLElement} element - O campo com erro.
 * @param {string} message - A mensagem de erro.
 */
function showFeedbackMessage(element, message) {
    // Verifica se a mensagem de feedback já existe para evitar duplicatas
    const existingFeedback = element.nextElementSibling;
    if (existingFeedback && existingFeedback.classList.contains('feedback-message')) {
        existingFeedback.textContent = message;
        return;
    }

    // Cria e insere a nova mensagem
    const feedback = document.createElement('div');
    feedback.className = 'feedback-message error'; // Classe CSS para estilização
    feedback.textContent = message;
    feedback.id = `${element.id}-feedback`;
    element.setAttribute('aria-describedby', feedback.id);

    element.parentNode.insertBefore(feedback, element.nextSibling);
}

/**
 * Remove a mensagem de feedback de erro.
 * @param {HTMLElement} element - O campo válido.
 */
function removeFeedbackMessage(element) {
    const existingFeedback = element.nextElementSibling;
    if (existingFeedback && existingFeedback.classList.contains('feedback-message')) {
        existingFeedback.remove();
        element.removeAttribute('aria-describedby');
    }
}


/**
 * Inicializa a validação customizada para todos os formulários.
 */
export function initializeValidation() {
    const form = document.getElementById('form-cadastro');
    if (form) {
        // Desativa a validação nativa para que o JS a controle visualmente
        form.setAttribute('novalidate', true); 
        addCustomValidationFeedback(form);

        // Adiciona validação em tempo real (on blur) para melhor UX
        Array.from(form.elements).forEach(element => {
            if (element.validity) {
                element.addEventListener('blur', () => {
                    if (element.validity.invalid) {
                        showFeedbackMessage(element, getValidationMessage(element));
                    } else {
                        removeFeedbackMessage(element);
                    }
                });
            }
        });
    }
>>>>>>> 2417fa6cb80252ecfd26d09fd222cda2e7087045
}
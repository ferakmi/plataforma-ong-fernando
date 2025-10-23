<<<<<<< HEAD
// ------------------------------------
// utils.js - Funções Utilitárias e Máscaras
// ------------------------------------

/**
 * Insere o ano atual no rodapé da página.
 * O elemento deve ter um dos IDs: 'ano', 'ano2', ou 'ano3'.
 */
export function setDynamicYear() {
    const ano = new Date().getFullYear();
    ['ano', 'ano2', 'ano3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = ano;
    });
}

/**
 * Aplica máscara de CPF.
 * @param {string} value - Valor do campo.
 */
function maskCPF(value) {
    return value
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 3º dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 6º dígito
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca hífen antes dos 2 últimos dígitos
        .slice(0, 14); // Limita ao tamanho máximo
}

/**
 * Aplica máscara de Telefone (Fixo/Celular).
 * @param {string} value - Valor do campo.
 */
function maskTelefone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta do DDD
        .replace(/(\d)(\d{4})$/, '$1-$2') // Coloca hífen no meio (para 8 ou 9 dígitos)
        .slice(0, 15);
}

/**
 * Aplica máscara de CEP.
 * @param {string} value - Valor do campo.
 */
function maskCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d)/, '$1-$2') // Coloca hífen após 5º dígito
        .slice(0, 9);
}

/**
 * Adiciona ouvintes de eventos para aplicar as máscaras nos campos de formulário.
 */
export function initializeMasks() {
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) {
        cpf.addEventListener('input', (e) => { e.target.value = maskCPF(e.target.value); });
    }
    if (telefone) {
        telefone.addEventListener('input', (e) => { e.target.value = maskTelefone(e.target.value); });
    }
    if (cep) {
        cep.addEventListener('input', (e) => { e.target.value = maskCEP(e.target.value); });
    }
=======
// ------------------------------------
// utils.js - Funções Utilitárias e Máscaras
// ------------------------------------

/**
 * Insere o ano atual no rodapé da página.
 * O elemento deve ter um dos IDs: 'ano', 'ano2', ou 'ano3'.
 */
export function setDynamicYear() {
    const ano = new Date().getFullYear();
    ['ano', 'ano2', 'ano3'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = ano;
    });
}

/**
 * Aplica máscara de CPF.
 * @param {string} value - Valor do campo.
 */
function maskCPF(value) {
    return value
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 3º dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 6º dígito
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca hífen antes dos 2 últimos dígitos
        .slice(0, 14); // Limita ao tamanho máximo
}

/**
 * Aplica máscara de Telefone (Fixo/Celular).
 * @param {string} value - Valor do campo.
 */
function maskTelefone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta do DDD
        .replace(/(\d)(\d{4})$/, '$1-$2') // Coloca hífen no meio (para 8 ou 9 dígitos)
        .slice(0, 15);
}

/**
 * Aplica máscara de CEP.
 * @param {string} value - Valor do campo.
 */
function maskCEP(value) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{5})(\d)/, '$1-$2') // Coloca hífen após 5º dígito
        .slice(0, 9);
}

/**
 * Adiciona ouvintes de eventos para aplicar as máscaras nos campos de formulário.
 */
export function initializeMasks() {
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) {
        cpf.addEventListener('input', (e) => { e.target.value = maskCPF(e.target.value); });
    }
    if (telefone) {
        telefone.addEventListener('input', (e) => { e.target.value = maskTelefone(e.target.value); });
    }
    if (cep) {
        cep.addEventListener('input', (e) => { e.target.value = maskCEP(e.target.value); });
    }
>>>>>>> 2417fa6cb80252ecfd26d09fd222cda2e7087045
}
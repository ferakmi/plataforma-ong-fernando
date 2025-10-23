<<<<<<< HEAD
// ------------------------------------
// scripts.js - Ponto de Entrada da Aplicação
// ------------------------------------

// Importa funções do módulo de utilidades (Máscaras e Ano Dinâmico)
import { setDynamicYear, initializeMasks } from './utils.js';

// Importa a função de Validação de Formulário (Requisito da Etapa 3)
import { initializeValidation } from './validation.js';

// Importa o Roteador SPA Básico (Requisito da Etapa 3)
import { initializeRouter } from './spa-router.js'; 

// O evento DOMContentLoaded garante que o script só execute após o HTML estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializa utilidades básicas (Ano no Rodapé e Máscaras)
    setDynamicYear();
    initializeMasks();
    
    // 2. Inicializa a validação de formulário customizada
    initializeValidation();

    // 3. Inicializa o roteador SPA Básico para navegação suave
    initializeRouter(); 
=======
// ------------------------------------
// scripts.js - Ponto de Entrada da Aplicação
// ------------------------------------

// Importa funções do módulo de utilidades (Máscaras e Ano Dinâmico)
import { setDynamicYear, initializeMasks } from './utils.js';

// Importa a função de Validação de Formulário (Requisito da Etapa 3)
import { initializeValidation } from './validation.js';

// Importa o Roteador SPA Básico (Requisito da Etapa 3)
import { initializeRouter } from './spa-router.js'; 

// O evento DOMContentLoaded garante que o script só execute após o HTML estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializa utilidades básicas (Ano no Rodapé e Máscaras)
    setDynamicYear();
    initializeMasks();
    
    // 2. Inicializa a validação de formulário customizada
    initializeValidation();

    // 3. Inicializa o roteador SPA Básico para navegação suave
    initializeRouter(); 
>>>>>>> 2417fa6cb80252ecfd26d09fd222cda2e7087045
});
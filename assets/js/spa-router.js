// ------------------------------------
// spa-router.js - Roteamento Básico (Single Page Application)
// ------------------------------------

// Função principal para carregar o conteúdo de uma URL e injetá-lo no <main>
async function loadContent(url) {
    const main = document.getElementById('main');
    if (!main) return;

    try {
        // 1. Carrega o HTML da página (ex: projetos.html)
        const response = await fetch(url);
        const html = await response.text();

        // 2. Cria um contêiner temporário e injeta o HTML carregado
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // 3. Encontra apenas o conteúdo da tag <main> na página carregada
        const newMainContent = tempContainer.querySelector('#main');

        if (newMainContent) {
            // 4. Substitui o conteúdo atual da tag <main>
            main.innerHTML = newMainContent.innerHTML;

            // Opcional: Roda novamente o JS de máscaras e validação
            // É importante importar essas funções aqui ou garantir que rodem após a troca
        }
    } catch (error) {
        console.error('Erro ao carregar conteúdo via SPA:', error);
        // Em caso de erro, apenas navega normalmente
        window.location.href = url;
    }
}

// Função que intercepta cliques nos links internos
function handleLinkClick(e) {
    const link = e.target.closest('a');
    
    // 1. Verifica se é um link interno do projeto e não um link externo/tel/mailto
    if (link && link.href && link.hostname === window.location.hostname && !link.href.startsWith('tel:') && !link.href.startsWith('mailto:')) {
        e.preventDefault(); // Impede o navegador de recarregar a página
        const url = link.getAttribute('href');

        // 2. Adiciona a URL ao histórico do navegador (para o botão Voltar)
        history.pushState(null, '', url);

        // 3. Carrega o novo conteúdo
        loadContent(url);
    }
}

// Inicializa o roteador:
export function initializeRouter() {
    // Escuta cliques no corpo do documento
    document.body.addEventListener('click', handleLinkClick);

    // Escuta o evento de voltar/avançar do navegador (history change)
    window.addEventListener('popstate', () => {
        // Recarrega o conteúdo da URL atualizada no histórico
        loadContent(window.location.pathname);
    });
}
// js/templates/projects-data.js

const projectData = [
    {
        id: 1,
        title: "Escola do Futuro",
        description: "Foco na educação de jovens e adultos, oferecendo cursos profissionalizantes e apoio escolar.",
        image: "assets/imagens/projeto-escola.jpg",
        link: "#",
        tag: "Educação"
    },
    {
        id: 2,
        title: "Saúde Comunitária",
        description: "Oferece consultas médicas e odontológicas gratuitas para a comunidade, além de palestras de prevenção e higiene.",
        image: "assets/imagens/projeto-saude.jpg",
        link: "#",
        tag: "Saúde"
    },
    {
        id: 3,
        title: "Viver Melhor",
        description: "Programa de atenção e lazer para a terceira idade, promovendo inclusão social e atividades físicas adaptadas.",
        image: "assets/imagens/projeto-idoso.jpg",
        link: "#",
        tag: "Social"
    }
    // Adicione mais projetos aqui
];

// Função que gera o HTML do Card (Template JS)
function createProjectCard(project) {
    return `
        <article class="card">
            <div class="card-image">
                <img src="${project.image}" alt="Imagem do projeto ${project.title}.">
            </div>
            <div class="card-content">
                <span class="badge">${project.tag}</span> 
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn btn-secondary">Detalhes do Projeto</a>
            </div>
        </article>
    `;
}

export function loadProjects() {
    const container = document.querySelector('.card-container');
    
    // Verifica se estamos na página de projetos
    if (container && window.location.pathname.includes('projetos.html')) {
        let htmlContent = '';
        
        projectData.forEach(project => {
            htmlContent += createProjectCard(project);
        });
        
        // Insere o conteúdo dinamicamente (Manipulação do DOM)
        container.innerHTML = htmlContent;
        console.log('Projetos carregados dinamicamente com templates JS.');
    }
}
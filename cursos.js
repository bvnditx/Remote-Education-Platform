function exibirCursos(filtro = ''){
    const containerCursos = document.getElementById('container-cursos');
    containerCursos.innerHTML = '';

    cursosProgramacao
        .filter (curso => curso.nome.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(curso => {
            const cursoDiv = document.createElement('div');
            cursoDiv.classList.add('curso');

            cursoDiv.addEventListener('click', () => {
                window.location.href = curso.link; //substituir # com pagina do curso
            });

            cursoDiv.innerHTML = `
                <img src="${curso.imagem}" alt="${curso.nome}">
                <h3>${curso.nome}</h3>
                <p>${curso.descricao} </p>
                <p><strong>Nível:</strong> ${curso.nivel}
            `;

            containerCursos.appendChild(cursoDiv);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    exibirCursos();

    const searchInput = document.getElementById ('search-input');
    searchInput.addEventListener('input', (event) => {
        exibirCursos(event.target.value); //Atualiza a lista de cursos
    });
});
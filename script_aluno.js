document.addEventListener ('DOMContentLoaded', () =>{
    const sidebar = document.getElementById('sidebar');
    const profilePic = document.getElementById('profilePic');
    const toggleBtn = document.getElementById('toggleBtn');

    //Alternar visibilidade da barra lateral

    toggleBtn.addEventListener ('click', () => {
        sidebar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Verificar se o botão foi encontrado
    if (!scrollToTopButton) {
        console.error('Botão de rolar para o topo não foi encontrado.');
        return;
    }

    // Mostra o botão quando o usuário rola para baixo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {  // Ajuste de valor para quando o botão aparecer
            scrollToTopButton.classList.add('show');
            scrollToTopButton.classList.remove('hide');
        } else {
            scrollToTopButton.classList.add('hide');
            scrollToTopButton.classList.remove('show');
        }
    });

    //Rolar para o topo quando o botão é clicado
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
});
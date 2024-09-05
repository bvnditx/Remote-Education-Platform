document.addEventListener ('DOMContentLoaded', () =>{
    const sidebar = document.getElementById('sidebar');
    const profilePic = document.getElementById('profilePic');
    const toggleBtn = document.getElementById('toggleBtn');

    //Alternar visibilidade da barra lateral

    toggleBtn.addEventListener ('click', () => {
        sidebar.classList.toggle('active');
    });
});
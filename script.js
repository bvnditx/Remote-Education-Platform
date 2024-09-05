const form = document.getElementById('loginForm');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;



        //Simulação de login bem-sucedido
        if (email === "aluno@exemplo.com" && password === "senha123") {
            // Redireciona para a página do aluno
            window.location.href = "area-aluno.html";
        } else {
            alert("Login inválido")
        }
    });
}else {
    console.error('Formulário não encontrado');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    // Verifique se o formulário foi encontrado
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita o envio padrão do formulário

        // Aqui pode ser implementado a lógica para mandar os dados para o servidor
        // e verificar as credencias do usuário

        //Exemplo Simplificado
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            console.log('Email: ', email);
            console.log('Senha: ', password);

            // Chamada para a função que envia os dados para o servidor
            // e verifica as credenciais
            // verificarCredenciais(email, password);

            // Simule a validação do login
            if (email === "aluno@exemplo.com" && password === "senha123") {
                window.location.href = "area-aluno.html";
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        });
    } else {
        console.error('Formulário não encontrado.');
    }
});

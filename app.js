document.getElementById('formCadastro').addEventListener('submit', function(event) {
    const nome = document.getElementById('titulo').value; 
    const descricao = document.getElementById('descricao').value;

    if (nome.length < 3) {
        alert('O nome do projeto deve ter pelo menos 3 caracteres.');
        event.preventDefault();  
    }

    if (descricao.length < 10) {
        alert('A descrição deve ter pelo menos 10 caracteres.');
        event.preventDefault();  
    }
});

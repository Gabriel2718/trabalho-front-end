document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
    document.getElementById("form-cadastro").addEventListener("submit", cadastrar);
});

function cadastrar(){
    const user = document.getElementById("user");
    const email = document.getElementById("email");

    localStorage.setItem(email.value, user.value);
    atualizarLista
}

function atualizarLista(){
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){
        const usuario = document.createElement("li");
        usuario.textContent = localStorage.getItem(localStorage.key(i)) + " - " + localStorage.key(i);
        listaUsuarios.appendChild(usuario);
    }
}
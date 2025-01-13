var tipoFiltro = 1; //1 para nome, 2 para email

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
    document.getElementById("form-cadastro").addEventListener("submit", cadastrar);

    document.getElementById("filtrar-user").style.backgroundColor = "rgb(0, 170, 192)";
});

function cadastrar(){
    const user = document.getElementById("user");
    const email = document.getElementById("email");

    localStorage.setItem(email.value, user.value);
    atualizarLista;
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

function trocarTipoFiltro(tipo) {
    tipoFiltro = tipo;
    switch (tipoFiltro){
        case 1:
            document.getElementById("filtrar-user").style.backgroundColor = "rgb(0, 170, 192)";
            document.getElementById("filtrar-email").style.backgroundColor = "rgb(170, 170, 170)";
            break;
        case 2:
            document.getElementById("filtrar-email").style.backgroundColor = "rgb(0, 170, 192)";
            document.getElementById("filtrar-user").style.backgroundColor = "rgb(170, 170, 170)";
            break;
    }
}

function filtrar(){
    const listaUsuarios = document.getElementById("lista-usuarios");
    let entrada = document.getElementById("barra-pesquisa");
    listaUsuarios.innerHTML = "";

    switch(tipoFiltro){
        case 1:
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.getItem(localStorage.key(i)) == entrada.value){
                    const usuario = document.createElement("li");
                    usuario.textContent = localStorage.getItem(localStorage.key(i)) + " - " + localStorage.key(i);
                    listaUsuarios.appendChild(usuario);
                }
            }
            break;
        case 2:
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) == entrada.value){
                    const usuario = document.createElement("li");
                    usuario.textContent = localStorage.getItem(localStorage.key(i)) + " - " + localStorage.key(i);
                    listaUsuarios.appendChild(usuario);
                }
            }
            break;
    }
}
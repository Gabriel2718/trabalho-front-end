var tipoFiltro = 1; //1 para nome, 2 para email

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista();
    document.getElementById("form-cadastro").addEventListener("submit", cadastrar);

    document.getElementById("filtrar-user").style.backgroundColor = "rgb(0, 170, 192)";
});

function cadastrar(){
    const user = document.getElementById("user");
    const email = document.getElementById("email");

    if(verificarEmail(email.value)){
        localStorage.setItem(email.value, user.value);
        atualizarLista;
    }else{
        alert("O email inserido já está em uso");
    }
}

function verificarEmail(email){
    for(let i = 0; i < localStorage.length; i++){
        if(email == localStorage.key(i)){
            return false;
        }
    }
    return true;
}

function atualizarLista(){
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){
        const usuario = document.createElement("li");
        usuario.innerHTML = `
            <p>
                ${localStorage.key(i)} - ${localStorage.getItem(localStorage.key(i))}
            </p>
            <button class="BTexcluir" onclick="excluirUsuario('${localStorage.key(i)}')">
                <span class="material-icons">delete</span>
            </button>
        `;
        listaUsuarios.appendChild(usuario);
    }
    document.getElementById("barra-pesquisa").value = "";

    mostrarEsconder();
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
                    usuario.innerHTML = `
                        <p>
                            ${localStorage.key(i)} - ${localStorage.getItem(localStorage.key(i))}
                        </p>
                        <button class="BTexcluir" onclick="excluirUsuario('${localStorage.key(i)}')">
                            <span class="material-icons">delete</span>
                        </button>
                    `;
                    listaUsuarios.appendChild(usuario);
                }
            }
            break;
        case 2:
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) == entrada.value){
                    const usuario = document.createElement("li");
                    usuario.innerHTML = `
                        <p>
                            ${localStorage.key(i)} - ${localStorage.getItem(localStorage.key(i))}
                        </p>
                        <button class="BTexcluir" onclick="excluirUsuario('${localStorage.key(i)}')">
                            <span class="material-icons">delete</span>
                        </button>
                    `;
                    listaUsuarios.appendChild(usuario);
                }
            }
            break;
    }
}

function mostrarEsconder(){
    const filtro = document.getElementById("filtro");
    const botaoApagar = document.getElementById("BTapagar-todos");
    if(localStorage.length == 0){
        filtro.style.visibility = "hidden";
        botaoApagar.style.visibility = "hidden";
    }else{
        filtro.style.visibility = "visible";
        botaoApagar.style.visibility = "visible";
    }
}

function excluirUsuario(email){
    localStorage.removeItem(email);
    atualizarLista();
}

function apagarTodos(){
    localStorage.clear();
    atualizarLista();
}
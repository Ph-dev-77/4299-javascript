const inputItem = document.getElementById("input-item")
const listaDecompras = document.getElementById("lista-de-compras")
let contador = 0;

const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) =>{
    evento.preventDefault();
    if(inputItem.value === ""){
        alert("Por favor, insira um item!");
        return
    }

    const itemdalista = document.createElement("li");
    const conteinerItemDaLista = document.createElement("div");
    conteinerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;
    
    
    // ARVORE GINEOLOGICA
    conteinerItemDaLista.appendChild(inputCheckbox)
    conteinerItemDaLista.appendChild(nomeItem)

    itemdalista.appendChild(conteinerItemDaLista)
    listaDecompras.appendChild(itemdalista)




    
})

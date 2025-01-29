"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let tarefas = [];
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        salvarDados();
    }
}
buttonElement.onclick = adicionarTarefa;
function salvarDados() {
    localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}

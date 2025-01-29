let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLButtonElement;

let tarefas: string[] = [];

function adicionarTarefa(): boolean | void {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
  } else {
    let tarefaDigitada: string = inputElement.value;
    tarefas.push(tarefaDigitada);

    inputElement.value = "";

    salvarDados();
  }
}

buttonElement.onclick = adicionarTarefa;

function salvarDados(): void {
  localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}

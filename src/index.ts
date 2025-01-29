let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLButtonElement;

let listaSalva: string | null = localStorage.getItem("@listagem_tarefas");
console.log(listaSalva);
let tarefas: string[] = (listaSalva !== null && JSON.parse(listaSalva)) || [];

function listarTarefas() {
  listElement.innerHTML = "";

  tarefas.map((item) => {
    let todoElement = document.createElement("li");
    let tarefaText = document.createTextNode(item);

    todoElement.appendChild(tarefaText);
    listElement.appendChild(todoElement);
  });
}

listarTarefas();

function adicionarTarefa(): boolean | void {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
  } else {
    let tarefaDigitada: string = inputElement.value;
    tarefas.push(tarefaDigitada);

    inputElement.value = "";

    listarTarefas();
    salvarDados();
  }
}

buttonElement.onclick = adicionarTarefa;

function salvarDados(): void {
  localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}

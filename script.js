const requisito4 = () =>{
    const input = document.getElementById("texto-tarefa");
    const button = document.getElementById("criar-tarefa");
    const ol = document.getElementById("lista-tarefas");
        button.addEventListener("click", () =>{
        const li = document.createElement("li");
        li.setAttribute("class", "tarefa");
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = "";
    })
}

const requisito7 = () =>{
    const lis = document.getElementsByClassName(".tarefa");
    const ol = document.getElementById("lista-tarefas");
    
        li.addEventListener("click", () =>{
            for (let index = 0; index < lis.length; index++) {
                const li = lis[index];
            }
            event.target.classList.toggle("selected");
        });
     
};

window.onload = () =>{
    requisito4();
    requisito7();
}

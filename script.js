const requisito4 = () => {
    const input = document.getElementById("texto-tarefa");
    const button = document.getElementById("criar-tarefa");
    const ol = document.getElementById("lista-tarefas");
    button.addEventListener("click", () => {
        const li = document.createElement("li");
        li.setAttribute("class", "tarefa");
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = "";
    })
}

const requisito7 = () => {
    const lis = document.getElementsByClassName("tarefa");
    const ol = document.getElementById("lista-tarefas");

    ol.addEventListener("click", (event) => {
        for (let index = 0; index < lis.length; index++) {
            const li = lis[index];
            li.classList.remove("selected");
        }
        event.target.classList.add("selected");
    });
    ol.addEventListener("dblclick", (event) => {
        for (let index = 0; index < lis.length; index++) {
            const li = lis[index];
        }
        event.target.classList.toggle("completed");
    });

};

const requisito10 = () => {
    const ol = document.getElementById("lista-tarefas");
    const buttonErase = document.getElementById("apaga-tudo");
    buttonErase.addEventListener("click", () => {
        ol.innerHTML = null;
    });
};


const requisito11 = () => {
    const buttonErase = document.getElementById("remover-finalizados");

    buttonErase.addEventListener("click", () => {
        const completeds = document.querySelectorAll(".completed");
        const ol = document.getElementById("lista-tarefas");
        for (let index = 0; index < completeds.length; index += 1) {
            let completed = completeds[index];
            completed.remove();

        }


    });
}


const requisito14 = () => {
    const buttonErase = document.getElementById("remover-selecionado");

    buttonErase.addEventListener("click", () => {
        const selecteds = document.querySelectorAll(".selected");
        const ol = document.getElementById("lista-tarefas");
        for (let index = 0; index < selecteds.length; index += 1) {
            let selected = selecteds[index];
            selected.remove();

        }


    });
}







window.onload = () => {
    requisito4();
    requisito7();
    requisito10();
    requisito11();
    requisito14();
}

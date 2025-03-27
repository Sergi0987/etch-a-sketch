const container = document.querySelector(".container");

const btn = document.createElement("button");
document.body.insertBefore(btn, container);
btn.textContent = "hello"

btn.addEventListener("click", () => {

    let askNumSquares = prompt("How many squares per side? (Max: 100)");
    askNumSquares = parseInt(askNumSquares);
    if(askNumSquares > 100){
        askNumSquares = 100;
    }
    createSquares(askNumSquares);
});

const createSquares = (amount) => {
    container.textContent = '';
    container.style.width = (amount * 22 + 22) + "px";
    for(let i = 0; i < amount * amount; i++){
        const div = document.createElement("div");
        div.className = 'square';
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "lightgreen";
        });
        /*div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "coral";
        });*/
    }
};
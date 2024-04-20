let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
let newGameBtn=document.querySelector(".new-game");
let para=document.querySelector("p");
let section=document.querySelector("section");

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
const disableButtons=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableButtons=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
const newGame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        turnO=true;
        section.classList.add("hide");
        enableButtons();
    })
}
const showWinner=()=>{
    para.innerText=`Congratulations! Winner is ${boxes[pattern[0]].innerText}`
    section.classList.remove("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true;
        
        checkWinner();
        
        
    })
})


const checkWinner=()=>{
    for (pattern of winPattern){
        if (boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
                console.log(`winner is ${boxes[pattern[0]].innerText} `)
                disableButtons();
                showWinner();
                
            }
        }
        
    }
}


const reset=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        turnO=true;
        enableButtons();
    })
}
resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",newGame);

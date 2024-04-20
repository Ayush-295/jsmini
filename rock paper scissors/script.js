let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let rock=document.querySelector("#rock")
let scissors=document.querySelector("scissors")
let paper=document.querySelector("#paper")
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset")

const showWinner=(userWin)=>{
    if(userWin===true){
        userScore++;
        user.innerText=userScore;
    }else{
        compScore++
        comp.innerText=compScore;
    }
}

const giveText=(compChoice,choiceId,userWin)=>{
    if (userWin===true){
        msg.innerText=`You are winner because ${choiceId} beats ${compChoice}`;
    }else{
        msg.innerText=`You lose because ${compChoice} beats ${choiceId}`;
    }
}
const playGame=(choiceId)=>{
    console.log(`user choice is ${choiceId}`);
    const compChoice=genCompChoice();
    console.log(`comp choice is ${compChoice}`)

    if(compChoice===choiceId){
        console.log("game is draw");
        msg.innerText="Match is draw";
    }else{
        let userWin=true;
        if (choiceId==="rock"){
            //paper,scissors
            userWin= compChoice==="paper"?false:true;
        }else if (choiceId==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else if (choiceId==="scissors"){
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        giveText(compChoice,choiceId,userWin);
        userWin===true?console.log("user wins"):console.log("user loses");
        showWinner(userWin);
    }
    
}

const genCompChoice=()=>{
    options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

choices.forEach((choice)=>{
    const choiceId=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        
        
        playGame(choiceId);
    });
});

reset.addEventListener("click",()=>{
    userScore=0
    compScore=0
    user.innerText="0"
    comp.innerText="0"
    msg.innerText="Play your move";
})
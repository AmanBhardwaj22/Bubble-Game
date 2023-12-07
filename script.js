let introTime = 3;
let time = 60
let score = 0;
let hitNum;
let timer;



function makeBubbles(){
    let clutter = "";

for (let i = 1 ; i <= 176 ; i++ ){
    let random = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`;
}

document.querySelector("#bottomPanel").innerHTML = clutter;
}

function getHit(){
    hitNum = Number(Math.floor(Math.random()*10));
    document.querySelector("#hitBox").textContent = hitNum;
}

function setTimer(){
    timer = setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector("#timer").textContent = time;
        } else {
            document.querySelector("#bottomPanel").innerHTML = 
            `<div class="GO">
            <h1>Game Over</h1>
            <h1>Score: ${score}</h1>
            </div>`;
            clearInterval(timer);
        } 
    },1000)
}

function updateScore(){
    score+=10;
    document.querySelector("#Score").textContent = score;
}

document.querySelector("#bottomPanel").addEventListener("click",function(details){
    let clk = Number(details.target.textContent);
    if (clk === hitNum){
        makeBubbles();
        getHit();
        updateScore();
    } else{
        clearInterval(timer);
        document.querySelector("#timer").textContent = 0;
        document.querySelector("#hitBox").textContent = 0;
        document.querySelector("#bottomPanel").innerHTML = 
        `<div class="GO">
        <h1>Game Over</h1>
        <h1>Score: ${score}</h1>
        </div>`;
        
    }
})

function intro(){
    let introTimer = setInterval(function(){
        if (introTime > 0){
            introTime --;
            document.querySelector("#bottomPanel").innerHTML = `
            <div>
            <h1>Game starting in ... ${introTime}</h1>
            </div>
            `
        } else{
            clearInterval(introTimer);
            makeBubbles();
            getHit();
            setTimer();
        }
    },1000)
}
intro()




// Iteration 1: Declare variables required for this game
let gameBody=document.getElementById("game-body");
let timerBox=document.getElementById("timer");

let zombieID=0;
let zombieimg=[
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png"
]


// Iteration 1.2: Add shotgun sound
let shotGun=new Audio("./assets/shotgun.wav");
gameBody.onclick=()=>{
    shotGun.pause();
    shotGun.currentTime=0;
    shotGun.play();
}

// Iteration 1.3: Add background sound
let backgroundAudio=new Audio("./assets/bgm.mp3");
backgroundAudio.play();
backgroundAudio.loop=true;

// Iteration 1.4: Add lives
let lives=4;


// Iteration 2: Write a function to make a zombie
function makeZombie(){
    let zombie = document.createElement("img");
    let zimage=zombieimg[getRandomint(0,zombieimg.length)]
    zombie.src=`./assets/${zimage}`
    // zombie.src = "./assets/zombie-1.png"
    zombie.classList.add("zombie-image");
    zombie.id=`zombie${zombieID}`

    zombie.style.transform = `translateX(${getRandomint(10,90)}vw)`;
    zombie.style.animationDuration=`${getRandomint(1,6)}`


    gameBody.append(zombie)
    zombie.onclick=()=>{
        zombieKill(zombie);
     }
}


// Iteration 3: Write a function to check if the player missed a zombie
function checkCollision(){
    let zombie= document.getElementById("zombie"+zombieID)

    if (zombie.getBoundingClientRect().top <= 0) {
        lives--;
        zombieKill(zombie);
       }
    }
     


// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombieKill(zombie){
    zombie.style.display="none"
     zombieID++;
    makeZombie() 

}

// Iteration 5: Creating timer
function startTimer(){
    let time=60;
    timerBox.textContent=time;
    setInterval(()=>{
       time--;
       timerBox.textContent=time;
       checkCollision();

       if(time==0){
        window.location.href="./win.html"
    }
    
   
    if(lives==0){
        window.location.href="./game-over.html"
    }
 
},1000)

}
startTimer()

// Iteration 6: Write a code to start the game by calling the first zombie
makeZombie();


// Iteration 7: Write the helper function to get random integer
function getRandomint(max,min){
   var random=Math.floor(Math.random()*(max-min)+min)
   return random;
}

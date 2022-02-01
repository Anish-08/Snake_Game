var canvas = document.getElementById("mycanvas");
alert("The rules are : \n  1. Control keys are W,A,S,D. \n 2. The snake dies if its head collides with the wall. \n 3. The snake grows with time, increasing the score. \n 4. You get 1/3/5 bonus points if the snake eats a fruit depending on level easy/medium/hard. \n 5. The snake dies if it collides with itself. \n 6. Hurdles appear on the board as the game progresses. \n 7. Before becoming completely solid the hurdles flicker for a short duration giving the player a buffer time to escape.\n 8. The score board appears at the end.");
var ctx = canvas.getContext("2d");
canvas.width = 1225;
canvas.height = 575;

const snakex = [];
const snakey = [];
const snakedir = [];
const wallsx = [];
const wallsy = [];

var gameendistrue = 0;
var currsize = 1;
var currwallsize = 0;
var time = 0;
var score = 0;
var currbonusx = 25 * 25;
var currbonusy = 25 * 5;
var temp = 0;
var speed = 20;
var mousex = 0;
var mousey = 0;
var new_time=0;

snakex[0] = 25 * 25
snakey[0] = 25 * 16
snakedir[0] = 1;


//LEVEL 0 Normal Screen
function level0() {
    ctx.fillStyle = "#7fffd4";
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.closePath();


    //Creating external walls
    ctx.fillStyle = "#008080";
    ctx.beginPath()
    for (let i = 0; i <= 40; i++) {
        ctx.rect(30 * i, 0, 35, 25);
        ctx.rect(30 * i, 550, 35, 25)

    }
    for (let i = 0; i <= 18; i++) {
        ctx.rect(0, 30 * i, 25, 35);

        ctx.rect(1200, 30 * i, 25, 35);

    }
    ctx.fill()
    ctx.closePath()


}


//LEVEl 1 H
function level1() {
    if (1000 <= time && time < 1500 && time % 10 <= 4) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(25 * 20, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 20, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 29, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 1500) {
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(25 * 20, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 20, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 29, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();

    }

    if (time == 1) {
        for (let p = 0; p <= 9; p++) {
            wallsx[p] = 25 * 20 + p * 25;
            wallsy[p] = 25 * 11;
        }

        for (let p = 10; p <= 20; p++) {
            wallsx[p] = 25 * 29;
            wallsy[p] = 25 * 6 + (p - 10) * 25;
        }
        for (let p = 21; p <= 31; p++) {
            wallsx[p] = 25 * 20;
            wallsy[p] = 25 * 6 + (p - 21) * 25;
        }
       
    }
    if(time == 1500){
        currwallsize = 31;
    }
}

//LEVEL 2 ||
function level2() {
    if (4500 <= time && time < 5000 && time % 10 <= 4) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        //ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 9, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 40, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 5000) { //left rectangle and right
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        //ctx.rect(25 * 19, 25 * 11, 10 * 25, 25); //horizontal tab
        ctx.rect(25 * 9, 25 * 11 - 125, 25, 11 * 25); // vertical left
        ctx.rect(25 * 40, 25 * 11 - 125, 25, 11 * 25); //vertical right
        ctx.fill();
        ctx.closePath();
    }
    if (time == 1) {
        for (let p = 32; p <= 42; p++) {
            wallsx[p] = 25 * 9;
            wallsy[p] = 25 * 6 + (p - 32) * 25;
        }
        for (let p = 43; p <= 53; p++) {
            wallsx[p] = 25 * 40;
            wallsy[p] = 25 * 6 + (p - 43) * 25;
        }
        
    }
    if(time == 5000){
        currwallsize = 53;
    }

}

function level3() {
    if (time <= 7500 && time >= 7000 && time % 10 <= 4) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(25 * 29, 25 * 11 - 125, 9 * 25, 25); // top right
        ctx.rect(25 * 29, 25 * 21 - 125, 9 * 25, 25); //bottom right
        ctx.rect(25 * 12, 25 * 11 - 125, 9 * 25, 25); // top left
        ctx.rect(25 * 12, 25 * 21 - 125, 9 * 25, 25); //bottom left
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 7500) {
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(25 * 29, 25 * 11 - 125, 9 * 25, 25); // top right
        ctx.rect(25 * 29, 25 * 21 - 125, 9 * 25, 25); //bottom right
        ctx.rect(25 * 12, 25 * 11 - 125, 9 * 25, 25); // top left
        ctx.rect(25 * 12, 25 * 21 - 125, 9 * 25, 25); //bottom left
        ctx.fill();
        ctx.closePath();
    }
    if (time == 1) {
        for (let p = 54; p <= 62; p++) {
            wallsx[p] = 25 * 29 + (p - 54) * 25;
            wallsy[p] = 25 * 11 - 125;
        }
        for (let p = 63; p <= 71; p++) {
            wallsx[p] = 25 * 29 + (p - 63) * 25;
            wallsy[p] = 25 * 21 - 125;
        }
        for (let p = 72; p <= 80; p++) {
            wallsx[p] = 25 * 12 + (p - 72) * 25;
            wallsy[p] = 25 * 11 - 125;
        }
        for (let p = 81; p <= 89; p++) {
            wallsx[p] = 25 * 12 + (p - 81) * 25;
            wallsy[p] = 25 * 21 - 125;
        }
    }
    if(time == 7500){
        currwallsize = 89
    }
}


//LEVEL 4 ||
function level4() {
    if (9500 <= time && time < 10000 && time % 10 <= 4) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(25 * 10, 25 * 11, 6 * 25, 25); //horizontal tab
        ctx.rect(25 * 34, 25 * 11, 6 * 25, 25); //horizontal tab
        ctx.rect(25 * 24, 25 * 1, 50, 7 * 25); // vertical 
        ctx.rect(25 * 24, 25 * 22 - 175, 50, 7 * 25); //vertical
        ctx.fill();
        ctx.closePath();
    }
    if (time >= 10000) { //left rectangle and right
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.rect(25 * 10, 25 * 11, 6 * 25, 25); //horizontal tab
        ctx.rect(25 * 34, 25 * 11, 6 * 25, 25); //horizontal tab
        ctx.rect(25 * 24, 25 * 1, 50, 7 * 25); // vertical 
        ctx.rect(25 * 24, 25 * 22 - 175, 50, 7 * 25); //vertical down 
        ctx.fill();
        ctx.closePath();
    }
    if (time == 1) {
        for (let p = 90; p <= 95; p++) {
            wallsx[p] = 25 * 10 + (p - 90) * 25;
            wallsy[p] = 25 * 11;
        }
        for (let p = 96; p <= 101; p++) {
            wallsx[p] = 25 * 34 + (p - 96) * 25;
            wallsy[p] = 25 * 11;
        }
        for (let p = 102; p <= 108; p++) {
            wallsx[p] = 25 * 24;
            wallsy[p] = 25 * 1 + (p - 102) * 25;
        }
        for (let p = 109; p <= 115; p++) {
            wallsx[p] = 25 * 25;
            wallsy[p] = 25 * 1 + (p - 109) * 25;
        }
        for (let p = 115; p <= 121; p++) {
            wallsx[p] = 25 * 24;
            wallsy[p] = 25 * 22 - 175 + (p - 115) * 25;
        }
        for (let p = 122; p <= 128; p++) {
            wallsx[p] = 25 * 25;
            wallsy[p] = 25 * 22 - 175 + (p - 122) * 25;
        }
        
    }
    if(time == 10000){
        currwallsize = 128;
    }

}

function bonus_points() {
    apple_image = new Image();
    apple_image.src = 'apple.png';
    apple_image.onload = function() {
        ctx.drawImage(apple_image, currbonusx, currbonusy, 25, 25);
    }


}


//gamescreen
function Draw_background() {
    level0();
    level1();
    level2();
    level3();
    level4();
    bonus_points();
}






//Setting direction of entire snake
function direction(d) {
    var u = currsize - 1;
    while (u > 0) {
        snakedir[u] = snakedir[u - 1]
        u = u - 1;
    }
    snakedir[0] = d;
}


//To increase size of snake every 100 sec 
function increase_size_of_snake() {
    if (snakedir[0] == 1) {
        u = 0;
        v = 1;
    }
    if (snakedir[0] == 2) {
        u = -1;
        v = 0;
    }
    if (snakedir[0] == 3) {
        u = 0;
        v = -1;
    }
    if (snakedir[0] == 4) {
        u = 1;
        v = 0;
    }
    snakex[currsize] = snakex[currsize - 1] + u * 25;
    snakey[currsize] = snakey[currsize - 1] + v * 25;
    snakedir[currsize] = snakedir[0];
    currsize = currsize + 1;

}



function move_snake(u) {
    if (snakedir[u] == 1) {
        snakey[u] = snakey[u] - 25;
    }
    if (snakedir[u] == 2) {
        snakex[u] = snakex[u] + 25;
    }
    if (snakedir[u] == 3) {
        snakey[u] = snakey[u] + 25;
    }
    if (snakedir[u] == 4) {
        snakex[u] = snakex[u] - 25;
    }
}

function draw_snake(u) {
    ctx.fillStyle = '#FFA500'
    ctx.beginPath()
    ctx.rect(snakex[u], snakey[u], 25, 25)
    ctx.fill()
    ctx.closePath()
    if (u == 0) {

        if (snakedir[0] == 1) {
            ctx.fillStyle = 'black'
            ctx.beginPath()
            ctx.rect(snakex[u] + 6, snakey[u] + 4, 4, 4)
            ctx.rect(snakex[u] + 15, snakey[u] + 4, 4, 4)
            ctx.fill()
            ctx.closePath()
        }
        if (snakedir[0] == 2) {
            ctx.fillStyle = 'black'
            ctx.beginPath()
            ctx.rect(snakex[u] + 17, snakey[u] + 6, 4, 4)
            ctx.rect(snakex[u] + 17, snakey[u] + 15, 4, 4)
            ctx.fill()
            ctx.closePath()
        }
        if (snakedir[0] == 3) {
            ctx.fillStyle = 'black'
            ctx.beginPath()
            ctx.rect(snakex[u] + 6, snakey[u] + 17, 4, 4)
            ctx.rect(snakex[u] + 15, snakey[u] + 17, 4, 4)
            ctx.fill()
            ctx.closePath()
        }
        if (snakedir[0] == 4) {
            ctx.fillStyle = 'black'
            ctx.beginPath()
            ctx.rect(snakex[u] + 4, snakey[u] + 6, 4, 4)
            ctx.rect(snakex[u] + 4, snakey[u] + 15, 4, 4)
            ctx.fill()
            ctx.closePath()
        }

    }
}


function show_score() {
    if(temp==1 )
    {var div = document.getElementById('score_view');
    div.innerHTML = "LENGTH = " + currsize + "&nbsp &nbsp &nbsp BONUS = " + score;}
    else if(temp==0)
        {var div = document.getElementById('score_view');
        div.innerHTML = "Select Difficulty Level ";
    }
    

    
}

function start_game_window(){
    ctx.font = "60px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("Easy" , 25*8 , 25 * 12);
    ctx.fillText("Medium" , 25*20 , 25 * 12);
    ctx.fillText("Hard" , 25*36 , 25 * 12);
    

}

function show_total_score(){
    ctx.fillStyle = 'black';
    ctx.font = "60px Arial";
    ctx.fillText("Total score: "+ (score+currsize), 25*18, 25*10);
    ctx.font = "20px Arial";
    ctx.fillText("Game will start in a while" , 25*20 , 25*12);
    new_time = new_time + 1;

    if(new_time>1000) {
        reset();
    }
}

function reset(){
    gameendistrue = 0;
    currsize = 1;
    currwallsize = 0;
    time = 0;
    score = 0;
    currbonusx = 25 * 25;
    currbonusy = 25 * 5;
    temp = 0;
    snakex[0] = 25 * 25
    snakey[0] = 25 * 16
    snakedir[0] = 1;
    speed = 50;
    new_time=0;
}


function update() {
    if(temp == 1){
        Draw_background()
        if (time % 1000 == 0) {
            increase_size_of_snake();
        }
        for (let u = 0; u < currsize ; u++) {
            draw_snake(u);
            if (time % speed == 0) {
                move_snake(u);
            }
        }
        if (time % speed == 0) {
            direction(snakedir[0]);
        }
        time = time + 1;
    }
    else if(temp==0){
        level0();
        start_game_window()
    }
    else{
        level0();
        show_total_score();
        
    }
    show_score();
     
}




//Taking input from user pressing keys
onkeydown = function(e) {
    switch (e.which) {
        case 65: //left
            snakedir[0] = 4;
            break;
        case 87: //up
            snakedir[0] = 1;
            break;

        case 68: //right
            snakedir[0] = 2;
            break;

        case 83:
            //down
            snakedir[0] = 3;
            break;
        

    }

}
  
onmousedown = function(e){
    mousex = e.clientX;
    mousey = e.clientY;
    if(mousex>=25 * 8 &&  mousex<=  25*16 && mousey>= 25 * 12 && mousey <= 25*16 && temp==0){
        speed = 50;
        temp = 1;
    }
    if(mousex>= 25*20 && mousex<=25*30  && mousey>=25*12 && mousey <= 25*16 && temp==0){
        speed = 30;
        temp = 1;
    }
    if(mousex>=25*36   && mousex<=42*25  && mousey>=25 * 12 && mousey <= 25* 16 && temp==0){
        speed = 10;
        temp = 1;
    }
}



function check_if_available() {
    for (let u = 0; u <= 128; u++) {
        if (currbonusx == wallsx[u] && currbonusy == wallsy[u]) return 0;
    }
    return 1;
}

//Collision Check
function collision_check() {
    var h = snakex[0];
    var k = snakey[0];

    //Checking for external Wall collision 
    if (h < 25 || h >= 1185) gameendistrue = 1;

    if (k < 25 || k >= 550) gameendistrue = 1;


    //Checking for internal wall collision
    for (let p = 0; p <= currwallsize; p++) {
        if (h == wallsx[p] && k == wallsy[p]) gameendistrue = 1;
    }


    //Checking for self collision
    for (let p = 1; p < currsize; p++) {
        if (h == snakex[p] && k == snakey[p]) gameendistrue = 1;
    }

    if (h == currbonusx && k == currbonusy) {
        score += ((60-speed)/10);
        currbonusx = 25 + 25 * Math.floor(Math.random() * 47);
        currbonusy = 25 + 25 * Math.floor(Math.random() * 21);
        while (check_if_available() == 0) {
            currbonusx = 25 + 25 * Math.floor(Math.random() * 47);
            currbonusy = 25 + 25 * Math.floor(Math.random() * 21);
        }
    }
    //ending the game if collision has occured
    if (gameendistrue == 1) {
        //alert("Game Over ! \n" + "Your Score is " + (score + currsize));
        temp = 2;
        
        //clearInterval(one);
        //clearInterval(two);
    }
}




//Running the game

two = setInterval(update, 0.1)
one = setInterval(collision_check, 0.1)

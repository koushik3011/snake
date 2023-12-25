snakeElement = document.createElement('div');
snakeElement.style.gridRow = "1/1";
snakeElement.style.gridColumn = "1/1";
$(snakeElement).addClass("snake");
var parts=[]
var snakearr=[{x:1,y:1}]
var p =0
$("#cont").append(snakeElement);
snakeElement.style.gridColumnStart=1
parts.push(snakeElement)
var score=0
var speed = 100
var i=true , j= true , k= true , l= true
var set=8
v = false;
food = document.createElement('div');
var x=1
function aftereatingfood(params) {
addfood()
for (let index = 0; index < score; index++) {
 addfood()    
}
console.log(p)
newsnamke = document.createElement('div')
newsnamke.style.gridRow = snakearr[p].x+"/"+snakearr[p].x;
var d=0
if (p==0) {
    d=-100
}else if (p==1){d=300} else{d=100}
 newsnamke.style.gridColumn= (snakearr[p].y+d)+"/"+(snakearr[p].y+1);
 snakearr.push({x:snakearr[p].x,y:(snakearr[p].y+d)})
 console.log(snakearr)
 console.log("at creation")
 $(newsnamke).addClass("part");
 parts.push(newsnamke)
 $("#cont").append(newsnamke);
 p++
 score++
 $("#score").text(score);
}
addfood()
function change(a,b,c,i) {
        collison()
    
    a.style.gridRow=b+"/"+b
    a.style.gridColumn=c+"/"+c
}
$(document).keydown(function (e) { 
   
    switch (e.key) {
        case "ArrowUp":
        i=true
        j=false
        k=false
        l=false
        if (set!=1) {
           set=1
            moveup()
        }
            break;
        case "ArrowDown":
            i=false
            j=true
            k=false
            l=false
           if (set!=0) {
            set=0
            movedown()
           }
            break;
        case "ArrowLeft":
            i=false
            j=false
            k=true
            l=false
            if (set!=2) {
                set=2
                moveleft()
            }
            break;
        case "ArrowRight":
            i=false
            j=false
            k=false
            l=true
            if (set!=3) {
                set=3
                moveright()
            }
            break;
   
        default:
            break;
    }
});

function collison(params) 
 {
   if (snakeElement.style.gridRowStart>25||snakeElement.style.gridRowStart<0||snakeElement.style.gridColumnStart>40||snakeElement.style.gridColumnStart<0) {
    console.log("here")   
    gameover()
     return true
   } 
 
//    for (let i = 1; i < parts.length; i++) {
//      if (parts[0].style.gridRowStart==parts[i].style.gridRowStart&&parts[0].style.gridColumnStart==parts[i].style.gridColumnStart) {
//         gameover()
//      }
//    }
  if (food.style.gridRow==snakeElement.style.gridRow&&food.style.gridColumn==snakeElement.style.gridColumn) {
    for (let index = 0; index < x; index++) {
      aftereatingfood()  
    }
  }
}

function moveup(params) {
    if (i) {
    adjusi()
    snakearr[0].x--
    for (let index = 0; index < parts.length; index++) {
        change(parts[index],snakearr[index].x,snakearr[index].y,index)   
    }
        setTimeout(() => {
       moveup()
        }, speed);
     }
}
function movedown(params) {
    if (j) {  
    adjusi()
    snakearr[0].x++
    for (let index = 0; index < parts.length; index++) {
     change(parts[index],snakearr[index].x,snakearr[index].y,index) }  
    setTimeout(() => {
     movedown()
    }, speed);
 }
}
function moveleft(params) {
    if (k) {
    adjusi()
    snakearr[0].y--
    for (let index = 0; index < parts.length; index++) {
        change(parts[index],snakearr[index].x,snakearr[index].y,index)   
    }
   
        setTimeout(() => {
         moveleft()
        }, speed);
     }
    

}
function moveright(params) {
    if (l) {
      
    adjusi()
    snakearr[0].y++
    for (let index = 0; index < parts.length; index++) {
        change(parts[index],snakearr[index].x,snakearr[index].y,index)   
    }
  
        setTimeout(() => {
         moveright()
        }, speed);
     }    
}
function adjusi(params) {
    for (let index = snakearr.length-1 ; index > 0; index--) {
        snakearr[index].x = snakearr[index - 1].x;
        snakearr[index].y = snakearr[index - 1].y;
    }
}
function addfood(params) {
    var y= Math.round(Math.random()*37+2)
    var x= Math.round(Math.random()*22+2)
    food.style.gridRow=x+"/"+x
    food.style.gridColumn=y+"/"+y
    $(food).addClass("food");
    $("#cont").append(food);
}


function gameover() {
    score=0
   parts.forEach((ele)=>{
     $(ele).remove();
   })
   parts=[]
   snakeElement.style.gridRow = "1/1";
snakeElement.style.gridColumn = "1/1";
   parts.push(snakeElement)
   alert("gameover")
   location.reload()
   $("#cont").append(snakeElement);
}
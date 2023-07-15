function createBox(width, height, isIt) {

    let e  = document.createElement('div');
    let elementMaze = document.getElementById("maze")
    //e.innerHTML= "Man";
    e.classList.add("cell");
    if (isIt==0){
    e.style.background="white";}
    else{ 
        if(isIt==1){
        e.style.background="black";}
        else
        {
            e.style.background="yellow";  
        }
    }
    e.style.width=width.toString()+"pt";
    e.style.height=height.toString()+"pt";
    elementMaze.appendChild(e);

}

function changeColor(color,x,y) {
        //window.document.getElementById("maze").style.background=color;

        let elementMaze = document.getElementsByClassName("cell");
        let tableCounter;
        tableCounter=(y*10)+x;
        if (tableCounter>-1){
        elementMaze[tableCounter].style.background=color;
        }
        console.log(tableCounter);

        
    }


function createPlayground()
{
    for(let e=0;e<10;e++) {
        for(let i=0;i<10;i++) {
    createBox(40,40,maze[e][i]);}
    }

}



function tail(x,y){

    let tailcolor;

    if (x>-1){
    
        if (y>-1){

        if (maze[x][y]==1)
        {

            tailcolor="black";
        }
        else
        {
            tailcolor="white";
        }
    }
    }

    

    return tailcolor;
}


function startCordinates(x,y){
    let tableCounter=0;
    tableCounter=y*10+x;
    return tableCounter;
}


function mouseStepMove(stepX,stepY,maze)
{

    

    for(let e=0;e<10;e++) {
        for(let i=0;i<10;i++) {
            if (maze[e][i]==2){
                startX=i;
                console.log("Zmienna x:" +startX);
                startY=e;
                console.log("Zmienna y:" +startY);
             }
           }}

           maze[startY+stepY][startX+stepX]=2;
           maze[startY][startX]=0;
           //console.log("Oto kolor:"+maze[startX][startY]);

//  if(stepX!=0){
//     if (stepY!=0){
//           maze[startX+stepX][startY+stepY]=2;
//           maze[startX][startY]=0;
//           mouseMemory[startX+stepX][startY+stepY]=2;
//           mouseMemory[startX][startY]=0;}}



//           console.log("Z wnetrze mouseStepMove:"+maze);

    // let i=startX+stepX;
    // let j=startY+stepY;
    // let u=i-1;
    // let t=j-1
    // let colorYellow= "yellow";
    //setTimeout(changeColor, time, colorYellow, i, j );
    //setTimeout(changeColor, time, tail(u,t), u, t );

    //changeColor(colorYellow, i, j);
    //changeColor(tail(u,t), u, t);
 return maze;
}

function odczytMaze(x,y,maze){
    let color;

 let colorCode=maze[x][y];
 switch(colorCode){
 case 0:
color="white";
break;
 case 1:
color="black";
break;
 case 2:
color="yellow";
break;
 default: 
 color="blue";
 break;
}


    return color;
}

function render() {

  
     
    for(let e=0;e<10;e++) {
        for(let i=0;i<10;i++) {
            changeColor(odczytMaze(i,e,mazeTrans(maze)),i,e);
           }
   


}
}



    let colorRed= "red";
    let colorYellow= "yellow";
    let colorGreen= "green";
    let maze = [[1,0,0,0,1,1,1,1,1,1],
                [1,1,1,1,1,0,0,0,0,0],
                [1,0,0,0,1,0,1,1,1,1],
                [1,0,1,0,1,0,1,0,0,0],
                [1,0,1,0,1,0,1,0,1,0],
                [1,0,1,0,1,0,1,0,1,0],
                [1,0,0,0,1,0,1,1,1,0],
                [1,0,1,0,1,0,0,0,0,0],
                [1,2,1,0,0,0,1,1,1,0],
                [1,0,1,1,1,1,1,0,0,0],]

    let mazeMatrix=[maze, maze, maze, maze];

    function mazeTrans (maze)
    {   
        let x=0;
        let y=0;
        let mazeTrans=[[1,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,0],
        [1,0,0,0,1,0,1,1,1,1],
        [1,0,1,0,1,0,1,0,0,0],
        [1,0,1,0,1,0,1,0,1,0],
        [1,0,1,0,1,0,1,0,1,0],
        [1,0,0,0,1,0,1,1,1,0],
        [1,0,1,0,1,0,0,0,0,0],
        [1,2,1,0,0,0,1,1,1,0],
        [1,2,1,1,1,1,1,0,0,0],]

        for (let e=0;e<10;e++) {
            for(let i=0;i<10;i++) {
                mazeTrans[i][e]=maze[e][i];    
            }
            }
            

        return mazeTrans
    }


    
    
    let mouseMemory = [[1,0,0,0,1,1,1,1,1,1],
                       [1,1,1,1,1,0,0,0,0,0],
                       [1,0,0,0,1,0,1,1,1,1],
                       [1,0,1,0,1,0,1,0,0,0],
                       [1,0,1,0,1,0,1,0,1,0],
                       [1,0,1,0,1,0,1,0,1,0],
                       [1,0,0,0,1,0,1,1,1,0],
                       [1,0,1,0,1,0,0,0,0,0],
                       [1,2,1,0,0,0,1,1,1,0],
                       [1,2,1,1,1,1,1,0,0,0],
    ]  

function main()
{
    
    //window.maze.style.background ="#AA0000";
    createPlayground();
   
    let colorRed= "#FF0000";
    let colorYellow= "yellow";
    let colorGreen= "green";
    
   let elementMaze = document.getElementsByClassName("cell");
    //elementMaze[startCordinates(1,9)].style.background="yellow";
    console.log(elementMaze);

    let step= 0;
    let time= 0;
    
    do {
        time= time+step*100;
        //maze=mouseStepMove(0,-1,maze);
        maze=setTimeout(mouseStepMove,time,0,-1,maze);
        //maze=mouseStepMove(0,-1,maze);
        //mazeMatrix[step]=maze;
        setTimeout(render,time);
        //maze=mouseStepMove(1,-1,mazeTrans(mouseMemory),mazeTrans(maze));
        //console.log(maze);
        //render();
        //mouseStepMove(0,-1,mazeTrans(mouseMemory),maze);
        //mouseStepMove(0,-1,mazeTrans(mouseMemory),maze);
        step++;
      
        
        
    }

    while (step<1);

    //let thing = changeColor(colorRed);
    //setTimeout(changeColor, 2000, colorOther );
    //setTimeout(changeColor, 4000, colorGreen );
   
 

}

window.addEventListener("DOMContentLoaded", main);

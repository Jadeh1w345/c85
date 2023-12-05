canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


car_width=100;
car_height=100;

bg="parkingLot.jpg"

car_x=10;
car_y=25;


function add(){

background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=bg;

car_imgTag=new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src="car2.png";

}

function uploadBackground(){

ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadCar(){

    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
    
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){

    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){

    up();
    console.log("up");

    }
    
    if(keyPressed=='40'){

        down();
        console.log("down");
    
        }
        if(keyPressed=='37'){

        left();
            console.log("left");
        
            }
            if(keyPressed=='39'){

                right();
                console.log("right");
            
                }

    function up(){

        if(car_y>=0)
        {

       car_y=car_y-10;
       console.log("when the up arrow is pressed, x = "+car_x+"| y="+car_y);
       uploadBackground();
       uploadCar();       
        }
    }
     
    function down(){

        if(car_y<=600)
        {

       car_y=car_y+10;
       console.log("when the down arrow is pressed, x = "+car_x+"| y="+car_y);
       uploadBackground();
       uploadCar();       
        }
    }

    function left(){

        if(car_x>=0)
        {

       car_x=car_x-10;
       console.log("when the left arrow is pressed, x = "+car_x+"| y="+car_y);
       uploadBackground();
       uploadCar();       
        }
    }

    function right(){

        if(car_x<=700)
        {

       car_x=car_x+10;
       console.log("when the right arrow is pressed, x = "+car_x+"| y="+car_y);
       uploadBackground();
       uploadCar();       
        }
    }
    }
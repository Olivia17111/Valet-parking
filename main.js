//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
car_width = 75;
car_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_y = 225;
greencar_x = 5;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image ();
greencar_image.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y, car_width , car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
		console.log(greencar_y);
		   
		
	}
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
	if (greencar_y <=400)
	{
		greencar_y = greencar_y + 10;
		console.log(greencar_y);
		uploadBackground();
		uploadgreencar();
		if (greencar_y <=195)
		{
			greencar_y = 225;
		}
	}
}

function left()
{
	//Define function to move the car left side 
	if (greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		console.log(greencar_x);
		uploadBackground();
		uploadgreencar();
		
	}
}

function right()
{
	//Define function to move the car right side
	if (greencar_x <= 715)
	{
		greencar_x = greencar_x + 10;
		console.log(greencar_x);
		uploadBackground();
		uploadgreencar();
	}
	
}

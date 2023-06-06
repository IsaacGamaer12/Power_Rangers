
//1. Create the variable for the canvas:
var canvas = new fabric.Canvas('myCanvas')


 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
			
		//2. Scale to width and height block_image_object
		
		block_image_object.scaleToWidth(150);
		block_image_object.scaleToHeight(140);


		block_image_object.set({
		top:block_y,
		left:block_x
		});

		//3. Add block_image_object to the canvas:
		
		canvas.add(block_image_object);

	});

}

//4. Create an addEventListener method so the function my_keydown can be called:

	window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

//5. Add the codes for the keys on every if statement:

	if(keyPressed == '  82  ')
	{
		//For the red Power Ranger
		new_image('rr1.png'); 
	}
	if(keyPressed == '  71  ')
	{
		block_x = 200;
		//Add new_ image for the green Power Ranger
		new_image('gr.png');
	}
	
	if(keyPressed == '  89  ')
	{
		block_x =350;
		//Add new_ image for the yellow Power Ranger
		new_image('yr.png');
	}
	if(keyPressed == '  80  ')
	{
		block_x = 500;
		//Add new_ image for the pink Power Ranger
		new_image('pr.png');
	}
	if(keyPressed == '  66  ')
	{
		block_x = 700;
		//Add new_ image for the blue Power Ranger:
		new_image('br.png');
	}
	
}


/* These variables are used to position each of the rectangles.
The variables change accordingly to the speed variables, so that
both the rectangles can move */
let x;
let y;
let x1;
let y1;

let xspeed;
let yspeed;
let x1speed;
let y1speed;

/* The usage of these two variables makes it so the two moving
rectangles each have a different random speed */
const rand = 5 + Math.random()*7;
const rand1 = 3 + Math.random()*5;

/* colorList is an array, a variable that contains a multitude of values */
const colorList = ["red", "#009fe3", "yellow", "black"];
let colorHex = colorList[2];
let colorHex1 = colorList[1];

/* The two final variables are used to play two different sounds
as a consequence to a condition */
let win;
let bonk;


/* The preload() function is called before the setup()
function and is used to load external files inside the
document. In this case, I used it to load two mp3 files
that are played under specific circumstances */
function preload() {
  win = loadSound("libraries/Sound1.mp3");
  bonk = loadSound("libraries/Sound2.mp3");
}


function setup() {
	canvas = createCanvas(1000, 600);

	x = 100;
	y = 100;
	xspeed = rand;
	yspeed = rand;
        x1 = 130;
	y1 = 400;
	x1speed = rand1;
	y1speed = rand1;
}


function draw() {
	background("grey");

	stroke("black");
	strokeWeight(5);

/* The rectangles are classified by color,
so that the fill() function doesn't have to be
repeated for each of them.

I named all the rectangles following an order
I annotated separately, so that, thanks to each line
of comment, I can easily find the rectangle I need */
  fill("#009fe3");
  rect(500, 2, 164, 120); //blue1
  square(664, 64, 124); //blue2
  rect(196, 358, 143, 120); //blue3
  rect(321, 422, 164, 121/2); //blue4
  rect(664, 289, 254, 243); //blue5

  fill("yellow");
  rect(300, 2, 200, 40); //yellow1
  square(664, 2, 62); //yellow2
  rect(788, 2, 210, 40); //yellow3
  rect(330, 42, 170, 125); //yellow4
  rect(912, 42, 86, 184); //yellow5
  rect(500, 243, 164, 46); //yellow6
  rect(2, 356, 88, 188); //yellow7
  rect(196, 477, 62, 121); //yellow8
  rect(485, 422, 179, 113); //yellow9

  fill("white");
  rect(2, 2, 297, 40); //white1
  square(788, 42, 124); //white2
  rect(330, 167, 85, 125); //white3
  rect(415, 167, 85, 125); //white4
  rect(664, 165, 124, 124); //white5
  rect(2, 318, 88, 40); //white6
  rect(196, 318, 143, 40); //white7
  rect(485, 289, 178, 133); //white8
  rect(912, 226, 86, 184); //white9
  rect(90, 414, 106, 63); //white10
  rect(90, 477, 106, 63); //white11
  rect(2, 540, 194, 58); //white12
  rect(258, 477, 63, 121); //white13
  rect(912, 410, 86, 122); //white14
  rect(485, 532, 85, 65); //white15
  rect(660, 532, 218, 65); //white16
  
  fill("black");
  square(726, 2, 62); //black1
  square(788, 165, 123); //black2
  rect(90, 318, 106, 95); //black3
  rect(339, 289, 146, 125); //black4
  rect(572, 532, 92, 65); //black5
 
  fill("red");
  rect(2, 42, 337, 278); //red1
  rect(321, 358, 164, 64); //red2
  rect(321, 477, 164, 121); //red3


/* colorHex and colorHex1 are variables
whose value is taken from the colorList array.
The value changes whenever the rectangles bounce and the
changeColor function is activated.
I chose to use two different variables so that
the two rectangles can have different colors,
even if the color switch is activated by both */
  fill(color(colorHex));
  rect(x, y, 164, 121); //bigger rect
  
  fill(color(colorHex1));
  rect(x1, y1, 120, 65); //smaller rect

/* This block creates the text that appears and slides
on screen when the artwork is started.
The push() and pop() functions  */
  push();
   translate(0, frameCount*5);
   stroke("black");
   strokeWeight(8);
   fill("white");
   textSize(100);
   textStyle("light");
   textFont('Helvetica');
   text("Sound on!", 100, 100);
  pop();

/* x and y determine the position of the rectangle.
Using a second value (xspeed and yspeed) allows the
rectangles to move more or less fast, depending on the value.
Since the function draw() is reloaded every frame,
the rectangle will be moving of a number equal to xspeed and yspeed
every frame */
  if (frameCount >= 100) {
    x = x + xspeed;
	  y = y + yspeed;
    x1 = x1 + x1speed;
    y1 = y1 + y1speed;
  }

	
/* Bouncing function - bigger rect
  
When the X and Y coordinates of the rectangle,
summed with the width/height of the rectangle
because the origin coordinate is the top left corner,
correspond with the margin of the canva, the speed of
the rectangle changes direction, becoming negative
and making the rectangle bounce */
	if (x + 164 >= 1000 || x <= 0) {
	  xspeed = -xspeed;
    changeColor();
    sound();
  }
	
	if (y + 121 >= 600 || y <= 0) {
	  yspeed = -yspeed;
    changeColor();
    sound();
	}

/* Thanks to this if statement, when the rectangle finds
its position, it stops bouncing around */
  if ( x > 480 && x < 520 && y > 100 && y < 128) {
    console.log("incastro");
    x = 500;
    y = 122;
  }

/* Bouncing function - smaller rect */

  if (x1 + 120 >= 1000 || x1 <= 0) {
    x1speed = -x1speed;
    changeColor();
    sound1();
  }
    
  if (y1 + 65 >= 600 || y1 <= 0) {
    y1speed = -y1speed;
    changeColor();
    sound1();
  }

  if ( x1 > 868 && x1 < 898 && y1 > 520 && y1 < 540) {
    console.log("incastro1");
    x1 = 878;
    y1 = 532;
  }

/* This if statement makes the text at the end appear
when both the rectangles have matched their position */ 
  if ( x == 500 && y == 122 && x1 == 878 && y1 == 532) {
    stroke("black");
    strokeWeight(8);
    fill("white");
    textSize(100);
    textStyle("light");
    textFont('Helvetica');
    text("The end", 100, 300);
  }
} //end of function draw()

/* Everytime either rectangle bounces,
the function is activated, making both of them
change color */
function changeColor() {
  colorHex = random(colorList);
  colorHex1 = random(colorList);
}

/* The two sound functions give the rectangles a bouncing noise */
function sound() {
  win.play();
}

function sound1() {
  bonk.play();
}

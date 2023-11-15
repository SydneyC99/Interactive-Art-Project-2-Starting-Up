let goButton;
let bgImg;

function setup() {
    let canvas = new Canvas(300, 300);

    // world.gravity.y = 10;
    bgImg = loadImage('Assets/Get Up.bmp');

    textFont("Courier", 24);
}

function draw() {

    // try the game without this line :)
    clear();

    background(bgImg);

    goButton = createButton("Get Up");
    goButton.position(25, 12);
    goButton.mousePressed(maze);
    goButton.style('background-color', 'brown');

}

function maze() {
    location.href = "maze.html"
}
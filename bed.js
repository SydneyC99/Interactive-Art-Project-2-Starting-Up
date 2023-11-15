let goButton;

function setup() {
    let canvas = new Canvas("fullscreen");

    // world.gravity.y = 10;


    textFont("Courier", 24);
}

function draw() {

    // try the game without this line :)
    clear();

    goButton = createButton("Get Up");
    goButton.position(12, 12);
    goButton.mousePressed(maze);

}

function maze() {
    location.href = "maze.html"
}
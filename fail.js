let goButton;
let bgImg;

function setup() {
    let canvas = new Canvas(300, 300);

    bgImg = loadImage('Assets/Fail.bmp');

    textFont("Courier", 24);
}

function draw() {

    // try the game without this line :)
    clear();

    background(bgImg);

    goButton = createButton("Go back to bed.");
    goButton.position(80, 190);
    goButton.mousePressed(reset);
    goButton.style('background-color', 'red');

}

function reset() {
    location.href = "index.html";
}
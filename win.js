let goButton;

function setup() {
    
}

function draw() {

    // try the game without this line :)
    clear();

    goButton = createButton("restart");
    goButton.position(50, 12);
    goButton.mousePressed(restart);

}

function restart() {
    location.href = "index.html";
}
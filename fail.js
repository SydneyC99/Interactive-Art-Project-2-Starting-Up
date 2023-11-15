let goButton;

function setup() {
    
}

function draw() {

    // try the game without this line :)
    clear();

    goButton = createButton("reset.");
    goButton.position(50, 12);
    goButton.mousePressed(reset);

}

function reset() {
    location.href = "index.html";
}
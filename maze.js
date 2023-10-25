let sprite;
let canvasHeight;
let canvasWidth;
function setup() {

    canvasHeight = 200;
    canvasWidth = 200;
    
    let canvas = new Canvas(canvasWidth, canvasHeight, 'pixelated x2');
    background('red');

    // world.gravity.y = 10;
    sprite = new Sprite();
    sprite.width = 8;
    sprite.height = canvasHeight;
    sprite.color = 'grey';
    sprite.stroke = 'grey';
    sprite.x = 5;


    textFont("Courier", 24);
}

function draw() {


}
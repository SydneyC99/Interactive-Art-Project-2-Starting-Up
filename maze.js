let char;
let charImg, tileImg;
let canvasHeight;
let canvasWidth;

function preload() {
    charImg = loadImage('Assets/Character Sprite.png');
    tileImg = loadImage('Assets/TileSheet64x48.png');
}

function setup() {

    canvasHeight = 240;
    canvasWidth = 240;
    
    new Canvas(canvasWidth, canvasHeight, 'pixelated x2');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 8;
    
    // char = new Sprite(1.5,1.5, 16,16);
    // char.spriteSheet = charImg;
    // char.addAnis({
    //     front: {row: 0, col: 0}
    // })
    let pathCornerTL = new Group();
    pathCornerTL.collider = 'none';
    pathCornerTL.spriteSheet = tileImg;
    pathCornerTL.addAni({w:1, h:1, row: 0, col: 0});
    pathCornerTL.tile = 'c';

    let pathCornerTR = new Group();
    pathCornerTR.collider = 'none';
    pathCornerTR.spriteSheet = tileImg;
    pathCornerTR.addAni({w:1, h:1, row: 0, col: 3});
    pathCornerTR.tile = 'v';

    let pathCornerBL = new Group();
    pathCornerBL.collider = 'none';
    pathCornerBL.spriteSheet = tileImg;
    pathCornerBL.addAni({w:1, h:1, row: 2, col: 0});
    pathCornerBL.tile = 'b';
    
    let pathTop = new Group();
    pathTop.collider = 'none';
    pathTop.spriteSheet = tileImg;
    pathTop.addAni({w:1, h:1, row: 0, col: 1});
    pathTop.tile = 't';

    let pathLeft = new Group();
    pathLeft.collider = 'none';
    pathLeft.spriteSheet = tileImg;
    pathLeft.addAni({w:1, h:1, row: 1, col: 0});
    pathLeft.tile = 'l';

    new Tiles(
        [
            'ctttttttttttttv',
            'l.............l',
            'b.............l'
        ],
        0.5, 0.5, 1, 1
    );

}

function draw() {
    clear();
    background('black');


}
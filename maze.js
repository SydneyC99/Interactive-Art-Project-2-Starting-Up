let char;
let charImg, tileImg;
let canvasHeight;
let canvasWidth;

function preload() {
    charImg = loadImage('Assets/Character Sprite.png');
    tileImg = loadImage('Assets/TileSheet32x32.png');
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

    //top left corner- outer wall
    let pathCornerTL = new Group();
    pathCornerTL.collider = 'none';
    pathCornerTL.spriteSheet = tileImg;
    pathCornerTL.addAni({w:1, h:1, row: 0, col: 0});
    pathCornerTL.tile = 'c';

    //top right corner- outer wall
    let pathCornerTR = new Group();
    pathCornerTR.collider = 'none';
    pathCornerTR.spriteSheet = tileImg;
    pathCornerTR.addAni({w:1, h:1, row: 0, col: 3});
    pathCornerTR.tile = 'v';

    //bottom left corner- outer wall
    let pathCornerBL = new Group();
    pathCornerBL.collider = 'none';
    pathCornerBL.spriteSheet = tileImg;
    pathCornerBL.addAni({w:1, h:1, row: 2, col: 0});
    pathCornerBL.tile = 'm';

    //bottom right corner -outer wall
    let pathCornerBR = new Group();
    pathCornerBR.collider = 'none';
    pathCornerBR.spriteSheet = tileImg;
    pathCornerBR.addAni({w:1, h:1, row: 2, col: 3});
    pathCornerBR.tile = 'n';
    
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

    let pathRight = new Group();
    pathRight.collider = 'none';
    pathRight.spriteSheet = tileImg;
    pathRight.addAni({w:1, h:1, row: 1, col:3});
    pathRight.tile = 'r';

    let pathBottom = new Group();
    pathBottom.collider = 'none';
    pathBottom.spriteSheet = tileImg;
    pathBottom.addAni({w:1, h:1, row: 0, col:2});
    pathBottom.tile = 'b';

    // innerCornerTL
    // innerCornerTR
    // innerCornerBL
    // innerCornerBR

    let panicTile = new Group();
    panicTile.collider = 'none';
    panicTile.spriteSheet = tileImg;
    panicTile.addAni({w:1, h:1, row: 3, col:1});
    panicTile.tile = 'd';


    new Tiles(
        [
            'ctttttttttttttttttttttttvttttv',
            'l.......................r...dr',
            'mbv........................cbn',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'l............................r',
            'mbbbbbbbbbbbbbbbbbbbbbbbbbbbbn',
        ],
        0.5, 0.5, 1, 1
    );

}

function draw() {
    clear();
    // background(13,12,12);
    background('blue');

}
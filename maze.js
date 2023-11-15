let char;
let charImg, tileImg;
let canvasHeight;
let canvasWidth;
let enemySquare;
let winSquare;
let lives = 3;
let isOverlappingEnemy = false;
let isOverlappingWin = false;

let maze =
    ['ctttvtttvtttttttttttctttttttv',
        'l...r...r...........l.......r',
        'mbh.jbh.r.gbbbbbbbh.l.gbbbh.r',
        '..l...r.r.r...............r.r',
        'l.jbh.r.r.rbbbbbbbbbbbh.h.rbn',
        'l...l.r.r.r.......l...l.l.r.r',
        'mbh.l.r.r.r.gbbbh.l.g.k.jbk.r',
        'l.l.l.r.r.r.r...l.l.r.......r',
        'l.l.r.....r.r.h.l.l.jbbbbbbbn',
        'l.l.jbbbbbk.jtk.l.l.....l...r',
        'l.l.............l.l.gtttk.h.r',
        'l.jbh.gbbbbbbbbbttl.r.....r..',
        'l...........l.....l.r.gbh.jbv',
        'l.gttth.gbh.l.g.h.l.r.r.r...r',
        'l.r...r.r...l.l.jtk.r.l.jbh.r',
        'l.jth.r.jtttk.l.....r.l.....r',
        'l...l.r.......jttbbbbbk.gbk.r',
        'l.g.l.rbbttth...............r',
        'l.r.l.r.l...jbbbbbbbbbbbbbh.r',
        'l.r.l.l.l.h............l..l.r',
        'l.jtk.k.jtk.gbbbbtvttttk.jk.r',
        'l.................r.........r',
        'mbbbbbbbbbbbbbbbbbnbbbbbbbbbn',
    ]

function preload() {
    charImg = loadImage('Assets/Character Sprite.png');
    tileImg = loadImage('Assets/TileSheet64x64.png');

}

function setup() {

    canvasHeight = 400;
    canvasWidth = 464;

    new Canvas(canvasWidth, canvasHeight, 'pixelated x1.5');
    allSprites.pixelPerfect = true;
    allSprites.rotationLock = true;
    allSprites.tileSize = 16;

    char = new Sprite(0.5,3.5, 16,16);
    char.spriteSheet = charImg;
    char.addAnis({
        left: {row: 0, col: 0},
        right: {row: 0, col: 1},
        down: {row: 0, col: 2},
        up: {row: 0, col: 3},
        leftPanic: {row: 1, col: 0},
        rightPanic: {row: 1, col: 1},
        downPanic: {row: 1, col: 2},
        upPanic: {row: 1, col: 3}
    });
    char.changeAni('right');
    char.collider = 'kinematic';
    char.layer = 2;
    
    winSquare = new Sprite (28.5, 11.5, 1, 1);
    winSquare.color = 'black';
    winSquare.stroke = 'black';
    winSquare.collider = 'k';
    winSquare.layer = 1;
    
    enemySquare = new Group();
    enemySquare.color = 'black';
    enemySquare.width = 1;
    enemySquare.height = 1;
    enemySquare.y = 23.5;
    enemySquare.collider = 'kinematic';
    enemySquare.layer = 1;

    while (enemySquare.length < 22){
        let enemy = new enemySquare.Sprite();
        enemy.x = enemySquare.length * 1;
    }
    enemySquare.stroke = 'pink';
    enemySquare[0].x = 3.5;
    enemySquare[0].y = 19.5;

    enemySquare[1].x = 17.5;
    enemySquare[1].y = 21.5;

    enemySquare[2].x = 19.5;
    enemySquare[2].y = 21.5;

    enemySquare[3].x = 9.5;
    enemySquare[3].y = 19.5;

    enemySquare[4].x = 7.5;
    enemySquare[4].y = 18.5;

    enemySquare[5].x = 22.5;
    enemySquare[5].y = 19.5;

    enemySquare[6].x = 25.5;
    enemySquare[6].y = 19.5;

    enemySquare[7].x = 3.5;
    enemySquare[7].y = 14.5;

    enemySquare[8].x = 9.5;
    enemySquare[8].y = 14.5;

    enemySquare[9].x = 21.5;
    enemySquare[9].y = 15.5;

    enemySquare[10].x = 17.5;
    enemySquare[10].y = 13.5;

    enemySquare[11].x = 23.5;
    enemySquare[11].y = 13.5;

    enemySquare[12].x = 23.5;
    enemySquare[12].y = 9.5;

    enemySquare[13].x = 17.5;
    enemySquare[13].y = 10.5;

    enemySquare[14].x = 13.5;
    enemySquare[14].y = 8.5;

    enemySquare[15].x = 1.5;
    enemySquare[15].y = 7.5;

    enemySquare[16].x = 25.5;
    enemySquare[16].y = 5.5;

    enemySquare[17].x = 27.5;
    enemySquare[17].y = 5.5;

    enemySquare[18].x = 27.5;
    enemySquare[18].y = 3.5;

    enemySquare[19].x = 11.5;
    enemySquare[19].y = 3.5;

    enemySquare[20].x = 5.5;
    enemySquare[20].y = 1.5;

    enemySquare[21].x = 1.5;
    enemySquare[21].y = 1.5;


    //top left corner- outer wall
    let pathCornerTL = new Group();
    pathCornerTL.collider = 'none';
    pathCornerTL.spriteSheet = tileImg;
    pathCornerTL.addAni({ w: 1, h: 1, row: 0, col: 0 });
    pathCornerTL.tile = 'c';

    //top right corner- outer wall
    let pathCornerTR = new Group();
    pathCornerTR.collider = 'none';
    pathCornerTR.spriteSheet = tileImg;
    pathCornerTR.addAni({ w: 1, h: 1, row: 0, col: 3 });
    pathCornerTR.tile = 'v';

    //bottom left corner- outer wall
    let pathCornerBL = new Group();
    pathCornerBL.collider = 'none';
    pathCornerBL.spriteSheet = tileImg;
    pathCornerBL.addAni({ w: 1, h: 1, row: 2, col: 0 });
    pathCornerBL.tile = 'm';

    //bottom right corner -outer wall
    let pathCornerBR = new Group();
    pathCornerBR.collider = 'none';
    pathCornerBR.spriteSheet = tileImg;
    pathCornerBR.addAni({ w: 1, h: 1, row: 2, col: 3 });
    pathCornerBR.tile = 'n';

    //upward oriented wall
    let pathTop = new Group();
    pathTop.collider = 'none';
    pathTop.spriteSheet = tileImg;
    pathTop.addAni({ w: 1, h: 1, row: 0, col: 1 });
    pathTop.tile = 't';

    //left oriented wall
    let pathLeft = new Group();
    pathLeft.collider = 'none';
    pathLeft.spriteSheet = tileImg;
    pathLeft.addAni({ w: 1, h: 1, row: 1, col: 0 });
    pathLeft.tile = 'l';

    //right oriented wall
    let pathRight = new Group();
    pathRight.collider = 'none';
    pathRight.spriteSheet = tileImg;
    pathRight.addAni({ w: 1, h: 1, row: 1, col: 3 });
    pathRight.tile = 'r';

    //downward oriented wall
    let pathBottom = new Group();
    pathBottom.collider = 'none';
    pathBottom.spriteSheet = tileImg;
    pathBottom.addAni({ w: 1, h: 1, row: 0, col: 2 });
    pathBottom.tile = 'b';

    //inner corner oriented like top left tile
    let innerCornerTL = new Group();
    innerCornerTL.collider = 'none';
    innerCornerTL.spriteSheet = tileImg;
    innerCornerTL.addAni({ w: 1, h: 1, row: 1, col: 1 });
    innerCornerTL.tile = 'g';

    // inner corner oriented like top right tile
    let innerCornerTR = new Group();
    innerCornerTR.collider = 'none';
    innerCornerTR.spriteSheet = tileImg;
    innerCornerTR.addAni({ w: 1, h: 1, row: 1, col: 2 });
    innerCornerTR.tile = 'h';

    // inner corner oriented like bottom left tile
    let innerCornerBL = new Group();
    innerCornerBL.collider = 'none';
    innerCornerBL.spriteSheet = tileImg;
    innerCornerBL.addAni({ w: 1, h: 1, row: 2, col: 1 });
    innerCornerBL.tile = 'j';

    // inner corner oriented like bottom right tile
    let innerCornerBR = new Group();
    innerCornerBR.collider = 'none';
    innerCornerBR.spriteSheet = tileImg;
    innerCornerBR.addAni({ w: 1, h: 1, row: 2, col: 2 });
    innerCornerBR.tile = 'k';

    //fail condition tile, adds to Breakdown Bar
    let panicTile = new Group();
    panicTile.collider = 'none';
    panicTile.spriteSheet = tileImg;
    panicTile.addAni({ w: 1, h: 1, row: 3, col: 0 });
    panicTile.tile = 'p';

    //win condition tile, moves player to the next screen
    let exitTile = new Group();
    exitTile.collider = 'none';
    exitTile.spriteSheet = tileImg;
    exitTile.addAni({ w: 1, h: 1, row: 3, col: 1 });
    exitTile.tile = 'e';

    let startTile = new Group();
    startTile.collider = 'none';
    startTile.spriteSheet = tileImg;
    startTile.addAni({ w: 1, h: 1, row: 3, col: 2 });
    startTile.tile = 's';


    new Tiles(maze, 0.5, 0.5, 1, 1);

}

function draw() {
    clear();

    background('blue');

    textSize(24);
    text ("Lives:" + lives, 15, 390);
    textFont('Courier New');
    textStyle(BOLD);
    
    if (lives <= 0) {
        location.href = "fail.html";
    }

    if (overlapsEnemy()) {
        char.changeAni('leftPanic');
        console.log("collided with enemy");

        if (isOverlappingEnemy == false) {
            lives--;
            console.log("removing a life");
        }
        isOverlappingEnemy = true;

    } else {
        isOverlappingEnemy = false;
    }

    // if (overlapsWin()) {
        
    //     console.log("win!");
    //     isOverlappingWin = true;
    //     if (isOverlappingWin == true) {
    //         location.href = "win.html";
    //     }
        

    // }

    //Let's make this guy move!
    if (kb.pressed('left') && noWall(char.x - 1, char.y)
    ) {
        console.log("lives" + lives);
        char.changeAni('left');
        char.x--;
    } else if (kb.pressed('up') && noWall(char.x, char.y - 1)
    ) {
        char.changeAni('up');
        char.y--;
    } else if (kb.pressed('down') && noWall(char.x, char.y + 1)
    ) {
        char.changeAni('down');
        char.y++;
    } else if (kb.pressed('right') && noWall(char.x + 1, char.y)
    ) {
        char.changeAni('right');
        char.x++;
    }
    // background(13,12,12);
    

}

function noWall(x, y) {
    // rows = a columns = z
    let a = floor(x);
    let z = floor(y);
    let tile = maze[z][a];
    if (tile == '.') {
        console.log('move');
        return true;

    } else {
        return false;
    }
}

function overlapsEnemy() {
    let returnValue = false;
    for (let i = 0; i < enemySquare.length; i++) {
        const enemy = enemySquare[i];
        if (enemy.x == char.x && enemy.y == char.y) returnValue = true;        
    }
    return returnValue;
}

// function overlapsWin() {
//     let returnWin = false;
//     for (let i = 0; i < winSquare.length; i++) {
//         const win = winSquare[i];
//         if (win.x == char.x && win.y == char.y) returnWin = true;        
//     }
//     return returnWin;
// }



//if lives <1, swap to game over screen
//if lives >1, && char reaches endpoint, swap to win screen
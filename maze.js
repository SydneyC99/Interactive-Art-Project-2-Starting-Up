let char;
let charImg, tileImg;
let canvasHeight;
let canvasWidth;
let enemySquare;

let maze = 
        ['ctttvtttvtttttttttttctttttttv',
         'lp..rp..r...........l.......r',
         'mbh.jbh.r.gbbbbbbbh.l.gbbbh.r',
         '..l...r.r.rp..............rpr',
         'l.jbh.r.r.rbbbbbbbbbbbh.h.rbn',
         'l...l.r.r.r.......l...l.lprpr',
         'mbh.l.r.r.r.gbbbh.l.g.k.jbk.r',
         'lpl.l.r.r.r.r...l.l.r.......r',
         'l.l.r.....r.rph.l.l.jbbbbbbbn',
         'l.l.jbbbbbk.jtk.l.l....pl...r',
         'l.l.............lpl.gtttk.h.r',
         'l.jbh.gbbbbbbbbbttl.r.....r..',
         'l...........l.....l.r.gbh.jbv',
         'l.gttth.gbh.l.g.hpl.rprpr...r',
         'l.rp..r.rp..l.l.jtk.jtk.jbh.r',
         'l.jth.r.jtttk.l.............r',
         'l...l.r.......jttbbbbbh.gbk.r',
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
    
    // enemySquare = new Sprite ();
    // enemySquare.width = 1;
    // enemySquare.height = 1;
    // enemySquare.color = 'black';
    
    enemySquare = new Group();
    enemySquare.color = 'black';
    enemySquare.width = 1;
    enemySquare.height = 1;
    enemySquare.y = 23.5;
    enemySquare.collider = 'static';

    while (enemySquare.length < 25){
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
    
    //upward oriented wall
    let pathTop = new Group();
    pathTop.collider = 'none';
    pathTop.spriteSheet = tileImg;
    pathTop.addAni({w:1, h:1, row: 0, col: 1});
    pathTop.tile = 't';

    //left oriented wall
    let pathLeft = new Group();
    pathLeft.collider = 'none';
    pathLeft.spriteSheet = tileImg;
    pathLeft.addAni({w:1, h:1, row: 1, col: 0});
    pathLeft.tile = 'l';

    //right oriented wall
    let pathRight = new Group();
    pathRight.collider = 'none';
    pathRight.spriteSheet = tileImg;
    pathRight.addAni({w:1, h:1, row: 1, col:3});
    pathRight.tile = 'r';

    //downward oriented wall
    let pathBottom = new Group();
    pathBottom.collider = 'none';
    pathBottom.spriteSheet = tileImg;
    pathBottom.addAni({w:1, h:1, row: 0, col:2});
    pathBottom.tile = 'b';

    //inner corner oriented like top left tile
    let innerCornerTL = new Group();
    innerCornerTL.collider = 'none';
    innerCornerTL.spriteSheet = tileImg;
    innerCornerTL.addAni({w:1, h:1, row: 1, col:1});
    innerCornerTL.tile = 'g';

    // inner corner oriented like top right tile
    let innerCornerTR = new Group();
    innerCornerTR.collider = 'none';
    innerCornerTR.spriteSheet = tileImg;
    innerCornerTR.addAni({w:1, h:1, row: 1, col:2});
    innerCornerTR.tile = 'h';

    // inner corner oriented like bottom left tile
    let innerCornerBL = new Group();
    innerCornerBL.collider = 'none';
    innerCornerBL.spriteSheet = tileImg;
    innerCornerBL.addAni({w:1, h:1, row: 2, col:1});
    innerCornerBL.tile = 'j';

    // inner corner oriented like bottom right tile
    let innerCornerBR = new Group();
    innerCornerBR.collider = 'none';
    innerCornerBR.spriteSheet = tileImg;
    innerCornerBR.addAni({w:1, h:1, row: 2, col:2});
    innerCornerBR.tile = 'k';

    //fail condition tile, adds to Breakdown Bar
    let panicTile = new Group();
    panicTile.collider = 'none';
    panicTile.spriteSheet = tileImg;
    panicTile.addAni({w:1, h:1, row: 3, col:0});
    panicTile.tile = 'p';

    //win condition tile, moves player to the next screen
    let exitTile = new Group();
    exitTile.collider = 'none';
    exitTile.spriteSheet = tileImg;
    exitTile.addAni({w:1, h:1, row: 3, col: 1});
    exitTile.tile = 'e';
    
    let startTile = new Group();
    startTile.collider = 'none';
    startTile.spriteSheet = tileImg;
    startTile.addAni({w:1, h:1, row: 3, col: 2});
    startTile.tile = 's';


    new Tiles(maze, 0.5, 0.5, 1, 1);

    

}

function draw() {
    clear();

    //Let's make this guy move!
    if (kb.pressed('left') && noWall(char.x-1,char.y)
       )  {
        char.changeAni('left');
        char.x --;
    } else if (kb.pressed('up') && noWall(char.x,char.y-1)
      ) {
        char.changeAni('up');
        char.y --;
    } else if (kb.pressed('down') && noWall(char.x,char.y+1)
      ){
        char.changeAni('down');
        char.y ++;
    } else if (kb.pressed('right') && noWall(char.x+1,char.y)
      ){
        char.changeAni('right');
        char.x ++;
    }
    // background(13,12,12);
    background('blue');
    
}

function noWall(x,y){
    // rows = a columns = z
    let a = floor(x);
    let z = floor(y);
    let tile = maze [z][a];
    if (tile == '.'){
        console.log ('move');
        return true;
        
    } else {
        return false;
    }
}

function hitEnemy(){
    //if blob hits the enemy, damage blob
    //flash the damage sprite and take away a life
    if (kb.pressed('left') && char.collides(enemySquare)) {
        char.changeAni('leftPanic');
    } //else {
        //make elseif statements for other directions
   // }
}

// function lifeCount(){
//     //life count and display to be used in hitEnemy
// }
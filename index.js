// var img = new Image();
//     img.onload = function(){
//         ctx.drawImage(img,0,0,500,308);
//     };
//     img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var playerTank = { x: 0, y: 0, state: 1, speed: 10, shooted: false, shootSpeed: 15, type: 1, lives: 1 };
var blocks = [];
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
const cubeSize = 48;
const field = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 0, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 4],
    [4, 0, '#', 0, 8, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 9, 1, 0, 1, 1, 1, 0, 0, 4],
    [4, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 7, 0, 0, 1, 4, 4, 0, 0, 0, 0, 4],
    [4, 0, 7, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 'T1', 'T2', 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 'T3', 'T4', 0, 0, 0, 0, 0, 0, 4],
    [4, 6, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 4],
    [4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];
var imgTree = new Image();
imgTree.src = '/images/forest.png';
var imgBrick = new Image();
imgBrick.src = '/images/bricks-full.png';
var imgWater = new Image();
imgWater.src = '/images/water.png';
var imgUnbr = new Image();
imgUnbr.src = '/images/wall-full.png';

var imgEnemyTank1Up = new Image(); // common
imgEnemyTank1Up.src = '/images/enemy-common(1).png';
var imgEnemyTank1Right = new Image(); // common
imgEnemyTank1Right.src = '/images/enemy-common(2).png';
var imgEnemyTank1Down = new Image(); // common
imgEnemyTank1Down.src = '/images/enemy-common(3).png';
var imgEnemyTank1Left = new Image(); // common
imgEnemyTank1Left.src = '/images/enemy-common(4).png';

var imgEnemyTank2Up = new Image(); // fast
imgEnemyTank2Up.src = '/images/enemy-fast(1).png';
var imgEnemyTank2Right = new Image(); // fast
imgEnemyTank2Right.src = '/images/enemy-fast(2).png';
var imgEnemyTank2Down = new Image(); // fast
imgEnemyTank2Down.src = '/images/enemy-fast(3).png';
var imgEnemyTank2Left = new Image(); // fast
imgEnemyTank2Left.src = '/images/enemy-fast(4).png';

var imgEnemyTank3Up = new Image(); // middle
imgEnemyTank3Up.src = '/images/enemy-middle(1).png';
var imgEnemyTank3Right = new Image(); // middle
imgEnemyTank3Right.src = '/images/enemy-middle(2).png';
var imgEnemyTank3Down = new Image(); // middle
imgEnemyTank3Down.src = '/images/enemy-middle(3).png';
var imgEnemyTank3Left = new Image(); // middle
imgEnemyTank3Left.src = '/images/enemy-middle(4).png';

var imgEnemyTank4Up = new Image(); // heavy
imgEnemyTank4Up.src = '/images/enemy-heavy(1).png';
var imgEnemyTank4Right = new Image(); // heavy
imgEnemyTank4Right.src = '/images/enemy-heavy(2).png';
var imgEnemyTank4Down = new Image(); // heavy
imgEnemyTank4Down.src = '/images/enemy-heavy(3).png';
var imgEnemyTank4Left = new Image(); // heavy
imgEnemyTank4Left.src = '/images/enemy-heavy(4).png';

var playerBullet = { x: 300, y: 300, state: 0, speed: 0, appear: false, bulletRadius: 3 };

var imgPlayerTankLevel1Up = new Image();
imgPlayerTankLevel1Up.src = '/images/player-level1(1).png';
var imgPlayerTankLevel1Right = new Image();
imgPlayerTankLevel1Right.src = '/images/player-level1(2).png';
var imgPlayerTankLevel1Down = new Image();
imgPlayerTankLevel1Down.src = '/images/player-level1(3).png';
var imgPlayerTankLevel1Left = new Image();
imgPlayerTankLevel1Left.src = '/images/player-level1(4).png';

var imgPlayerTankLevel2Up = new Image();
imgPlayerTankLevel2Up.src = '/images/player-level2(1).png';
var imgPlayerTankLevel2Right = new Image();
imgPlayerTankLevel2Right.src = '/images/player-level2(2).png';
var imgPlayerTankLevel2Down = new Image();
imgPlayerTankLevel2Down.src = '/images/player-level2(3).png';
var imgPlayerTankLevel2Left = new Image();
imgPlayerTankLevel2Left.src = '/images/player-level2(4).png';

var imgPlayerTankLevel3Up = new Image();
imgPlayerTankLevel3Up.src = '/images/player-level3(1).png';
var imgPlayerTankLevel3Right = new Image();
imgPlayerTankLevel3Right.src = '/images/player-level3(2).png';
var imgPlayerTankLevel3Down = new Image();
imgPlayerTankLevel3Down.src = '/images/player-level3(3).png';
var imgPlayerTankLevel3Left = new Image();
imgPlayerTankLevel3Left.src = '/images/player-level3(4).png';

var imgPlayerTankLevel4Up = new Image();
imgPlayerTankLevel4Up.src = '/images/player-level4(1).png';
var imgPlayerTankLevel4Right = new Image();
imgPlayerTankLevel4Right.src = '/images/player-level4(2).png';
var imgPlayerTankLevel4Down = new Image();
imgPlayerTankLevel4Down.src = '/images/player-level4(3).png';
var imgPlayerTankLevel4Left = new Image();
imgPlayerTankLevel4Left.src = '/images/player-level4(4).png';

var imgBase = new Image();
imgBase.src = '/images/base.png';
var imgDefeatedBase = new Image();
imgDefeatedBase.src = '/images/base_defeated.png';

var imgStar = new Image();
imgStar.src = '/images/bonus_star.png';
var imgBonusTank = new Image();
imgBonusTank.src = '/images/bonus_tank.png';
var imgShovel = new Image();
imgShovel.src = '/images/bonus_shovel.png';

var isDefeatedPlayerStab = false;

var enemyTanks = [];
var enemyTanksBullet = [];

var base = { x: 0, y: 0 };

function canEnemyMove(tank) {
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        
        if (block.state != 1 && block.state != 4 && block.state != 5 && block.state != 6 && block.state != 7 && block.state != 8 && block.state != 9) {
            continue;
        }
        
        if (tank.state == 1) {            
            if (tank.y - tank.speed < block.y + cubeSize && tank.y - tank.speed > block.y && ((tank.x >= block.x && tank.x <= block.x + cubeSize) || (tank.x + cubeSize >= block.x && tank.x + cubeSize <= block.x + cubeSize))) {
                // console.log(block);

                tank.y = block.y + 50;

                if (block.state == 7) {
                    tank.type++;
                    if (tank.type == 4) {
                        tank.lives = Math.max(2, tank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    tank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    // console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (tank.state == 3) {
            if (tank.y + tank.speed + cubeSize > block.y && tank.y + tank.speed + cubeSize < block.y + cubeSize && ((tank.x >= block.x && tank.x <= block.x + cubeSize) || (tank.x + cubeSize >= block.x && tank.x + cubeSize <= block.x + cubeSize))) {
                // console.log(block);

                tank.y = block.y - 50;

                if (block.state == 7) {
                    tank.type++;
                    if (tank.type == 4) {
                        tank.lives = Math.max(2, tank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    tank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    // console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (tank.state == 2) {
            if (tank.x + cubeSize + tank.speed > block.x && tank.x + cubeSize + tank.speed < block.x + cubeSize && ((tank.y >= block.y && tank.y <= block.y + cubeSize) || (tank.y + cubeSize >= block.y && tank.y + cubeSize <= block.y + cubeSize))) {
                // console.log(block);

                tank.x = block.x - 50;

                if (block.state == 7) {
                    tank.type++;
                    if (tank.type == 4) {
                        tank.lives = Math.max(2, tank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    tank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    // console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (tank.state == 4) {
            if (tank.x - tank.speed < block.x + cubeSize && tank.x - tank.speed > block.x && ((tank.y >= block.y && tank.y <= block.y + cubeSize) || (tank.y + cubeSize >= block.y && tank.y + cubeSize <= block.y + cubeSize))) {
                // console.log(block);

                tank.x = block.x + 50;

                if (block.state == 7) {
                    tank.type++;
                    if (tank.type == 4) {
                        tank.lives = Math.max(2, tank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    tank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    // console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        } 
    }
    for (let i = 0; i < enemyTanks.length + 1; i++) {
        let block;
        if (i == enemyTanks.length) {
            block = playerTank;
        } else {
            block = enemyTanks[i];
        }
        
        if (block.state == 0) {
            continue;
        }
        // 
        if (tank.state == 1) {            
            if (tank.y - tank.speed < block.y + cubeSize && tank.y - tank.speed > block.y && ((tank.x >= block.x && tank.x <= block.x + cubeSize) || (tank.x + cubeSize >= block.x && tank.x + cubeSize <= block.x + cubeSize))) {
                // console.log(block);
                tank.y = block.y + 50;
                return false;
            }
        }
        if (tank.state == 3) {
            if (tank.y + tank.speed + cubeSize > block.y && tank.y + tank.speed + cubeSize < block.y + cubeSize && ((tank.x >= block.x && tank.x <= block.x + cubeSize) || (tank.x + cubeSize >= block.x && tank.x + cubeSize <= block.x + cubeSize))) {
                // console.log(block);
                tank.y = block.y - 50;
                return false;
            }
        }
        if (tank.state == 2) {
            if (tank.x + cubeSize + tank.speed > block.x && tank.x + cubeSize + tank.speed < block.x + cubeSize && ((tank.y >= block.y && tank.y <= block.y + cubeSize) || (tank.y + cubeSize >= block.y && tank.y + cubeSize <= block.y + cubeSize))) {
                // console.log(block);
                tank.x = block.x - 50;
                return false;
            }
        }
        if (tank.state == 4) {
            if (tank.x - tank.speed < block.x + cubeSize && tank.x - tank.speed > block.x && ((tank.y >= block.y && tank.y <= block.y + cubeSize) || (tank.y + cubeSize >= block.y && tank.y + cubeSize <= block.y + cubeSize))) {
                // console.log(block);
                tank.x = block.x + 50;
                return false;
            }
        }

    }
    return true;
}

function canMoveEnemyBullet(pos) {
    let bullet = enemyTanksBullet[pos];
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        if (block.state != 1 && block.state != 4 && block.state != 5 && block.state != 6) {
            continue;
        }

        if (bullet.x >= block.x && bullet.x <= block.x + 50 && bullet.y >= block.y && bullet.y <= block.y + 50) {
            bullet.speed = 0;
            bullet.appear = false;
            bullet.x = 1000;
            enemyTanks[pos].shooted = false;
            if (block.state == 1) {
                blocks[i].state = 0;
            }
            if (block.state == 6) {
                blocks[i].state = -1;
            }
            if (block.state == 5) {
                isDefeatedPlayerStab = true;
            }
            enemyTanksBullet[pos] = bullet;
        }
    }
    if (bullet.x >= playerTank.x && bullet.x <= playerTank.x + 50 && bullet.y >= playerTank.y && bullet.y <= playerTank.y + 50) {
        bullet.speed = 0;
        bullet.appear = false;
        bullet.x = 1000;
        enemyTanks[pos].shooted = false;
        
        playerTank.lives--;
        if (playerTank.lives < 1) {
            alert('0 lives');
        }

        enemyTanksBullet[pos] = bullet;
    }
}

function drawEnemyBullets() {
    for (let i = 0; i < enemyTanksBullet.length; i++) {
        let bullet = enemyTanksBullet[i];
        if (bullet.appear == false) {
            continue;
        }

        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, playerBullet.bulletRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}

function shootEnemyTank(i) {
    let tank = enemyTanks[i];
    let bullet = enemyTanksBullet[i];
    if (bullet.appear == true) {
        return;
    }
    bullet.appear = true;
    bullet.speed = tank.shootSpeed;
    bullet.state = tank.state;
    bullet.x = tank.x + 25;
    bullet.y = tank.y + 25;
    enemyTanksBullet[i] = bullet;
}

function drawEnemyTanks() {
    for (let i = 0; i < enemyTanks.length; i++) {
        let tank = enemyTanks[i];
        if (tank.shooted == true) {
            continue;
        }
        if (tank.type == 1) {
            // ctx.drawImage(imgEnemyTank1, tank.x, tank.y, 50, 50);
            if (tank.state == 1) {
                ctx.drawImage(imgEnemyTank1Up, tank.x, tank.y, 50, 50);
            } else if (tank.state == 2) {
                ctx.drawImage(imgEnemyTank1Right, tank.x, tank.y, 50, 50);
            } else if (tank.state == 3) {
                ctx.drawImage(imgEnemyTank1Down, tank.x, tank.y, 50, 50);
            } else if (tank.state == 4) {
                ctx.drawImage(imgEnemyTank1Left, tank.x, tank.y, 50, 50);
            }
        } else if (tank.type == 2) {
            // ctx.drawImage(imgEnemyTank2, tank.x, tank.y, 50, 50);
            if (tank.state == 1) {
                ctx.drawImage(imgEnemyTank2Up, tank.x, tank.y, 50, 50);
            } else if (tank.state == 2) {
                ctx.drawImage(imgEnemyTank2Right, tank.x, tank.y, 50, 50);
            } else if (tank.state == 3) {
                ctx.drawImage(imgEnemyTank2Down, tank.x, tank.y, 50, 50);
            } else if (tank.state == 4) {
                ctx.drawImage(imgEnemyTank2Left, tank.x, tank.y, 50, 50);
            }
        } else if (tank.type == 3) {
            // ctx.drawImage(imgEnemyTank3, tank.x, tank.y, 50, 50);
            if (tank.state == 1) {
                ctx.drawImage(imgEnemyTank3Up, tank.x, tank.y, 50, 50);
            } else if (tank.state == 2) {
                ctx.drawImage(imgEnemyTank3Right, tank.x, tank.y, 50, 50);
            } else if (tank.state == 3) {
                ctx.drawImage(imgEnemyTank3Down, tank.x, tank.y, 50, 50);
            } else if (tank.state == 4) {
                ctx.drawImage(imgEnemyTank3Left, tank.x, tank.y, 50, 50);
            }
        } else if (tank.type == 4) {
            // ctx.drawImage(imgEnemyTank4, tank.x, tank.y, 50, 50);
            if (tank.state == 1) {
                ctx.drawImage(imgEnemyTank4Up, tank.x, tank.y, 50, 50);
            } else if (tank.state == 2) {
                ctx.drawImage(imgEnemyTank4Right, tank.x, tank.y, 50, 50);
            } else if (tank.state == 3) {
                ctx.drawImage(imgEnemyTank4Down, tank.x, tank.y, 50, 50);
            } else if (tank.state == 4) {
                ctx.drawImage(imgEnemyTank4Left, tank.x, tank.y, 50, 50);
            }
        }
    }
}

function createEnemyTank(x, y, type) {
    let tank = { x: x, y: y, type: type, state: 3, sx: x, sy: y, timer: 0 };
    let tankBullet = { x: 0, y: 0, state: 3, speed: 0, appear: false };
    tank.shooted = false;
    if (type == 1) {
        tank.speed = 10;
        tank.shootSpeed = 20;
        tank.lives = 1;
    }
    if (type == 2) {
        tank.speed = 15;
        tank.shootSpeed = 20;
        tank.lives = 1;
    }
    if (type == 3) {
        tank.speed = 10;
        tank.shootSpeed = 25;
        tank.lives = 1;
    }
    if (type == 4) {
        tank.speed = 5;
        tank.shootSpeed = 25;
        tank.lives = 2;
    }
    enemyTanksBullet.push(tankBullet);
    enemyTanks.push(tank);
}

function canMoveBullet() {
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        if (block.state != 1 && block.state != 4 && block.state != 5 && block.state != 6) {
            continue;
        }
        if (playerBullet.x >= block.x && playerBullet.x <= block.x + 50 && playerBullet.y >= block.y && playerBullet.y <= block.y + 50) {
            playerBullet.speed = 0;
            playerBullet.appear = false;
            playerBullet.x = 1000;
            playerTank.shooted = false;
            if (block.state == 1) {
                blocks[i].state = 0;
            }
            if (block.state == 6) {
                blocks[i].state = -1;
            }
            if (block.state == 5) {
                isDefeatedPlayerStab = true;
            }
        }
    }
    for (let i = 0; i < enemyTanks.length; i++) {
        let block = enemyTanks[i];
        if (block.state == 0) {
            continue;
        }
        if (playerBullet.x >= block.x && playerBullet.x <= block.x + 50 && playerBullet.y >= block.y && playerBullet.y <= block.y + 50) {
            playerBullet.speed = 0;
            playerBullet.appear = false;
            playerBullet.x = 1000;
            playerTank.shooted = false;
            
            enemyTanks[i].lives--;
            if (enemyTanks[i].lives < 1) {
                enemyTanks[i].shooted = true;
                enemyTanks[i].speed = 0;
                enemyTanks[i].x = 1100;
            }
            // console.log(enemyTanks[i]);
        }
    }
}

function shootPlayerBullet() {
    if (playerTank.shooted == false) {
        return;
    }
    playerTank.shooted = true;

    playerBullet.appear = true;
    playerBullet.x = playerTank.x + 25;
    playerBullet.y = playerTank.y + 25;
    playerBullet.state = playerTank.state;
    playerBullet.speed = playerTank.shootSpeed;
    // TODO
}

function drawPlayerBullet() {
    if (playerBullet.appear == false) {
        return;
    }
    // playerTank.shooted = true;
    ctx.beginPath();
    ctx.arc(playerBullet.x, playerBullet.y, playerBullet.bulletRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

function canMove() {
    // console.log('collision');
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        
        if (block.state != 1 && block.state != 4 && block.state != 5 && block.state != 6 && block.state != 7 && block.state != 8 && block.state != 9) {
            // console.log(block.state);
            continue;
        }
        // console.log('dijfvnf');
        if (playerTank.state == 1) {            
            if (playerTank.y - playerTank.speed < block.y + cubeSize && playerTank.y - playerTank.speed > block.y && ((playerTank.x >= block.x && playerTank.x <= block.x + cubeSize) || (playerTank.x + cubeSize >= block.x && playerTank.x + cubeSize <= block.x + cubeSize))) {
                console.log(block);

                playerTank.y = block.y + 50;

                if (block.state == 7) {
                    playerTank.type++;
                    if (playerTank.type == 4) {
                        playerTank.lives = Math.max(2, playerTank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    playerTank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (playerTank.state == 3) {
            if (playerTank.y + playerTank.speed + cubeSize > block.y && playerTank.y + playerTank.speed + cubeSize < block.y + cubeSize && ((playerTank.x >= block.x && playerTank.x <= block.x + cubeSize) || (playerTank.x + cubeSize >= block.x && playerTank.x + cubeSize <= block.x + cubeSize))) {
                console.log(block);

                playerTank.y = block.y - 50;

                if (block.state == 7) {
                    playerTank.type++;
                    if (playerTank.type == 4) {
                        playerTank.lives = Math.max(2, playerTank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    playerTank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (playerTank.state == 2) {
            if (playerTank.x + cubeSize + playerTank.speed > block.x && playerTank.x + cubeSize + playerTank.speed < block.x + cubeSize && ((playerTank.y >= block.y && playerTank.y <= block.y + cubeSize) || (playerTank.y + cubeSize >= block.y && playerTank.y + cubeSize <= block.y + cubeSize))) {
                console.log(block);

                playerTank.x = block.x - 50;

                if (block.state == 7) {
                    playerTank.type++;
                    if (playerTank.type == 4) {
                        playerTank.lives = Math.max(2, playerTank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    playerTank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        }
        if (playerTank.state == 4) {
            if (playerTank.x - playerTank.speed < block.x + cubeSize && playerTank.x - playerTank.speed > block.x && ((playerTank.y >= block.y && playerTank.y <= block.y + cubeSize) || (playerTank.y + cubeSize >= block.y && playerTank.y + cubeSize <= block.y + cubeSize))) {
                console.log(block);

                playerTank.x = block.x + 50;

                if (block.state == 7) {
                    playerTank.type++;
                    if (playerTank.type == 4) {
                        playerTank.lives = Math.max(2, playerTank.lives);
                    }
                    blocks[i].state = 0;
                }
                if (block.state == 8) {
                    playerTank.lives++;
                    blocks[i].state = 0;
                }
                if  (block.state == 9) {
                    console.log('bonus 9');
                    for (let j = 0; j < blocks.length; j++) {
                        if (blocks[j].state == -1) {
                            blocks[j].state = 6;
                        }
                    }
                    blocks[i].state = 0;
                }
                return false;
            }
        } 
    }
    for (let i = 0; i < enemyTanks.length; i++) {
        let block = enemyTanks[i];
        if (block.state == 0) {
            continue;
        }
        // 
        if (playerTank.state == 1) {            
            if (playerTank.y - playerTank.speed < block.y + cubeSize && playerTank.y - playerTank.speed > block.y && ((playerTank.x >= block.x && playerTank.x <= block.x + cubeSize) || (playerTank.x + cubeSize >= block.x && playerTank.x + cubeSize <= block.x + cubeSize))) {
                console.log(block);
                playerTank.y = block.y + 50;
                return false;
            }
        }
        if (playerTank.state == 3) {
            if (playerTank.y + playerTank.speed + cubeSize > block.y && playerTank.y + playerTank.speed + cubeSize < block.y + cubeSize && ((playerTank.x >= block.x && playerTank.x <= block.x + cubeSize) || (playerTank.x + cubeSize >= block.x && playerTank.x + cubeSize <= block.x + cubeSize))) {
                console.log(block);
                playerTank.y = block.y - 50;
                return false;
            }
        }
        if (playerTank.state == 2) {
            if (playerTank.x + cubeSize + playerTank.speed > block.x && playerTank.x + cubeSize + playerTank.speed < block.x + cubeSize && ((playerTank.y >= block.y && playerTank.y <= block.y + cubeSize) || (playerTank.y + cubeSize >= block.y && playerTank.y + cubeSize <= block.y + cubeSize))) {
                console.log(block);
                playerTank.x = block.x - 50;
                return false;
            }
        }
        if (playerTank.state == 4) {
            if (playerTank.x - playerTank.speed < block.x + cubeSize && playerTank.x - playerTank.speed > block.x && ((playerTank.y >= block.y && playerTank.y <= block.y + cubeSize) || (playerTank.y + cubeSize >= block.y && playerTank.y + cubeSize <= block.y + cubeSize))) {
                console.log(block);
                playerTank.x = block.x + 50;
                return false;
            }
        }

    }
    return true;
}

function drawTank() {
    let img = new Image();
    // img.onload = function(){
    //     ctx.drawImage(img, playerTank.y, playerTank.x, 50, 50);
    // };
    if (playerTank.type == 1) {
        playerTank.speed = 10;
        playerTank.shootSpeed = 15;
        if (playerTank.state == 1) {
            // img.src = 'D:/Projects/canvas/tank/images/player-level1(1).png';
            ctx.drawImage(imgPlayerTankLevel1Up, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 2) {
            // img.src = 'D:/Projects/canvas/tank/images/player-level1(2).png';
            ctx.drawImage(imgPlayerTankLevel1Right, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 3) {
            // img.src = 'D:/Projects/canvas/tank/images/player-level1(3).png';
            ctx.drawImage(imgPlayerTankLevel1Down, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 4){
            // img.src = 'D:/Projects/canvas/tank/images/player-level1(4).png';
            ctx.drawImage(imgPlayerTankLevel1Left, playerTank.x, playerTank.y, 50, 50);
        }
    } else if (playerTank.type == 2) {
        playerTank.speed = 10;
        playerTank.shootSpeed = 20;
        if (playerTank.state == 1) {
            ctx.drawImage(imgPlayerTankLevel2Up, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 2) {
            ctx.drawImage(imgPlayerTankLevel2Right, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 3) {
            ctx.drawImage(imgPlayerTankLevel2Down, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 4){
            ctx.drawImage(imgPlayerTankLevel2Left, playerTank.x, playerTank.y, 50, 50);
        }
    } else if (playerTank.type == 3) {
        playerTank.speed = 15;
        playerTank.shootSpeed = 20;
        if (playerTank.state == 1) {
            ctx.drawImage(imgPlayerTankLevel3Up, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 2) {
            ctx.drawImage(imgPlayerTankLevel3Right, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 3) {
            ctx.drawImage(imgPlayerTankLevel3Down, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 4){
            ctx.drawImage(imgPlayerTankLevel3Left, playerTank.x, playerTank.y, 50, 50);
        } 
    } else if (playerTank.type == 4) {
        playerTank.speed = 15;
        playerTank.shootSpeed = 25;
        // +1 lives
        if (playerTank.state == 1) {
            ctx.drawImage(imgPlayerTankLevel4Up, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 2) {
            ctx.drawImage(imgPlayerTankLevel4Right, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 3) {
            ctx.drawImage(imgPlayerTankLevel4Down, playerTank.x, playerTank.y, 50, 50);
        } else if (playerTank.state == 4){
            ctx.drawImage(imgPlayerTankLevel4Left, playerTank.x, playerTank.y, 50, 50);
        }
    }
}

function addBlock(y, x, state) {
    const block = { x: x, y: y, state: state };
    if (state <= 9) {
        blocks.push(block);
    }
    if (state == 'T1') {
        createEnemyTank(x, y, 1);
    }
    if (state == 'T2') {
        createEnemyTank(x, y, 2);
    }
    if (state == 'T3') {
        createEnemyTank(x, y, 3);
    }
    if (state == 'T4') {
        createEnemyTank(x, y, 4);
    }
    if (state == '#') {
        playerTank.x = x;
        playerTank.y = y;
    }
}

function drawBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        // let img = new Image();
        // img.onload = () => {
        //     ctx.beginPath();
        //     ctx.drawImage(img, block.y, block.x, 50, 50);
        //     ctx.closePath();
        // };
        if (block.state == 1) {
            // img.src = 'D:/Projects/canvas/tank/images/bricks-full.png';
            ctx.drawImage(imgBrick, block.x, block.y, 50, 50);
        } else if (block.state == 2) {
            // img.src = 'D:/Projects/canvas/tank/images/forest.png';
            ctx.drawImage(imgTree, block.x, block.y, 50, 50);
        } else if (block.state == 3) {
            // img.src = 'D:/Projects/canvas/tank/images/water.png';
            ctx.drawImage(imgWater, block.x, block.y, 50, 50);
        } else if (block.state == 4) {
            // img.src = 'D:/Projects/canvas/tank/images/wall-full.png';
            ctx.drawImage(imgUnbr, block.x, block.y, 50, 50);
        } else if (block.state == 5) {
            if (isDefeatedPlayerStab == false) {
                base.x = block.x;
                base.y = block.y;
                ctx.drawImage(imgBase, block.x, block.y, 50, 50);
            } else {
                base.x = 0;
                base.y = 0;
                ctx.drawImage(imgDefeatedBase, block.x, block.y, 50, 50);
            }
        } else if (block.state == 6) {
            ctx.drawImage(imgBrick, block.x, block.y, 50, 50);
        } else if (block.state == 7) {
            ctx.drawImage(imgStar, block.x, block.y, 50, 50);
        } else if (block.state == 8) {
            ctx.drawImage(imgBonusTank, block.x, block.y, 50, 50);
        } else if (block.state == 9) {
            ctx.drawImage(imgShovel, block.x, block.y, 50, 50);
        }
    }
}

function createField() {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            addBlock(50 * i, 50 * j, field[i][j]);
        }
    }
}

function draw() {
    // Player tank movements
    if (rightPressed == true) {
        playerTank.state = 2;
        if (canMove()) {
            playerTank.x+= playerTank.speed;
        }
    } else if (leftPressed == true) {
        playerTank.state = 4;
        if (canMove()) {
            playerTank.x-= playerTank.speed;
        }
    } else if (upPressed == true) {
        playerTank.state = 1;
        if (canMove()) {
            playerTank.y-= playerTank.speed;
        }
    } else if (downPressed == true) {
        playerTank.state = 3;
        if (canMove()) {
            playerTank.y+= playerTank.speed;
        }
    }
    // Player bullet movements
    canMoveBullet();
    if (playerBullet.state == 1) {
        playerBullet.y-= playerBullet.speed;
    } else if (playerBullet.state == 2) {
        playerBullet.x+= playerBullet.speed;
    } else if (playerBullet.state == 3) {
        playerBullet.y+= playerBullet.speed;
    } else if (playerBullet.state == 4) {
        playerBullet.x-= playerBullet.speed;
    }
    // enemies' bullet's movements
    for (let i = 0; i < enemyTanksBullet.length; i++) {
        canMoveEnemyBullet(i);
        if (enemyTanksBullet[i].state == 1) {
            enemyTanksBullet[i].y-= enemyTanksBullet[i].speed;
        } else if (enemyTanksBullet[i].state == 2) {
            enemyTanksBullet[i].x+= enemyTanksBullet[i].speed;
        } else if (enemyTanksBullet[i].state == 3) {
            enemyTanksBullet[i].y+= enemyTanksBullet[i].speed;
        } else if (enemyTanksBullet[i].state == 4) {
            enemyTanksBullet[i].x-= enemyTanksBullet[i].speed;
        }
    }
    // enemies's movements
    for (let i = 0; i < enemyTanks.length; i++) {
        if (Math.abs(playerTank.y - enemyTanks[i].y) < 25) {
            if (enemyTanks[i].x > playerTank.x) {
                enemyTanks[i].state = 4;
            } else {
                enemyTanks[i].state = 2;
            }
            shootEnemyTank(i);
        } else if (Math.abs(playerTank.x - enemyTanks[i].x) < 25) {
            if (enemyTanks[i].y > playerTank.y) {
                enemyTanks[i].state = 1;
            } else {
                enemyTanks[i].state = 3;
            }
            shootEnemyTank(i);
        } else if (Math.abs(base.y - enemyTanks[i].y) < 25) {
            if (enemyTanks[i].x > base.x) {
                enemyTanks[i].state = 4;
            } else {
                enemyTanks[i].state = 2;
            }
            shootEnemyTank(i);
        } else if (Math.abs(base.x - enemyTanks[i].x) < 25) {
            if (enemyTanks[i].y > base.y) {
                enemyTanks[i].state = 1;
            } else {
                enemyTanks[i].state = 3;
            }
            shootEnemyTank(i);
        } else {
            let min = 1; 
            let max = 30;          
            let chance = Math.floor(Math.random() * (max - min)) + min;
            if (chance == 1) {
                enemyTanks[i].state = 1;
            } else if (chance == 2) {
                enemyTanks[i].state = 2;
            } else if (chance == 3) {
                enemyTanks[i].state = 3;
            } else if (chance == 4) {
                enemyTanks[i].state = 4;
            }
        }        

        if (enemyTanks[i].state == 1) {
            if (canEnemyMove(enemyTanks[i]) == true) {
                enemyTanks[i].y-= enemyTanks[i].speed;
            }
        } else if (enemyTanks[i].state == 2) {
            if (canEnemyMove(enemyTanks[i]) == true) {
                enemyTanks[i].x+= enemyTanks[i].speed;
            }
        } else if (enemyTanks[i].state == 3) {
            if (canEnemyMove(enemyTanks[i]) == true) {
                enemyTanks[i].y+= enemyTanks[i].speed;
            }
        } else if (enemyTanks[i].state == 4) {
            if (canEnemyMove(enemyTanks[i]) == true) {
                enemyTanks[i].x-= enemyTanks[i].speed;
            }
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank();
    drawEnemyTanks();
    drawBlocks();
    drawPlayerBullet();
    drawEnemyBullets();
}

createField();
setInterval(draw, 100);

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        console.log('right');
        rightPressed = true;

        leftPressed = false;
        upPressed = false;
        downPressed = false;
    }
    if (e.keyCode == 37) {
        console.log('left');
        leftPressed = true;

        rightPressed = false;
        upPressed = false;
        downPressed = false;
    }
    if (e.keyCode == 38) {
        console.log('up');
        upPressed = true;

        rightPressed = false;
        downPressed = false;
        leftPressed = false;
    }
    if (e.keyCode == 40) {
        console.log('down');
        downPressed = true;

        leftPressed = false;
        upPressed = false;
        rightPressed = false;
    }
    if (e.keyCode == 32 && playerTank.shooted == false) {
        playerTank.shooted = true;
        shootPlayerBullet();
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    if (e.keyCode == 37) {
        leftPressed = false;
    }
    if (e.keyCode == 38) {
        upPressed = false;
    }
    if (e.keyCode == 40) {
        downPressed = false;
    }
}
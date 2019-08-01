let enemyArray = [];
let ship;

let player = {
  x: 100,
  y: 510,
  width: 20,
  height: 20,
  speed: 5,
  bulletcord: 5,
  bullet_Y: 510,
  currentpos: 0,

  render_ship_and_bullet: function() {
    rect(player.x, player.y, player.width, player.height);
  },
  controls: function() {
    if (keyIsDown(65)) {
      player.x -= player.speed;
    }
    if (keyIsDown(68)) {
      player.x += player.speed;
    }
    // if (keyIsDown(74)) {
    //   console.log("you shot a missile");
    //   rect(player.x, (player.bullet_Y -= player.bulletcord), 5, 5);
    // }
  }
};

class enemy {
  constructor(x, y, speed, width) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.hitbox = this.y + 5;
  }

  render() {
    square(this.x, this.y, this.width);
  }

  getHit() {
    if (
      player.currentpos >= ship1.x &&
      player.currentpos <= ship1.x + ship1.width &&
      player.bullet_Y <= ship1.y + ship1.hitbox &&
      player.bullet_Y >= ship1.y
    ) {
      console.log("I guess they never miss");
      enemyArray.splice(0, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === 74) {
    player.currentpos = player.x;
    rect(player.currentpos, (player.bullet_Y -= player.bulletcord), 5, 5);
  }
}

function keyReleased() {
  player.bullet_Y = 510;
}

function setup() {
  createCanvas(300, 600);
  ship1 = new enemy(100, 100, 100, 100);
  enemyArray.push(ship1);
}

function draw() {
  background(100);
  player.render_ship_and_bullet();
  player.controls();
  keyPressed();
  for (let i = 0; i < enemyArray.length; i++) {
    enemyArray[i].render();
    enemyArray[i].getHit();
  }
}

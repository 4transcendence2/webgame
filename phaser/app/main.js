var config = {
  type: Phaser.AUTO,
  width: 480,
  height: 320,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);

var ball;
var paddle;


function preload() {
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.stage.backgroundColor = "#eee";
  this.load.image("ball", "img/ball.png"); // 'ball' 이라는 이름으로 이미지 로드
  this.load.image("paddle", "img/paddle.png");
}
function create() {
  ball = game.add.sprite(game.world.width / 2, game.world.height / 4, "ball"); // 순서대로 물체가 시작되는 좌표 x,y 와 불러올 이미지
  paddle = game.add.sprite(
            game.world.width * 0.5,
            game.world.height - 5,
            "paddle"
          );
  game.physics.startSystem(Phaser.Physics.ARCADE); // phaser 에서 제공하는 물리엔진 
  game.physics.enable(ball, Phaser.Physics.ARCADE); // 공에 물리엔지 적용
  ball.body.velocity.set(150, 150); // 공의 vx, vy 
  ball.body.collideWorldBounds = true;
  ball.body.bounce.set(1);
  paddle.anchor.set(0.5, 1);
  game.physics.enable(paddle, Phaser.Physics.ARCADE);
  paddle.body.immovable = true; // 공에 부딪혀도 움직이지 않도록 설정
}

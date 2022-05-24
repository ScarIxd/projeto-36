class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playercount = player.getCount(); //heitor vai fazer a função getCount
  }

  getState(){
    var gameStateRef = database.ref("gamestate");
    gameStateRef.on("value", function(data){
      gamestate = data.val();
    });

  }
}

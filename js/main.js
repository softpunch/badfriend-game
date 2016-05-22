var FieriAttack = FieriAttack || {};

var config = {
    
    "width": window.innerWidth,
    "height": window.innerHeight,
    "renderer": Phaser.AUTO,
    //"resolution": window.devicePixelRatio
};

FieriAttack.game = new Phaser.Game(config);

FieriAttack.game.state.add('Boot', Boot(FieriAttack.game));
FieriAttack.game.state.add('Preload', Preload(FieriAttack.game));
FieriAttack.game.state.add('MainMenu', MainMenu(FieriAttack.game));
FieriAttack.game.state.add('Game', Game(FieriAttack.game));



FieriAttack.game.state.start('Boot');
// loading the game assets
function Preload (game) {
    'use strict';

    return {
        preload: preload,
        create: create
    };

    function preload() {





        //load game assets
        game.load.image('space', 'assets/images/space.png');
        game.load.image('mountains-back', 'assets/images/bfr-mountains-backcc.png');
        game.load.image('mountains-mid1', 'assets/images/bfr-mountains-mid1c.png');
        game.load.image('mountains-mid2', 'assets/images/bfr-mountains-mid2c.png');
        game.load.image('ending2', 'assets/images/ending9.png');
        game.load.image('link-button', 'assets/images/LinkButton.png');
        game.load.spritesheet('sound-icon', 'assets/images/sound-icon2-sheet.png', 25, 25);
        game.load.spritesheet('label', 'assets/images/label.png', 200, 53);
        game.load.spritesheet('rock', 'assets/images/bfr5-rocks.png', 70, 70, 4);
if (game.device.pixelRatio >= 2) {        
        game.load.spritesheet('playership', 'assets/images/player1.png', 28, 28)}
else {  game.load.spritesheet('playership', 'assets/images/player.png', 14, 14)};
        game.load.spritesheet('power', 'assets/images/power.png', 20, 20);
if (game.device.pixelRatio >= 2) {        
        game.load.image('playerParticle', 'assets/images/player-particle1.png')}
else {  game.load.image('playerParticle', 'assets/images/player-particle.png')};
        game.load.audio('sufi', 'assets/audio/botnet.mp3');
        game.load.audio('rootkit', 'assets/audio/rootkit.mp3');
        game.load.audio('collect', 'assets/audio/collect2.wav');
        game.load.audio('explosion', 'assets/audio/explosion2.wav');
        game.load.audio('LevelUp', 'assets/audio/LevelUp.mp3');        
        game.load.audio('endsong', 'assets/audio/EndSong.mp3');
    }

    function create() {
        game.state.start('MainMenu');

    }

}

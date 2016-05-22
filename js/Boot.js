// setting game configuration and loading the assets for the loading screen
function Boot(game) {
    'use strict';

    return {

        create: create
    };



    function create() {
        // loading screen will have a white background
        game.stage.backgroundColor = '#fff';


        // scaling options
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.minWidth = 240;
        game.scale.minHeight = 170;
        game.scale.maxWidth = 2880;
        game.scale.maxHeight = 1920;

        // have the game centered horizontally
        game.scale.pageAlignHorizontally = true;

        // screen size will be set automatically
        game.scale.setScreenSize(true);


        // physics system for movement
        game.physics.startSystem(Phaser.Physics.ARCADE);


        game.state.start('Preload');
    }

};

// title screen
function MainMenu(game) {
    'use strict';

    var h1Style = {font: "30pt Arial", fill: "#F06", backgroundColor: '#99ffff', strokeThickness: 4, align: "center"};
    var pStyle = {font: "15pt Arial", fill: "#F06", strokeThickness: 1, align: "center"};
    var zStyle = {font: "10pt Arial", fill: "#F06", align: "center"};
    var gStyle = {font: "15pt Arial", fill: "#32CD32", align: "center"};
    var aStyle = {font: "20pt Arial", fontWeight: 'bold', fill: "#000", backgroundColor: '#FFFFE0', stroke: "#F06", strokeThickness: 1, align: "center"};
    var AWESOME_SCORE = 1;
    var timer;



    return {
        init: init,
        create: create,
        update: update
    };

    function init(score) {
        score = score || 0;
        game.score = score;
        game.highestScore = game.highestScore || 0;
        game.highestScore = Math.max(score, game.highestScore);
        game.isAwesome = isAwesome;
    }

    function create() {
        // show the space tile, repeated
        game.background = game.add.tileSprite(0, 0, game.width, game.height, 'space');
        game.sound.mute = true;

        //  game intro text
        var text = "Evil Guy Fieri clones\nare hungry... for vinyl.";
        var i = game.add.text(game.width / 2, game.height / 2 - 120, text, pStyle);
if (game.device.pixelRatio >= 2) {
        i.y = game.height / 2 - 240;
        i.scale.set(3)}
        i.anchor.set(0.5);
        
        
        //  game loading text
        var text = "loading...";
        var g = game.add.text(game.width / 2, game.height / 2 - 30, text, gStyle);
if (game.device.pixelRatio >= 2) {
        g.y = game.height / 2 - 60;
        g.scale.set(3)}
        g.anchor.set(0.5);
        
        

        timer = game.time.create(false);
        
        
        // timed text
        game.time.events.add(Phaser.Timer.SECOND * 3/2, createText, this)
        
        
        timer.start();


        // highest score
        text = "Most LPs Saved: " + game.highestScore;
        var h = game.add.text(game.width / 2, game.height / 2 + 20, text, pStyle);
        if (game.device.pixelRatio >= 2) {
        h.y = game.height / 2 + 80;
        h.scale.set(3)}
        h.anchor.set(0.5);

        // highest score
        text = "**This game is not affiliated\nwith or endorsed by anyone.";
        var h = game.add.text(game.width / 2, game.height / 2 + 150, text, zStyle);
if (game.device.pixelRatio >= 2) {
        h.y = game.height / 2 + 400;
        h.scale.set(3)}
        h.anchor.set(0.5);



        maybeAddAwesomeSauce(game.score);
    }
    
    


    function update() {
        

            
        
        if (game.input.activePointer.justPressed()) {
            
            game.sound.mute = false;
            game.state.start('Game');

    }}




    function createText() {

        // start game text

        var text3 = "Tap to Rescue yr Records!";
        var t = game.add.text(game.width / 2, game.height / 2 - 30, text3, h1Style);
if (game.device.pixelRatio >= 2) {
        t.setStyle({font: '45pt Arial', fill: "#F06", backgroundColor: '#99ffff', strokeThickness: 4, align: "center"});
        t.y = game.height / 2 - 60;}
        t.anchor.set(0.5);



        
    }


    function maybeAddAwesomeSauce(score) {
        if (!isAwesome(score)) {
            return;
        }
        var text = "You saved: " + score;
        var text2 = "~ ~ ~ Ouch! You Got ~ ~ ~\nFRENCH FRIED";

        var scoreText = game.add.text(game.width / 2, game.height / 2 - 70, text, pStyle);
if (game.device.pixelRatio >= 2) {
        scoreText.y = game.height / 2 - 380;
        scoreText.scale.set(2)}
        scoreText.anchor.set(0.5);



        var awesomeText = game.add.text(game.width / 2, game.height / 2 + 150, text2, aStyle);
if (game.device.pixelRatio >= 2) {
        awesomeText.y = game.height / 2 + 400;
        awesomeText.scale.set(3)}
        awesomeText.anchor.set(0.5);

        
    }

    function isAwesome(score) {
        return score >= AWESOME_SCORE;
    }
}

// title screen
function Game(game) {
    'use strict';

var Level1Score = 10;
var Level2Score = 20;
var Level3Score = 30;
var Level4Score = 35;
var Level5Score = 40;




    return {

        create: create,
        update: update
    };



var backgroundMusic;
var soundButton;
var endmusic;
var TwoMusic;


    function create() {
        
        
        // set world dimensions
        game.world.setBounds(0, 0, 1920, 1920);

        

        // background
        game.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

 
    game.mountainsBack = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'mountains-back');
 
    game.mountainsMid1 = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'mountains-mid1');
 
    game.mountainsMid2 = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'mountains-mid2');      


        
        
        




        // ending music

        game.endmusic = game.add.audio('endsong');
        game.endmusic.loop = true; 

        // music in background

        backgroundMusic = game.add.audio('sufi');
        backgroundMusic.loop = true; 
        backgroundMusic.volume = 0.4;
        backgroundMusic.play();

        // music part two
        
        game.TwoMusic = game.add.audio('rootkit');
        game.TwoMusic.loop = true; 
        game.TwoMusic.volume = 0.4;



        // create player
        game.player = game.add.sprite(game.world.centerX, game.world.centerY, 'playership');
        game.player.scale.setTo(3);
        game.player.animations.add('fly', [0, 1, 2, 3], 5, true);
        game.player.animations.play('fly');


        // bad friend logo
        game.bfrlabel = game.add.sprite(game.player.X, game.height - 60, 'label');
        game.bfrlabel.animations.add('fly', [0, 1, 2, 3], 5, true);
        game.bfrlabel.animations.play('fly');

if (game.device.pixelRatio >= 2) {
        game.bfrlabel.y = game.height - 110;
        game.bfrlabel.scale.setTo(2)}
        game.bfrlabel.fixedToCamera = true;


        // player initial score of zero
        game.playerScore = 0;
        


        // enable player physics
        game.physics.arcade.enable(game.player);
        game.playerSpeed = 140;
        game.player.body.collideWorldBounds = true;
if (game.device.pixelRatio >= 2) {        
        game.player.body.setSize(24, 24, 5, 4)}
else {  game.player.body.setSize(10, 10, 5, 4)};        
        
        
        

        // the camera will follow the player in the world
        game.camera.follow(game.player);

        // generate game elements
        generateCollectables();
        generateGuys();


        // show score
        showLabels();

        // mute button
        soundButton = game.add.button(game.width - 280, game.height - 58, 'sound-icon', toggleMute, this);
        soundButton.scale.setTo(2)
if (game.device.pixelRatio >= 2) {
        soundButton.x = game.width - 380;
        soundButton.y = game.height - 85;
        soundButton.scale.setTo(3)}
        soundButton.fixedToCamera = true;

        // sounds
        game.explosionSound = game.add.audio('explosion');
        game.explosionSound.volume = 0.8;
        game.collectSound = game.add.audio('collect');
        game.collectSound.volume = 0.5;
        
        game.LevelUp = game.add.audio('LevelUp');
        game.LevelUp.volume = 0.7;        
        
        
        // signals
        
        game.Level1Sig = new Phaser.Signal();
        game.Level1Sig.addOnce(function(){game.LevelUp.play()}, this);


        game.Level1SigColor = new Phaser.Signal();
        game.Level1SigColor.addOnce(function(){game.background.tint = Math.random() * 0xffffff}, this);

        game.Level2Sig = new Phaser.Signal();
        game.Level2Sig.addOnce(function(){game.LevelUp.play()}, this);


        game.Level2SigColor = new Phaser.Signal();
        game.Level2SigColor.addOnce(function(){game.background.tint = Math.random() * 0xffffff}, this);


        game.Level3Guys = new Phaser.Signal();
        game.Level3Guys.addOnce(function(){bonusGuys()}, this);

    
    
        game.Level3Sig = new Phaser.Signal();
        game.Level3Sig.addOnce(function(){game.LevelUp.play()}, this);

        game.Level3SigColor = new Phaser.Signal();
        game.Level3SigColor.addOnce(function(){game.background.tint = Math.random() * 0xffffff}, this);

        game.Level3Music = new Phaser.Signal();
        game.Level3Music.addOnce(function(){game.TwoMusic.play()}, this);


        game.Level5Sig = new Phaser.Signal();
        game.Level5Sig.addOnce(function(){game.LevelUp.play()}, this);


        game.Level5SigColor = new Phaser.Signal();
        game.Level5SigColor.add(function(){game.background.tint = Math.random() * 0xffffff}, this);
        

        game.GoBye = new Phaser.Signal();
        game.GoBye.addOnce(function(){game.world.removeAll()}, this);

//        game.GreatJob = new Phaser.Signal();
//        game.GreatJob.addOnce(function(){game.add.sprite(game.width / 2, game.height / 2, 'ending')}, this);

        game.GreatJob2 = new Phaser.Signal();
        game.GreatJob2.addOnce(function(){game.add.sprite(0, 0, 'ending2')}, this);



        game.CamSigU = new Phaser.Signal();
        game.CamSigU.addOnce(function(){game.camera.unfollow()}, this);


        game.CamSigC = new Phaser.Signal();
        game.CamSigC.addOnce(function(){game.camera.focusOnXY(960, 960)}, this);




        game.TXT7 = new Phaser.Signal();
        game.TXT7.addOnce(function(){var text7 = "Get 10% Off REAL records\nwith code IWIN2016\n"; 
        game.add.text(775, 680, text7, {align: 'center'});}, this);

        game.LinkButton = new Phaser.Signal();
        game.LinkButton.addOnce(function(){game.add.button(775, 775, 'link-button', function() {document.location.href = "http://BadFriend.LNK.TO/Merch"}, this)});


        game.TXT8 = new Phaser.Signal();
        game.TXT8.addOnce(function(){var text8 = "All Sounds by Drunken Sufis"; 
        game.add.text(775,1175, text8, {fill: "#F06", strokeThickness: 1, align: 'center'});}, this);
        


        
        
        game.NewSig = new Phaser.Signal();
        game.NewSig.addOnce(function(){game.endmusic.play()}, this)
}

    function update() {
        if (game.input.activePointer.justPressed()) {
            
            if (game.input.activePointer.targetObject != null) { return false }
            else {
            // move on the direction of the input
            game.physics.arcade.moveToPointer(game.player, game.playerSpeed);}
        }




    game.mountainsBack.tilePosition.x -= 0.05;
    game.mountainsMid1.tilePosition.x -= 0.3;
    game.mountainsMid2.tilePosition.x -= 0.75;      









        // collision between player and Guys
        game.physics.arcade.collide(game.player, game.Guys, hitguy, null, game);

        // overlapping between player and collectables
        game.physics.arcade.overlap(game.player, game.collectables, collect, null, game);
        
        
        
 if (game.playerScore >= Level1Score) {
 
        game.Level1Sig.dispatch(); 
        game.Level1SigColor.dispatch(); 

              game.player.scale.setTo(4); }
             
             
 if (game.playerScore >= Level2Score) {


        game.Level2Sig.dispatch(); 
        game.Level2SigColor.dispatch(); 
     
             game.player.scale.setTo(5);  }
             
             
 if (game.playerScore >= Level3Score) {

        backgroundMusic.stop();

        game.Level3Guys.dispatch();
        game.Level3Sig.dispatch(); 
        game.Level3SigColor.dispatch(); 
        game.Level3Music.dispatch(); 
     
             game.player.scale.setTo(6);  }
 


 if (game.playerScore >= Level4Score) {
     
        game.Level5Sig.dispatch(); 
        game.Level5SigColor.dispatch(); 

     
             game.player.scale.setTo(7);  }  
             
 if (game.playerScore >= Level5Score) {

  // stop music

        game.TwoMusic.stop();

    
        game.GoBye.dispatch();


 // show ending sprite
        game.GreatJob2.dispatch();
        

        game.CamSigU.dispatch();
        game.CamSigC.dispatch();
 
        game.TXT7.dispatch(); 
        game.LinkButton.dispatch();
        game.TXT8.dispatch(); 
 
 
 // signal the ending music
        game.NewSig.dispatch(); 







 
 
 // click stops music and goes to menu
  if (game.input.activePointer.justPressed()) {
            
            if (game.input.activePointer.targetObject != null) { return false }
            else {
            game.endmusic.stop();
            game.state.start('MainMenu');}
        }
 
 

   } 
        
}
 


        
    



    function toggleMute() {
    if (!this.game.sound.mute) {
        this.game.sound.mute = true;
        soundButton.frame = 1
    } else {
        this.game.sound.mute = false;
        soundButton.frame = 0
    } }


    function generateCollectables() {
        game.collectables = game.add.group();

        // enable physics in them
        game.collectables.enableBody = true;
        game.collectables.physicsBodyType = Phaser.Physics.ARCADE;
        game.collectables.scale.setTo(1.5);

        // phaser's random number generator
        var numCollectables = game.rnd.integerInRange(100, 150);
        var collectable;

        for (var i = 0; i < numCollectables; i++) {
            // add sprite
            collectable = game.collectables.create(game.world.randomX, game.world.randomY, 'power');
            collectable.animations.add('fly', [0, 1, 2, 3], 5, true);
            collectable.animations.play('fly');

            if (game.device.pixelRatio >= 2) {
        collectable.scale.setTo(2)}
            
        }
        
        
    }

    function generateGuys() {
        game.Guys = game.add.group();

        // enable physics in them
        game.Guys.enableBody = true;

        // phaser's random number generator
        var numGuys = game.rnd.integerInRange(25, 35);
        var Guy;

        for (var i = 0; i < numGuys; i++) {
            // add sprite
            Guy = game.Guys.create(randX(), randY(), 'rock', game.rnd.integerInRange(0, 4));
            Guy.name = 'guy' + i.toString();
            Guy.frame = game.rnd.integerInRange(0, Guy.animations.frameTotal - 1);
            Guy.scale.setTo(game.rnd.integerInRange(8, 15) / 10);

            if (game.device.pixelRatio >= 2) {
            Guy.scale.setTo(game.rnd.integerInRange(12, 18) / 10);}

            // physics properties
            Guy.body.velocity.x = game.rnd.integerInRange(-25, 25);
            Guy.body.velocity.y = game.rnd.integerInRange(-25, 25);
            Guy.body.immovable = true;
            Guy.body.collideWorldBounds = true;
            Guy.body.bounce.set(5 / 4);
            Guy.body.maxVelocity.x= 150;
            Guy.body.maxVelocity.y= 150;


            
        }
    }



    function bonusGuys() {
        
    game.BGuys = game.add.group();

        // enable physics in them
        game.BGuys.enableBody = true;

        // phaser's random number generator
        var numBGuys = game.rnd.integerInRange(5, 10);
        var BGuy;

        for (var i = 0; i < numBGuys; i++) {
            // add sprite
            BGuy = game.BGuys.create(randX(), randY(), 'rock', game.rnd.integerInRange(0, 4));
            BGuy.name = 'BGuy' + i.toString();
            BGuy.frame = game.rnd.integerInRange(0, BGuy.animations.frameTotal - 1);
            BGuy.scale.setTo(game.rnd.integerInRange(4, 8) / 10);

            if (game.device.pixelRatio >= 2) {
            BGuy.scale.setTo(game.rnd.integerInRange(9, 12) / 10);}

            // physics properties
            BGuy.body.velocity.x = game.rnd.integerInRange(-25, 25);
            BGuy.body.velocity.y = game.rnd.integerInRange(-25, 25);
            BGuy.body.immovable = true;
            BGuy.body.collideWorldBounds = true;
            BGuy.body.bounce.set(5 / 4);
            BGuy.body.maxVelocity.x= 150;
            BGuy.body.maxVelocity.y= 150;
            BGuy.tint = Math.random() * 0xffffff;
            BGuy.angle += 1;
            
        }
    }



    function randX() {
        var x = game.world.randomX;
        return Math.abs(x - game.world.centerX) > 50 ? x : game.world.randomX;
    }

    function randY() {
        var y = game.world.randomY;
        return Math.abs(y - game.world.centerY) > 50 ? y : game.world.randomY;
    }

    function hitguy(player, guy) {
        
        // stop music
        backgroundMusic.stop()
        game.TwoMusic.stop();
        // play explosion sound
        game.explosionSound.play();

        // make the player explode
        var emitter = game.add.emitter(game.player.x, game.player.y, 100);
        emitter.makeParticles('playerParticle');
        emitter.minParticleSpeed.setTo(-220, -220);
        emitter.maxParticleSpeed.setTo(220, 220);
        emitter.gravity = 0;
        emitter.start(true, 2000, null, 100);
        game.player.kill();

        game.time.events.add(1400, gameOver, game);
    }

    function gameOver() {
        // pass it the score as a parameter
        game.state.start('MainMenu', true, false, game.playerScore);
    }
    



    function collect(player, collectable) {
        // play collect sound
        game.collectSound.play();

        // update score
        game.playerScore++;
        
        if (game.playerScore < 10){
        game.scoreLabel.text = "0" + game.playerScore}
        else {game.scoreLabel.text = game.playerScore}


        // remove sprite
        collectable.destroy();
    }

        




    function showLabels() {
        // score text
        var text = "00";
        var style = {font: "25px Arial", fontWeight: 'bold', fill: "#F06", align: "center"};
        game.scoreLabel = game.add.text(game.width - 110, game.height - 57, text, style);
                game.scoreLabel.scale.setTo(3/2)
        if (game.device.pixelRatio >= 2) {
        game.scoreLabel.x = game.width - 155
        game.scoreLabel.y = game.height - 72;
        game.scoreLabel.scale.setTo(2)}
        game.scoreLabel.fixedToCamera = true;

        
        text = "LPs:     /40";
        var dstyle = {font: "25px Arial", fill: "#000", align: "center"};
        game.LPLabel = game.add.text(game.width - 185, game.height - 55, text, dstyle);
                game.LPLabel.scale.setTo(3/2)
        if (game.device.pixelRatio >= 2) {
        game.LPLabel.x = game.width - 255;
        game.LPLabel.y = game.height - 72;
        game.LPLabel.scale.setTo(2)}
        game.LPLabel.fixedToCamera = true;   
        
        
        
    }

}

  
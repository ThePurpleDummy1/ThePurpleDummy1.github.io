$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    createPlatform(500, 600, 400, 5, "crimson");
    createPlatform(1100, 500, 100, 5, "blue");
    createPlatform(1300, 400, 100, 5, "green", 100, 1300, 4);
    createPlatform(100, 300, 100, 5, "#9932CC");
    createPlatform(300, 200, 700, 5, "#ADD8E6");
    createPlatform(1200, 200, 100, 50);
    // TODO 2 - Create Platforms
    //createPlatform(xPos, yPos, Width, Height)

    // TODO 3 - Create Collectables
    createCollectable("bravery", 100, 100);
    createCollectable("determination", 1225, 100);
    createCollectable("patience", 1135, 460);
    createCollectable("justice", 500, 350);
    createCollectable("preserverance", 1300, 700);
    createCollectable("goofy", 200, 700);
    createCollectable("kindness", 700, 350);
    // TODO 4 - Create Cannons
    createCannon("right", 420, 10000000000000, 700, 700);
    createCannon("bottom", 900, 1000, 60, 60);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

var bgm1 = new Audio("BrokenReality.ogg"); // replace with the actual path to your mp3
bgm1.loop = true; // keeps playing in a loop
bgm1.volume = 0.2; // optional: volume between 0.0 and 1.0

window.playAudio1 = function () {
  if (bgm1.paused) {
    bgm1.play();
  } else {
    bgm1.pause();
  }
};

var bgm2 = new Audio("Av.ogg"); // replace with the actual path to your .mp3 or .ogg
bgm2.loop = true; // keeps playing in a loop
bgm2.volume = 0.2; // optional: volume between 0.0 and 1.0

window.playAudio2 = function () {
  if (bgm2.paused) {
    bgm2.play();
  } else {
    bgm2.pause();
  }
};

var bgm3 = new Audio("heatwave.ogg"); // replace with the actual path to your mp3
bgm3.loop = true; // keeps playing in a loop
bgm3.volume = 0.2; // optional: volume between 0.0 and 1.0

window.playAudio3 = function () {
  if (bgm3.paused) {
    bgm3.play();
  } else {
    bgm3.pause();
  }
};

var bgm4 = new Audio("preserverance.ogg"); // replace with the actual path to your mp3
bgm4.loop = true; // keeps playing in a loop
bgm4.volume = 0.2; // optional: volume between 0.0 and 1.0

window.playAudio4 = function () {
  if (bgm4.paused) {
    bgm4.play();
  } else {
    bgm4.pause();
  }
};

var bgm5 = new Audio("cornered.ogg"); // replace with the actual path to your mp3
bgm5.loop = true; // keeps playing in a loop
bgm5.volume = 0.2; // optional: volume between 0.0 and 1.0

window.playAudio5 = function () {
  if (bgm5.paused) {
    bgm5.play();
  } else {
    bgm5.pause();
  }
};

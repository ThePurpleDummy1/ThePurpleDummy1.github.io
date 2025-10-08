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
    createCollectable("kindness", 700, 350)
    // TODO 4 - Create Cannons
    createCannon("right", 420, 10000000000000, 700, 700);
    createCannon("bottom", 900, 1000, 60, 60);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

var bgm = new Audio("Inst.ogg"); // replace with the actual path to your mp3
bgm.loop = true; // keeps playing in a loop
bgm.volume = 0.5; // optional: volume between 0.0 and 1.0

window.playAudio = function () {
if (bgm.paused) {
bgm.play();
} else {
bgm.pause();
}
};
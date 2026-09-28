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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 20, 10, "black")
    createPlatform(320, 700, 20, 10, "white")
    createPlatform(340, 700, 20, 10, "black")
    createPlatform(360, 700, 20, 10, "white")
    createPlatform(380, 700, 20, 10, "black")
    createPlatform(400, 700, 20, 10, "white")

    createPlatform(600, 600, 20, 10, "black")
    createPlatform(620, 600, 20, 10, "white")
    createPlatform(640, 600, 20, 10, "black")
    createPlatform(660, 600, 20, 10, "white")
    createPlatform(680, 600, 20, 10, "black")
    createPlatform(700, 600, 20, 10, "white")

    createPlatform(300, 500, 20, 10, "black")
    createPlatform(320, 500, 20, 10, "white")
    createPlatform(340, 500, 20, 10, "black")
    createPlatform(360, 500, 20, 10, "white")
    createPlatform(380, 500, 20, 10, "black")
    createPlatform(400, 500, 20, 10, "white")
    //createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

/*
  Adapted from oneko.js: https://github.com/adryd325/oneko.js
  Copyright © 2022 adryd
  Licensed under the MIT License. See THIRD_PARTY_NOTICES.md.
*/
(function initializeOneko() {
  "use strict";

  var isHomePage = document.querySelector(".home-main");
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isHomePage || !finePointer || reducedMotion) {
    return;
  }

  function getStartingPosition() {
    var heroName = document.getElementById("hero-name");

    if (!heroName) {
      return { x: 32, y: window.innerHeight - 48 };
    }

    var bounds = heroName.getBoundingClientRect();
    return {
      x: Math.max(20, bounds.left - 32),
      y: Math.min(
        Math.max(20, bounds.top + bounds.height / 2),
        window.innerHeight - 20
      ),
    };
  }

  var startingPosition = getStartingPosition();
  var cat = document.createElement("div");
  var catX = startingPosition.x;
  var catY = startingPosition.y;
  var mouseX = catX;
  var mouseY = catY;
  var frameCount = 0;
  var wakeFrames = 0;
  var hasPointer = false;
  var speed = 5;

  var sprites = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    N: [[-1, -2], [-1, -3]],
    NE: [[0, -2], [0, -3]],
    E: [[-3, 0], [-3, -1]],
    SE: [[-5, -1], [-5, -2]],
    S: [[-6, -3], [-7, -2]],
    SW: [[-5, -3], [-6, -1]],
    W: [[-4, -2], [-4, -3]],
    NW: [[-1, 0], [-1, -1]],
  };

  function setSprite(name, frame) {
    var sprite = sprites[name][frame % sprites[name].length];
    cat.style.backgroundPosition = sprite[0] * 40 + "px " + sprite[1] * 40 + "px";
  }

  function setPosition() {
    cat.style.left = catX - 20 + "px";
    cat.style.top = catY - 20 + "px";
  }

  cat.id = "oneko";
  cat.setAttribute("aria-hidden", "true");
  cat.style.backgroundImage = 'url("oneko.gif")';
  setPosition();
  setSprite("idle", 0);
  document.body.appendChild(cat);

  document.addEventListener(
    "pointermove",
    function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      hasPointer = true;
    },
    { passive: true }
  );

  function tick() {
    if (!hasPointer) {
      setSprite("idle", 0);
      return;
    }

    frameCount += 1;

    var differenceX = catX - mouseX;
    var differenceY = catY - mouseY;
    var distance = Math.hypot(differenceX, differenceY);

    if (distance < 42) {
      wakeFrames = 0;
      setSprite("idle", 0);
      return;
    }

    if (wakeFrames < 4) {
      wakeFrames += 1;
      setSprite("alert", 0);
      return;
    }

    var direction = "";
    direction += differenceY / distance > 0.5 ? "N" : "";
    direction += differenceY / distance < -0.5 ? "S" : "";
    direction += differenceX / distance > 0.5 ? "W" : "";
    direction += differenceX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    catX -= (differenceX / distance) * speed;
    catY -= (differenceY / distance) * speed;
    catX = Math.min(Math.max(20, catX), window.innerWidth - 20);
    catY = Math.min(Math.max(20, catY), window.innerHeight - 20);
    setPosition();
  }

  window.setInterval(tick, 100);
})();

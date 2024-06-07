// replace this :

Object.defineProperty(WebApp, "platform", {
  get: function () {
    return webAppPlatform;
  },
  enumerable: true,
});

// with this :

Object.defineProperty(WebApp, "platform", {
  get: function () {
    return "ios";
  },
  enumerable: true,
});

// clicker script :

(function () {
  const tapButton = document.getElementsByClassName("user-tap-button")[0];
  const energyElement = document
    .getElementsByClassName("user-tap-energy")[0]
    .getElementsByTagName("p")[0];

  // Global variables for configuration
  const numberOfTaps = 5;
  const tapDelay = 10; // Delay in milliseconds between each tap

  function simulateTap() {
    const evt1 = new PointerEvent("pointerdown", {
      clientX: 150,
      clientY: 300,
    });
    const evt2 = new PointerEvent("pointerup", { clientX: 150, clientY: 300 });
    tapButton.dispatchEvent(evt1);
    tapButton.dispatchEvent(evt2);
  }

  setInterval(
    (function fn() {
      const energy = parseInt(energyElement.textContent.split(" / ")[0]);
      if (energy > 25) {
        for (let i = 0; i < numberOfTaps; i++) {
          setTimeout(simulateTap, i * tapDelay);
        }
      }
      return fn;
    })(),
    50
  );
})();

// cheat script :

// search a.availableTaps in source

setInterval(function () {
  console.log("run");
  temp1.availableTaps = 5000;
  temp1.earnPerTap = 14;
}, 1000);

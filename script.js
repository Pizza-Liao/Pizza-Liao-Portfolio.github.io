let countHeart = 0;
function myFunction() {
  countHeart++;
  if (countHeart % 2 === 1) {
    document.getElementById("heart").src = "https://i.imgur.com/zKn8lCq.png";
  } else {
    document.getElementById("heart").src = "https://i.imgur.com/2QsTrfX.png";
  }
}

let pictureCount = 1;
function pictureChange() {
  pictureCount++;
  if (pictureCount % 3 === 1) {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1635399769293-5d9b69cd-6fd6-4fad-8bde-00c1a6ae8944.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/5ed2a99b-e1c2-4c5a-8124-1e5f97316143";
  } else if (pictureCount % 3 === 2) {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1634189147290-3245bab8-61e7-4d32-bbf2-e49a58e639e6.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/00de2efd-f2a8-4ba3-895a-d082a20b0f43";
  } else {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1636607264544-ba75f431-c575-413f-8a44-990cdcd9ed9d.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/8e03ece0-e246-48bf-81ca-495807c0d587";
  }
}

function pictureChangeminus() {
  pictureCount--;
  if (pictureCount % 3 === Math.abs(1)) {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1635399769293-5d9b69cd-6fd6-4fad-8bde-00c1a6ae8944.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/5ed2a99b-e1c2-4c5a-8124-1e5f97316143";
  } else if (pictureCount % 3 === 2) {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1634189147290-3245bab8-61e7-4d32-bbf2-e49a58e639e6.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/00de2efd-f2a8-4ba3-895a-d082a20b0f43";
  } else {
    document.getElementById("podcast-picture").src =
      "https://images.weserv.nl/?il&fit=contain&w=200&h=200&dpr=2&url=https://files.soundon.fm/1636607264544-ba75f431-c575-413f-8a44-990cdcd9ed9d.jpeg";
    document.getElementById("podcast-link").href =
      "https://player.soundon.fm/p/112db27e-1fa9-4de3-af5a-4294b2a547f9/episodes/8e03ece0-e246-48bf-81ca-495807c0d587";
  }
}


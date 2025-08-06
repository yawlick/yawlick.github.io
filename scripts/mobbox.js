import { MOBS } from './handler/mobs.js';

document.addEventListener("DOMContentLoaded", () => {
  const mobBoxes = document.querySelectorAll(".mobbox");

  mobBoxes.forEach(box => {
    const unknown = "<span style='color: #F25050;'>???</span>";
    var id = null;
    if(box.getAttribute("name")) {
      id = box.getAttribute("name").toUpperCase()
    } else if(box.getAttribute("id")) {
     id = box.getAttribute("id").toUpperCase()
    }

    var name = null;
    var event = null;
    var health = null;
    var dropsMoney = null;
    var description = null;
    var rarity = null;

    if(MOBS[id]) {
      console.log(id)
      const data = MOBS[id]

      name = data.name || unknown;
      health = data.health ? "<span style='color: #4a8cec;'>" + data.health + "</span>" : unknown;
      dropsMoney = data.dropsMoney ? "<span style='color: #4a8cec;'>" + data.dropsMoney + "</span>" : unknown;
      event = data.event ? "<span style='color: #4a8cec;'>" + data.event + "</span>" : unknown;
      description = data.description ? "<span style='color: #474747;'>" + data.description + "</span>" : unknown;
      rarity = Rarity.OTHER;
    } else {
      name = box.getAttribute("name") || unknown;
      health = box.getAttribute("health") ? "<span style='color: #4a8cec;'>" + box.getAttribute("health") + "</span>" : unknown;
      dropsMoney = box.getAttribute("dropsmoney") ? "<span style='color: #4a8cec;'>" + box.getAttribute("dropsmoney") + "</span>" : unknown;
      event = box.getAttribute("event") ? "<span style='color: #4a8cec;'>" + box.getAttribute("event") + "</span>" : unknown;
      description = box.getAttribute("description") ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
      rarity = Rarity.OTHER;
    }

    box.innerHTML = "";
    box.style.border = "1px solid " + rarity.getHex();

    const textureElement = document.createElement("img");
    textureElement.className = "mobbox-texture";
    textureElement.src = "../../../assets/textures/skins/yawl1ck.png";
    textureElement.style.border = "1px solid " + rarity.getHex();
    box.appendChild(textureElement);

    const nameElement = document.createElement("div");
    nameElement.className = "mobbox-title";
    nameElement.textContent = name;
    nameElement.style.color = rarity.getHex();
    box.appendChild(nameElement);

    const eventElement = document.createElement("div");
    eventElement.className = "mobbox-param";
    eventElement.style.color = "white";
    eventElement.innerHTML = "Тип спавна: " + event;
    box.appendChild(eventElement);

    const healthElement = document.createElement("div");
    healthElement.className = "mobbox-param";
    healthElement.style.color = "white";
    healthElement.innerHTML = "Здоровье: " + health + " <img src='../../../../../assets/textures/icons/health.png' class='icon' width='14'></img>";
    box.appendChild(healthElement);

    const dropsmoneyElement = document.createElement("div");
    dropsmoneyElement.className = "mobbox-param";
    dropsmoneyElement.style.color = "white";
    dropsmoneyElement.innerHTML = "Дроп денег: " + dropsMoney + " <img src='../../../../../assets/textures/icons/coin.png' class='icon' width='14'></img>";
    box.appendChild(dropsmoneyElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "mobbox-param";
    descriptionElement.style.color = "white";
    descriptionElement.innerHTML = description;
    box.appendChild(descriptionElement);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-drop");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const fakeFlexContainer = toggle.closest(".fake-flex-container");
      const flexContainer = fakeFlexContainer.querySelector(".flex-container");
      const isVisible = flexContainer.style.display !== "none";

      fakeFlexContainer.style.padding = isVisible ? "1px 1rem 0.1rem 1rem" : "1px 1rem 1rem 1rem"
      flexContainer.style.display = isVisible ? "none" : "flex";
      toggle.textContent = isVisible ? "(развернуть)" : "(свернуть)";
    });
  });
});
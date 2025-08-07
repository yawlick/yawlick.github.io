import { REBIRTHS } from './handler/rebirths.js';

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".rebirthbox");

  elements.forEach(box => {
    const unknown = "<span style='color: #f25050;'>???</span>";
    var id = null;
    if(box.getAttribute("name")) {
      id = box.getAttribute("name").toUpperCase()
    } else if(box.getAttribute("id")) {
      id = box.getAttribute("id").toUpperCase()
    }
    console.log(id)

    var index = null;
    var name = null;
    var mult = null;
    var need = null;
    var next = null;
    var description = null;

    if(REBIRTHS[id]) {
      const data = REBIRTHS[id]
      console.log(data)

      index = data.index || unknown;
      name = data.name || unknown;
      mult = data.health ? "<span style='color: #4a8cec;'>" + data.mult + "</span>" : unknown;
      need = data.need ? "<span style='color: #4a8cec;'>" + data.need + "</span>" : unknown;
      next = data.next ? "<span style='color: #4a8cec;'>" + data.next + "</span>" : unknown;
      description = index ? "<span style='color: #474747;'>" + `(#${index} / перерождение)` + "</span>" : unknown;
    } else {
      index = box.getAttribute("index") || unknown;
      name = box.getAttribute("name") || unknown;
      mult = box.getAttribute("mult") ? "<span style='color: #4a8cec;'>" + box.getAttribute("mult") + "</span>" : unknown;
      need = box.getAttribute("need") ? "<span style='color: #4a8cec;'>" + box.getAttribute("need") + "</span>" : unknown;
      next = box.getAttribute("next") ? "<span style='color: #4a8cec;'>" + box.getAttribute("next") + "</span>" : unknown;
      description = index ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
    }

    const rarity = Rarity.OTHER

    box.innerHTML = "";
    box.style.border = "1px solid " + rarity.getHex();

    const nameElement = document.createElement("div");
    nameElement.className = "rebirthbox-title";
    nameElement.textContent = name;
    nameElement.style.color = rarity.getHex();
    box.appendChild(nameElement);

    const eventElement = document.createElement("div");
    eventElement.className = "rebirthbox-param";
    eventElement.style.color = "white";
    eventElement.innerHTML = "Тип спавна: " + index;
    box.appendChild(eventElement);

    const healthElement = document.createElement("div");
    healthElement.className = "rebirthbox-param";
    healthElement.style.color = "white";
    healthElement.innerHTML = "Здоровье: " + mult + " <img src='../../../../../assets/textures/icons/health.png' class='icon' width='14'></img>";
    box.appendChild(healthElement);

    const dropsmoneyElement = document.createElement("div");
    dropsmoneyElement.className = "rebirthbox-param";
    dropsmoneyElement.style.color = "white";
    dropsmoneyElement.innerHTML = "Дроп денег: " + need + " <img src='../../../../../assets/textures/icons/coin.png' class='icon' width='14'></img>";
    box.appendChild(dropsmoneyElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "rebirthbox-param";
    descriptionElement.style.color = "white";
    descriptionElement.innerHTML = description;
    box.appendChild(descriptionElement);
  });
});
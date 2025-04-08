document.addEventListener("DOMContentLoaded", () => {
  const mobBoxes = document.querySelectorAll(".mobbox");

  mobBoxes.forEach(box => {
    const unknown = "<span style='color: #F25050;'>???</span>";
    const name = box.getAttribute("name") || unknown;
    const health = box.getAttribute("health") ? "<span style='color: #4a8cec;'>" + box.getAttribute("health") + "</span>" : unknown;
    const dropsmoney = box.getAttribute("dropsmoney") ? "<span style='color: #4a8cec;'>" + box.getAttribute("dropsmoney") + "</span>" : unknown;
    const event = box.getAttribute("event") ? "<span style='color: #4a8cec;'>" + box.getAttribute("event") + "</span>" : unknown;
    const description = box.getAttribute("description") ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
    const rarity = Rarity.OTHER;

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
    dropsmoneyElement.innerHTML = "Дроп денег: " + dropsmoney + " <img src='../../../../../assets/textures/icons/coin.png' class='icon' width='14'></img>";
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
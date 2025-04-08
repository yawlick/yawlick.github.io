
  
document.addEventListener("DOMContentLoaded", () => {
  const petBoxes = document.querySelectorAll(".petbox");

  petBoxes.forEach(box => {
    const unknown = "<span style='color: #F25050;'>???</span>";
    const name = box.getAttribute("name") || unknown;
    const power = box.getAttribute("power") ? "<span style='color: #4a8cec;'>" + box.getAttribute("power") + "</span>" : unknown;
    const location = box.getAttribute("location") ? "<span style='color: #4a8cec;'>" + box.getAttribute("location") + "</span>" : unknown;
    const event = box.getAttribute("event") ? "<span style='color: #4a8cec;'>" + box.getAttribute("event") + "</span>" : unknown;
    const chance = box.getAttribute("chance") ? "<span style='color: #4a8cec;'>" + box.getAttribute("chance") + "</span>" : unknown;
    const description = box.getAttribute("description") ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
    const rarity = Rarity[box.getAttribute("rarity")] || Rarity.OTHER;

    box.innerHTML = "";
    box.style.border = "1px solid " + rarity.getHex();

    const nameElement = document.createElement("div");
    nameElement.className = "petbox-title";
    nameElement.textContent = name;
    nameElement.style.color = rarity.getHex();
    box.appendChild(nameElement);

    const rarityElement = document.createElement("div");
    rarityElement.className = "petbox-param";
    rarityElement.style.color = "white";
    rarityElement.innerHTML = "Редкость: <span style='color: " + rarity.getHex() + ";'>" + rarity.getName() + "</span>";
    box.appendChild(rarityElement);

    const space1Element = document.createElement("div");
    space1Element.className = "itembox-param";
    space1Element.style.color = "white";
    space1Element.innerHTML = "ㅤ";
    box.appendChild(space1Element);

    const powerElement = document.createElement("div");
    powerElement.className = "petbox-param";
    powerElement.style.color = "white";
    powerElement.innerHTML = "Мощь: " + power;
    box.appendChild(powerElement);

    const spaceElement = document.createElement("div");
    spaceElement.className = "itembox-param";
    spaceElement.style.color = "white";
    spaceElement.innerHTML = "ㅤ";
    box.appendChild(spaceElement);

    const locationElement = document.createElement("div");
    locationElement.className = "itembox-param";
    locationElement.style.color = "white";
    locationElement.innerHTML = "Локация: " + location;
    box.appendChild(locationElement);

    const eventElement = document.createElement("div");
    eventElement.className = "itembox-param";
    eventElement.style.color = "white";
    eventElement.innerHTML = "Событие: " + event;
    box.appendChild(eventElement);

    const chanceElement = document.createElement("div");
    chanceElement.className = "itembox-param";
    chanceElement.style.color = "white";
    chanceElement.innerHTML = "Шанс: " + chance;
    box.appendChild(chanceElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "itembox-param";
    descriptionElement.style.color = "white";
    descriptionElement.innerHTML = description;
    box.appendChild(descriptionElement);
  });
});

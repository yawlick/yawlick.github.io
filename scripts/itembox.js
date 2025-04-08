document.addEventListener("DOMContentLoaded", () => {
  const itemBoxes = document.querySelectorAll(".itembox");

  itemBoxes.forEach(box => {
    const unknown = "<span style='color: #F25050;'>???</span>";
    const name = box.getAttribute("name") || unknown;
    const power = box.getAttribute("power") ? "<span style='color: #4a8cec;'>" + box.getAttribute("power") + "</span>" : unknown;
    const price = box.getAttribute("price") ? "<span style='color: #4a8cec;'>" + box.getAttribute("price") + "</span>" : unknown;
    const location = box.getAttribute("location") ? "<span style='color: #4a8cec;'>" + box.getAttribute("location") + "</span>" : unknown;
    const event = box.getAttribute("event") ? "<span style='color: #4a8cec;'>" + box.getAttribute("event") + "</span>" : unknown;
    const description = box.getAttribute("description") ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
    const rarity = Rarity[box.getAttribute("rarity")] || Rarity.OTHER;

    box.innerHTML = "";
    box.style.border = "1px solid " + rarity.getHex();

    const textureElement = document.createElement("img");
    textureElement.className = "itembox-texture";
    textureElement.src = "../../../assets/textures/swords/Лесной меч.png";
    textureElement.style.border = "1px solid " + rarity.getHex();
    textureElement.width = "128";
    box.appendChild(textureElement);

    const nameElement = document.createElement("div");
    nameElement.className = "itembox-title";
    nameElement.textContent = name;
    nameElement.style.color = rarity.getHex();
    box.appendChild(nameElement);

    const rarityElement = document.createElement("div");
    rarityElement.className = "itembox-param";
    rarityElement.style.color = "white";
    rarityElement.innerHTML = "Редкость: <span style='color: " + rarity.getHex() + ";'>" + rarity.getName() + "</span>";
    box.appendChild(rarityElement);

    const space1Element = document.createElement("div");
    space1Element.className = "itembox-param";
    space1Element.style.color = "white";
    space1Element.innerHTML = "ㅤ";
    box.appendChild(space1Element);

    const powerElement = document.createElement("div");
    powerElement.className = "itembox-param";
    powerElement.style.color = "white";
    powerElement.innerHTML = "Сила: " + power + " <img src='../../assets/textures/icons/sword.png' class='icon' width='14'></img>";
    box.appendChild(powerElement);

    const priceElement = document.createElement("div");
    priceElement.className = "itembox-param";
    priceElement.style.color = "white";
    priceElement.innerHTML = "Цена продажи: " + price + " <img src='../../../assets/textures/icons/coin.png' class='icon' width='14'></img>";
    box.appendChild(priceElement);

    const space2Element = document.createElement("div");
    space2Element.className = "itembox-param";
    space2Element.style.color = "white";
    space2Element.innerHTML = "ㅤ";
    box.appendChild(space2Element);

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

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "itembox-param";
    descriptionElement.style.color = "white";
    descriptionElement.innerHTML = description;
    box.appendChild(descriptionElement);
  });
});

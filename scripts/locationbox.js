document.addEventListener("DOMContentLoaded", () => {
  const locationBoxes = document.querySelectorAll(".locationbox");

  locationBoxes.forEach(box => {
    const unknown = "<span style='color: #F25050;'>???</span>";
    const name = box.getAttribute("name") || unknown;
    const id = box.getAttribute("id") ? box.getAttribute("id") : 0;
    const description = box.getAttribute("description") ? "<span style='color: #474747;'>" + box.getAttribute("description") + "</span>" : unknown;
    const rebirth = box.getAttribute("rebirth") ? "<span style='color: #4a8cec;'>" + box.getAttribute("rebirth") + "</span>" : unknown;
    const price = box.getAttribute("price") ? "<span style='color: #4a8cec;'>" + box.getAttribute("price") + "</span>" : unknown;
    const rarity = Rarity.OTHER;

    box.innerHTML = "";
    box.style.border = "1px solid " + rarity.getHex();
    box.style.cursor = "pointer";
    box.addEventListener("click", () => {
      const name = box.getAttribute("name") || "default";
      const url = "../../../../../pages/loc/" + id + ".html";
      window.location.href = url;
    });

    const imageElement = document.createElement("img");
    imageElement.src = "../../../../../assets/textures/locations/loc" + id + ".png";
    imageElement.className = "locationbox-image";
    imageElement.textContent = name;
    imageElement.style.color = rarity.getHex();
    box.appendChild(imageElement);

    const nameElement = document.createElement("div");
    nameElement.className = "locationbox-title";
    nameElement.textContent = name;
    nameElement.style.color = rarity.getHex();
    box.appendChild(nameElement);

    const space1Element = document.createElement("div");
    space1Element.className = "locationbox-param";
    space1Element.style.color = "white";
    space1Element.innerHTML = "ㅤ";
    box.appendChild(space1Element);

    const rebirthElement = document.createElement("div");
    rebirthElement.className = "itembox-param";
    rebirthElement.style.color = "white";
    rebirthElement.innerHTML = "Перерождение: " + rebirth;
    box.appendChild(rebirthElement);

    const priceElement = document.createElement("div");
    priceElement.className = "itembox-param";
    priceElement.style.color = "white";
    priceElement.innerHTML = "Стоимость: " + price + " <img src='../../../../../assets/textures/icons/coin.png' class='icon' width='14'></img>";
    box.appendChild(priceElement);
    
    const descriptionElement = document.createElement("div");
    descriptionElement.className = "locationbox-param";
    descriptionElement.style.color = "white";
    descriptionElement.innerHTML = description;
    box.appendChild(descriptionElement);
  });
});

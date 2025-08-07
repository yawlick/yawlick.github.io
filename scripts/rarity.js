const Rarity = {
    COMMON: {
      name: "Обычный",
      nameDroppedWeapon: "Обычное",
      nameDroppedPet: "Обычного",
      hexColor: "#707070",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    RARE: {
      name: "Редкий",
      nameDroppedWeapon: "Редкое",
      nameDroppedPet: "Редкого",
      hexColor: "#2A66BD",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    EPIC: {
      name: "Эпический",
      nameDroppedWeapon: "Эпическое",
      nameDroppedPet: "Эпического",
      hexColor: "#5B27C9",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    LEGENDARY: {
      name: "Легендарный",
      nameDroppedWeapon: "Легендарное",
      nameDroppedPet: "Легендарного",
      hexColor: "#EFAC00",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    MYTHIC: {
      name: "Мифический",
      nameDroppedWeapon: "Мифического",
      nameDroppedPet: "Мифическое",
      hexColor: "#A91925",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    SECRET: {
      name: "Секретный",
      nameDroppedWeapon: "Секретное",
      nameDroppedPet: "Секретного",
      hexColor: "#37EFEF",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    OTHER: {
      name: "Остальное",
      nameDroppedWeapon: "Остальное",
      nameDroppedPet: "Остального",
      hexColor: "#22AE49",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    "ВСЕГДА": {
      name: "Всегда",
      hexColor: "#22AE49",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    "ТЬМА": {
      name: "Тьма",
      hexColor: "#6b6b6bff",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
    "КРОВАВАЯ ЛУНА": {
      name: "Кровавая луна",
      hexColor: "#ae2222ff",
      getHex: function() {
        return this.hexColor;
      },
      getName: function() {
        return this.name;
      },
    },
  };

document.querySelectorAll(".container").forEach(box => {
    const width = box.getAttribute("width");
    if (width) box.style.maxWidth = width + "px";
});

document.querySelectorAll(".fake-flex-container").forEach(box => {
  const width = box.getAttribute("width");
  if (width) box.style.maxWidth = width + "px";
});

document.querySelectorAll(".flex-container").forEach(box => {
    const width = box.getAttribute("width");
    if (width) box.style.maxWidth = width + "px";
});
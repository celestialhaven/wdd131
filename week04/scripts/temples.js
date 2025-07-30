
const temples = [

  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
    templeName: "Urdaneta Philippines Temple",
    location: "Urdaneta, Philippines",
    dedicated: "2024, April, 28",
    area: 32604,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874-main.jpg"
  },
  {
  templeName: "Salt Lake Temple",
  location: "Salt Lake, Utah",
  dedicated: "1893, April, 5",
  area: 382207,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
  templeName: "Kirtland Temple",
  location: "Kirtland, Ohio",
  dedicated: "27, March, 1836",
  area: 15000,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
  templeName: "Taipei Taiwan Temple",
  location: "Taipei, Temple",
  dedicated: "12, November, 1984",
  area: 9945,
  imageUrl:
  "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
];

function renderTemples(filteredTemples) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = ""; // Clear existing content

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.alt || temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initial full render
  renderTemples(temples);

  document.getElementById("home").addEventListener("click", () => {
    renderTemples(temples);
  });

  document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year < 1900;
    });
    renderTemples(oldTemples);
  });

  document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => {
      const year = parseInt(t.dedicated.split(",")[0]);
      return year > 2000;
    });
    renderTemples(newTemples);
  });

  document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
  });

  document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
  });
});

const container = document.getElementById("templeContainer");

container.addEventListener("mouseover", function (e) {
    const hoveredCard = e.target.closest(".temple-card");
    if (!hoveredCard) return;

    const cards = container.querySelectorAll(".temple-card");

    cards.forEach(card => {
        if (card !== hoveredCard) {
            card.classList.add("blur");
        }
    });
});

container.addEventListener("mouseout", function () {
    const cards = container.querySelectorAll(".temple-card");
    cards.forEach(card => card.classList.remove("blur"));
});


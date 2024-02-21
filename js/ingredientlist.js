window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const territory = urlParams.get("landscape_territory");
console.log("landscape_territory", territory);
let produktURL;

if (territory) {
  produktURL = `https://qqlcqmrveupfwluwoctv.supabase.co/rest/v1/foraging?landscape_territory=eq.${territory}`;

  console.log(territory);
} else {
  produktURL = "https://qqlcqmrveupfwluwoctv.supabase.co/rest/v1/foraging";
  console.log("normal");
}

let produkt_template;
let produktListe_container;

function init() {
  produkt_template = document.querySelector(".produkt_template");
  console.log("produkt_template", produkt_template);

  produktListe_container = document.querySelector(".ingredient-columns");
  console.log("produktListe_container", produktListe_container);

  fetch(produktURL, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbGNxbXJ2ZXVwZndsdXdvY3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQ3MzQsImV4cCI6MjAyMzMxMDczNH0.18SZnOZc5uAHdiIeonTl5cOenfcDIkL4VOhqSCsTFwM",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProdukts(json);
    });
}

function showProdukts(ProduktsJSON) {
  console.log(ProduktsJSON);
  let ProduktClone;

  ProduktsJSON.forEach((produkt) => {
    console.log("produkt", produkt);
    ProduktClone = produkt_template.cloneNode(true).content;
    ProduktClone.querySelector(".ig_img").src = `https://vildmadv2.vps.webdock.io/application/files${produkt.image_profil}`;
    ProduktClone.querySelector(".ig_img").alt = `${produkt.name}`;

    ProduktClone.querySelector(".ig_name").textContent = produkt.name;
    ProduktClone.querySelector(".ingredient_name").textContent = produkt.name;
    ProduktClone.querySelector(".ingredient_describtion").textContent = produkt.howPick;
    ProduktClone.querySelector(".sankested").textContent = produkt.WhereFind;
    ProduktClone.querySelector(".season").textContent = produkt.season;

    ProduktClone.querySelector(".ingredient_closeup").src = `https://vildmadv2.vps.webdock.io/application/files${produkt.image_second}`;
    ProduktClone.querySelector(".ingredient_closeup").alt = `Skov`;
    ProduktClone.querySelector(".ingredient_image").src = `https://vildmadv2.vps.webdock.io/application/files${produkt.image_profil}`;
    ProduktClone.querySelector(".ingredient_image").alt = `Skov`;

    console.log("er der næsten");

    ProduktClone.querySelector(".pop_up_knap").addEventListener("click", () => {
      console.log("clickB");
      document.querySelector(".modal").style.display = "block";
    });

    ProduktClone.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".modal").style.display = "none";
      console.log("tjek1");
    });
    ProduktClone.querySelector(".close2").addEventListener("click", () => {
      document.querySelector(".modal").style.display = "none";
      console.log("tjek2");
    });

    produktListe_container.appendChild(ProduktClone);
  });
}

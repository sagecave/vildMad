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

//   fetch(produktURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       showProdukts(json);
//     });
// }

function showProdukts(ProduktsJSON) {
  console.log(ProduktsJSON);
  let ProduktClone;

  ProduktsJSON.forEach((produkt) => {
    console.log("produkt", produkt);
    ProduktClone = produkt_template.cloneNode(true).content;
    ProduktClone.querySelector(".ig_img").src = `https://vildmadv2.vps.webdock.io/application/files${produkt.image_profil}`;
    ProduktClone.querySelector(".ig_img").alt = `${produkt.name}`;

    ProduktClone.querySelector(".ig_name").textContent = produkt.name;

    console.log("er der næsten");

    let modal = document.querySelector(".myModal");
    /*     let btn = ProduktClone.querySelectorAll(".pop_up_knap");
     */
    // Få knappen der åbner modal vinduet
    // let btn = document.querySelector(".pop_up_knap");

    // Få <span> elementet der lukker modal vinduet

    ProduktClone.querySelector(".pop_up_knap").addEventListener("click", () => {
      console.log("clickB");
      modal.style.display = "block";
    });

    ProduktClone.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".modal").style.display = "none";
      console.log("tjek1");
    });
    ProduktClone.querySelector(".close2").addEventListener("click", () => {
      document.querySelector(".modal").style.display = "none";
      console.log("tjek2");
    }); /* 
    ProduktClone.querySelector(".pop_up_knap").addEventListener("click", functionName()); */
    // Når brugeren klikker på knappen, åben modal vinduet
    // btn.onclick = function () {
    //   modal.style.display = "block";

    //   // Sæt data fra JSON i modal vinduet

    //   // document.getElementById("ingredient_name").innerHTML = jsonData.ingredient;
    //   // document.getElementById("ingredient_image").src = jsonData.images.ingredient;
    //   // console.log("tjek1");
    // };

    // // Når brugeren klikker på <span> (x), luk modal vinduet
    // span.onclick = function () {
    //   modal.style.display = "none";
    //   console.log("tjek2");
    // };

    // // Når brugeren klikker hvor som helst uden for modal vinduet, luk det
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //     console.log("tjek3");
    //   }
    // };

    // ProduktClone.querySelector(".produkt_category").textContent = produkt.category;

    // ProduktClone.querySelector(".link_produkt").href = `produkt.html?id=${produkt.id}`;

    produktListe_container.appendChild(ProduktClone);

    // let rabatForsvind
    // let stockForsvind
    // document.querySelector(".produkt_outOfStock").textContent = stockForsvind
    // document.querySelector(".produkt_rabt").textContent = rabatForsvind

    // if (produkt.discount <= 0){
    //     document.querySelector(".rabat_boks").classList.remove(".hidden_rabt")
    // }
  });
}

/* function buttonClick() {

}
 */
// let span = document.getElementsByClassName("close")[0];
// span.onclick = function spanClose() {
//   modal.style.display = "none";
//   console.log("tjek2");
// };

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://qqlcqmrveupfwluwoctv.supabase.co/rest/v1/foraging?${id}`;

function getProdukt() {
  fetch(url)
    .then((response) => response.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt, "id produkt");
  document.querySelector(".ingredient_name").textContent = produkt.name;
  document.querySelector(".ingredient_describtion").textContent = produkt.howPick;
  document.querySelector(".sankested").textContent = produkt.WhereFind;

  document.querySelector(".ingredient_closeup").src = `https://kea-alt-del.dk/t7/images/webp/1000/${produkt.id}.webp`;
  document.querySelector(".ingredient_closeup").alt = `Skov`;
  document.querySelector(".ingredient_image").src = `https://kea-alt-del.dk/t7/images/webp/1000/${produkt.id}.webp`;
  document.querySelector(".ingredient_image").alt = `Skov`;
}

getProdukt();

//https://qqlcqmrveupfwluwoctv.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbGNxbXJ2ZXVwZndsdXdvY3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQ3MzQsImV4cCI6MjAyMzMxMDczNH0.18SZnOZc5uAHdiIeonTl5cOenfcDIkL4VOhqSCsTFwM
// https://qqlcqmrveupfwluwoctv.supabase.co/rest/v1/foraging?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbGNxbXJ2ZXVwZndsdXdvY3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQ3MzQsImV4cCI6MjAyMzMxMDczNH0.18SZnOZc5uAHdiIeonTl5cOenfcDIkL4VOhqSCsTFwM

fetch("https://qqlcqmrveupfwluwoctv.supabase.co/rest/v1/landscape_territory", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbGNxbXJ2ZXVwZndsdXdvY3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQ3MzQsImV4cCI6MjAyMzMxMDczNH0.18SZnOZc5uAHdiIeonTl5cOenfcDIkL4VOhqSCsTFwM",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(foraging) {
  console.log(foraging);

  console.log("foraging", foraging);
  const categoryTemplate = document.querySelector("template");
  let categoryClone;

  const categoryContainer = document.querySelector(".cg_cardContainer");
  console.log("produktListeContainer", categoryContainer);

  foraging.forEach((landscape) => {
    categoryClone = categoryTemplate.cloneNode(true).content;
    categoryClone.querySelector(".categories_tb p").textContent = landscape.landscape_territory;
    categoryClone.querySelector(".link").href = `ingredientlist_com.html?landscape_territory=${landscape.landscape_territory}`;
    categoryContainer.appendChild(categoryClone);
  });
}

// const url = `https://kea-alt-del.dk/t7/api/products?categories=${category}`;
// const url = `https://kea-alt-del.dk/t7/api/products`;
// const url = `https://kea-alt-del.dk/t7/api/categories`;

// function getProdukt() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((json) => visProdukt(json));
// }

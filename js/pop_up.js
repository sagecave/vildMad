// Få modal vinduet
let modal = document.querySelector(".myModal");

// Få knappen der åbner modal vinduet
let btn = document.querySelector(".pop_up_knap");

// Få <span> elementet der lukker modal vinduet
let span = document.getElementsByClassName("close")[0];

// Når brugeren klikker på knappen, åben modal vinduet
btn.onclick = function () {
  console.log("tjek1");
  modal.style.display = "block";

  // Sæt data fra JSON i modal vinduet

  // document.getElementById("ingredient_name").innerHTML = jsonData.ingredient;
  // document.getElementById("ingredient_image").src = jsonData.images.ingredient;
  // console.log("tjek1");
};

// Når brugeren klikker på <span> (x), luk modal vinduet
span.onclick = function () {
  modal.style.display = "none";
  console.log("tjek2");
};

// Når brugeren klikker hvor som helst uden for modal vinduet, luk det
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("tjek3");
  }
};

// Få modal vinduet
var modal = document.getElementById("myModal");

// Få knappen der åbner modal vinduet
var btn = document.getElementById("pop_up_knap");

// Få <span> elementet der lukker modal vinduet
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// Når brugeren klikker på knappen, åben modal vinduet
btn.onclick = function () {
  modal.style.display = "block";
  // Sæt data fra JSON i modal vinduet
  document.getElementById("ingredient_name").innerHTML = jsonData.ingredient;
  document.getElementById("ingredient_image").src = jsonData.images.ingredient;
};

// Når brugeren klikker på <span> (x), luk modal vinduet
span.onclick = function () {
  modal.style.display = "none";
};

span2.onclick = function () {
  modal.style.display = "none";
};

// Når brugeren klikker hvor som helst uden for modal vinduet, luk det
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

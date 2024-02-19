fetch("url")
  .then((res) => res.json())
  .then(showSubcategories);

function showSubcategories(subcategories) {
  //looper og kalder showSubcategories
  ubcategories.forEach(showSubcategory);
}

function showSubcategory(subcategory) {
  console.log(subcategory);

  //fang template
  const template = document.querySelector("#subcategoriesTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").src = imagePath;
  copy.querySelector(".subtle").textContent = product.brandname;
  copy.querySelector(".product_articletype").textContent = product.articletype;
  copy.querySelector(".price span").textContent = product.price;
  copy.querySelector(".discounted span").textContent = product.discount;

  copy.querySelector(".subcategories_link").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}

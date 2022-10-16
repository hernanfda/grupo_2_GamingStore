window.addEventListener("load", function () {
  let searchIcon = document.querySelector(".search");
  let searchBar = document.querySelector(".form-buscador");
  let submitform = document.querySelector(".formSearch");
  let main = document.querySelector('main')
  let section = document.querySelector('section')
  console.log(section)

  searchIcon.addEventListener("click", (event) => {
    searchBar.style.display = "block";
    searchBar.style.zIndex = 9999;
  });
  searchBar.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value && value.trim().length >= 3) {
      console.log("esto buscaste " + value);
      let searchform = (document.querySelector(".formSearch").action = "/products/search/" + value);
      console.log(searchform);
      console.log(submitform);
    }
  });
  if(main){ main.addEventListener("click", (e) => {
    if (searchBar.style.display == "block") {
      searchBar.style.display = "none";
    }
  });}
 
  section.addEventListener("click", (e) => {
    if (searchBar.style.display == "block") {
      searchBar.style.display = "none";
    }
  });
});

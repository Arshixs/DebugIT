function changeColor(element) {
  var favoriteText = document.getElementById(element);
  favoriteText.classList.toggle("clicked");
  const button = document.getElementById("watch-list-button")
  button.classList.toggle("clicked");
  if(favoriteText.textContent==="Added to the List"){
    favoriteText.innerText = "Add to the List";
    button.innerText = "Add to the List";
  }
  else{
    favoriteText.innerText = "Added to the List";
    button.innerText = "Added to the List";
  }
}
function changeColor2(element) {
  var favoriteText = document.getElementById(element);
  favoriteText.classList.toggle("clicked");
  if(favoriteText.textContent==="Added to the Favorite"){
    favoriteText.innerText = "Add to the Favorite"
  }
  else{
    favoriteText.innerText = "Added to the Favorite"
  }
}
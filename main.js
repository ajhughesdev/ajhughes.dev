function mobileNav() {
  let x = document.getElementById('myLinks');
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

document.querySelector('#copyright-year').innerText = new Date().getFullYear();
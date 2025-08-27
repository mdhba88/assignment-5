/* heart counter function creation */
// heart count and visualization element
let heartVisual = document.getElementById("heartVisual");

// heart clickable icon select
let heartClick = document.querySelectorAll(".heartClick");

// click event run in heart icon
for (let heart of heartClick) {
  heart.addEventListener("click", function () {
    // elements innerText convert to the number
    let heartUpdate = parseInt(heartVisual.innerText);
    // will increase by 1
    heartVisual.innerText = heartUpdate + 1;
  });
}

/*  */

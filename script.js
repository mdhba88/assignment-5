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

//----------------------------------------------------------------------------------------------------

/* national emergency call function creation */
// home sections coin field target
let coinField = document.getElementById("coinField");
let coinElementText = coinField.innerText;
let coinInNumber = parseInt(coinElementText);

// national emergency cards subtitle target
let nationalEmergencySubTitle = document.getElementById(
  "nationalEmergencySubTitle"
);
// national emergency numbers target
let nationalEmergencyNumber = document.getElementById(
  "nationalEmergencyNumber"
);
// national emergency call button target
let callBtn = document.getElementById("nationalEmergencyCall");

// javascript locale time showing target
let nowTime = new Date();
let localTime = nowTime.toLocaleTimeString();

// showing history elements target
const newHistory = document.getElementById("newHistory");

// national emergency events
callBtn.addEventListener("click", function () {
  // 1st, coin check
  if (coinInNumber >= 20) {
    coinInNumber -= 20;
    coinField.innerText = coinInNumber;
  } else if (coinInNumber < 20) {
    alert("Sorry, You have not enough coin!");
    return;
  }

  // 2nd, title and number alert
  const nationalTitle = nationalEmergencySubTitle.innerText;
  const nationalNumber = nationalEmergencyNumber.innerText;
  alert(`${nationalTitle} ${nationalNumber}`);

  // 3rd, create element
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${nationalEmergencySubTitle.textContent}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${nationalEmergencyNumber.textContent}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
  newHistory.appendChild(newDiv);
});

//----------------------------------------------------------------------------------------------------

/* copy activities function creation */
// copy counter showing element target
const copyShowingElement = document.querySelector(".copyShowingElement");

// copy text button element target
const copyTextBtn = document.querySelectorAll(".copyTextBtn");

// click event run in copy text button
for (let copyBtn of copyTextBtn) {
  copyBtn.addEventListener("click", function () {
    // elements innerText convert to the number
    const copyTextUpdate = parseInt(copyShowingElement.innerText);
    // will increase by 1
    copyShowingElement.innerText = copyTextUpdate + 1;
  });
}

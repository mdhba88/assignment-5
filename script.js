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

//----------------------------------------------------------------------------------------------------

/* national emergency call function creation */
// national emergency events
document
  .getElementById("nationalEmergencyCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // national emergency subtitle target
    let nationalEmergencySubTitle = document.getElementById(
      "nationalEmergencySubTitle"
    );
    // national emergency numbers target
    let nationalEmergencyNumber = document.getElementById(
      "nationalEmergencyNumber"
    );

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = nationalEmergencySubTitle.innerText;
    const callNumber = nationalEmergencyNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* police helpline call function creation */
// police helpline events
document
  .getElementById("policeHelplineCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // police helpline subtitle target
    let policeHelplineSubTitle = document.getElementById(
      "policeHelplineSubTitle"
    );
    // police helpline numbers target
    let policeHelplineNumber = document.getElementById("policeHelplineNumber");

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = policeHelplineSubTitle.innerText;
    const callNumber = policeHelplineNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* fire service call function creation */
// fire service events
document
  .getElementById("fireServiceCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // fire service subtitle target
    let fireServiceSubTitle = document.getElementById("fireServiceSubTitle");
    // fire service numbers target
    let fireServiceNumber = document.getElementById("fireServiceNumber");

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = fireServiceSubTitle.innerText;
    const callNumber = fireServiceNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* ambulance call function creation */
// ambulance events
document.getElementById("ambulanceCall").addEventListener("click", function () {
  // home sections coin field target
  let coinField = document.getElementById("coinField");
  let coinElementText = coinField.innerText;
  let coinInNumber = parseInt(coinElementText);

  // ambulance subtitle target
  let ambulanceSubTitle = document.getElementById("ambulanceSubTitle");
  // ambulance numbers target
  let ambulanceNumber = document.getElementById("ambulanceNumber");

  // javascript locale time showing target
  let nowTime = new Date();
  let localTime = nowTime.toLocaleTimeString();

  // showing history elements target
  const newHistory = document.getElementById("newHistory");
  // 1st, coin check
  if (coinInNumber >= 20) {
    coinInNumber -= 20;
    coinField.innerText = coinInNumber;
  } else if (coinInNumber < 20) {
    alert("Sorry, You have not enough coin!");
    return;
  }

  // 2nd, title and number alert
  const elementTitle = ambulanceSubTitle.innerText;
  const callNumber = ambulanceNumber.innerText;
  alert(`${elementTitle} ${callNumber}`);

  // 3rd, create element
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
  newHistory.appendChild(newDiv);

  // history clear event
  const clearButton = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", function () {
    newDiv.innerHTML = "";
  });
});

//----------------------------------------------------------------------------------------------------

/* woman child helpline function creation */
// woman child helpline events
document
  .getElementById("womanChildCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // woman child helpline subtitle target
    let womanChildSubTitle = document.getElementById("womanChildSubTitle");
    // woman child helpline numbers target
    let womanChildNumber = document.getElementById("womanChildNumber");

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = womanChildSubTitle.innerText;
    const callNumber = womanChildNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* anti corruption helpline function creation */
// anti corruption helpline events
document
  .getElementById("antiCorruptionCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // anti corruption helpline subtitle target
    let antiCorruptionSubTitle = document.getElementById(
      "antiCorruptionSubTitle"
    );
    // anti corruption helpline numbers target
    let antiCorruptionNumber = document.getElementById("antiCorruptionNumber");

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = antiCorruptionSubTitle.innerText;
    const callNumber = antiCorruptionNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* electricity helpline function creation */
// electricity helpline events
document
  .getElementById("electricityCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // electricity helpline subtitle target
    let electricitySubTitle = document.getElementById("electricitySubTitle");
    // electricity helpline numbers target
    let electricityNumber = document.getElementById("electricityNumber");

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = electricitySubTitle.innerText;
    const callNumber = electricityNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

//----------------------------------------------------------------------------------------------------

/* brac helpline function creation */
// brac helpline events
document.getElementById("bracCall").addEventListener("click", function () {
  // home sections coin field target
  let coinField = document.getElementById("coinField");
  let coinElementText = coinField.innerText;
  let coinInNumber = parseInt(coinElementText);

  // brac helpline subtitle target
  let bracSubTitle = document.getElementById("bracSubTitle");
  // brac helpline numbers target
  let bracNumber = document.getElementById("bracNumber");

  // javascript locale time showing target
  let nowTime = new Date();
  let localTime = nowTime.toLocaleTimeString();

  // showing history elements target
  const newHistory = document.getElementById("newHistory");
  // 1st, coin check
  if (coinInNumber >= 20) {
    coinInNumber -= 20;
    coinField.innerText = coinInNumber;
  } else if (coinInNumber < 20) {
    alert("Sorry, You have not enough coin!");
    return;
  }

  // 2nd, title and number alert
  const elementTitle = bracSubTitle.innerText;
  const callNumber = bracNumber.innerText;
  alert(`${elementTitle} ${callNumber}`);

  // 3rd, create element
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
  newHistory.appendChild(newDiv);

  // history clear event
  const clearButton = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", function () {
    newDiv.innerHTML = "";
  });
});

//----------------------------------------------------------------------------------------------------

/* bangladesh railway helpline function creation */
// bangladesh railway helpline events
document
  .getElementById("bangladeshRailwayCall")
  .addEventListener("click", function () {
    // home sections coin field target
    let coinField = document.getElementById("coinField");
    let coinElementText = coinField.innerText;
    let coinInNumber = parseInt(coinElementText);

    // bangladesh railway helpline subtitle target
    let bangladeshRailwaySubTitle = document.getElementById(
      "bangladeshRailwaySubTitle"
    );
    // bangladesh railway helpline numbers target
    let bangladeshRailwayNumber = document.getElementById(
      "bangladeshRailwayNumber"
    );

    // javascript locale time showing target
    let nowTime = new Date();
    let localTime = nowTime.toLocaleTimeString();

    // showing history elements target
    const newHistory = document.getElementById("newHistory");
    // 1st, coin check
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You have not enough coin!");
      return;
    }

    // 2nd, title and number alert
    const elementTitle = bangladeshRailwaySubTitle.innerText;
    const callNumber = bangladeshRailwayNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // 3rd, create element
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <div
            class="flex items-center justify-between p-2 gap-2 bg-[#FAFAFA] rounded-lg"
          >
            <div class="flex flex-col">
              <!-- card title -->
              <p class="text-sm font-semibold hindMadurai gap-1">
                ${elementTitle}
              </p>
              <!-- phone number -->
              <span class="text-sm roboto font-normal text-[#5C5C5C]">${callNumber}</span>
            </div>

            <div>
              <!-- calling time -->
              <p class="hindMadurai text-xs font-medium">${localTime}</p>
            </div>
        </div>
  `;
    newHistory.appendChild(newDiv);

    // history clear event
    const clearButton = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", function () {
      newDiv.innerHTML = "";
    });
  });

/* heart reuseable function for heart click and visualization */
// heart "visual element" and "icon click element" target and event run
function heartVisualAndClick(heartVisualId, heartClickId) {
  // heart visual element target
  const heartVisualBtn = document.getElementById(heartVisualId);
  // heart icon click element target
  const heartIconBtn = document.getElementById(heartClickId);

  // heart event run
  heartIconBtn.addEventListener("click", function () {
    const heartVisualNumber = parseInt(heartVisualBtn.innerText);
    heartVisualBtn.innerText = heartVisualNumber + 1;
  });
}

// heart visual element id and heart icon click element id as an arguments
// heart no: 1 (national emergency card)
heartVisualAndClick("heartVisual", "heart1");
// heart no: 2 (police helpline card)
heartVisualAndClick("heartVisual", "heart2");
// heart no: 3 (fire service card)
heartVisualAndClick("heartVisual", "heart3");
// heart no: 4 (fire service card)
heartVisualAndClick("heartVisual", "heart4");
// heart no: 5 (fire service card)
heartVisualAndClick("heartVisual", "heart5");
// heart no: 6 (fire service card)
heartVisualAndClick("heartVisual", "heart6");
// heart no: 7 (fire service card)
heartVisualAndClick("heartVisual", "heart7");
// heart no: 8 (fire service card)
heartVisualAndClick("heartVisual", "heart8");
// heart no: 9 (fire service card)
heartVisualAndClick("heartVisual", "heart9");

//----------------------------------------------------------------------------------------------------

/* call numbers click and showing "number copied" */
function copyNumberVisual(numberCopyVisualId) {
  // copy counter visualizing element target
  const copyVisualElement = document.getElementById(numberCopyVisualId);

  copyVisualElement.addEventListener("click", function () {
    alert("Number Copied");
  });
}

// number visual element id as an arguments
// card no: 1 (national emergency card)
copyNumberVisual("nationalEmergencyNumber");
// card no: 2 (police helpline card)
copyNumberVisual("policeHelplineNumber");
// card no: 3 (fire service card)
copyNumberVisual("fireServiceNumber");
// card no: 4 (fire service card)
copyNumberVisual("ambulanceNumber");
// card no: 5 (fire service card)
copyNumberVisual("womanChildNumber");
// card no: 6 (fire service card)
copyNumberVisual("antiCorruptionNumber");
// card no: 7 (fire service card)
copyNumberVisual("electricityNumber");
// card no: 8 (fire service card)
copyNumberVisual("bracNumber");
// card no: 9 (fire service card)
copyNumberVisual("bangladeshRailwayNumber");

//----------------------------------------------------------------------------------------------------

/* copy reuseable function for copy visualization element and copy buttons click */
function copyVisualAndClick(copyVisualId, copyClickId, callNumberId) {
  // copy counter visualizing element target
  const copyVisualElement = document.getElementById(copyVisualId);

  // copy text button element target
  const copyClickButton = document.getElementById(copyClickId);
  // copy text button element target
  const callNumberElement = document.getElementById(callNumberId);
  const callNumberText = callNumberElement.innerText;

  copyClickButton.addEventListener("click", function () {
    alert(`Number copied: ${callNumberText}`);
    copyVisualInNumber = parseInt(copyVisualElement.innerText);
    copyVisualElement.innerText = copyVisualInNumber + 1;
  });
}

// copy visual element id and copy button click element id as an arguments
// copy no: 1 (national emergency card)
copyVisualAndClick("copyField", "copy1", "nationalEmergencyNumber");
// copy no: 2 (police helpline card)
copyVisualAndClick("copyField", "copy2", "policeHelplineNumber");
// copy no: 3 (fire service card)
copyVisualAndClick("copyField", "copy3", "fireServiceNumber");
// copy no: 4 (fire service card)
copyVisualAndClick("copyField", "copy4", "ambulanceNumber");
// copy no: 5 (fire service card)
copyVisualAndClick("copyField", "copy5", "womanChildNumber");
// copy no: 6 (fire service card)
copyVisualAndClick("copyField", "copy6", "antiCorruptionNumber");
// copy no: 7 (fire service card)
copyVisualAndClick("copyField", "copy7", "electricityNumber");
// copy no: 8 (fire service card)
copyVisualAndClick("copyField", "copy8", "bracNumber");
// copy no: 9 (fire service card)
copyVisualAndClick("copyField", "copy9", "bangladeshRailwayNumber");

//----------------------------------------------------------------------------------------------------

// coin decrease, card subtitle, card number, added the new history, and clear history activities reuseable function
// home sections coin visualize element target
let coinField = document.getElementById("coinField");
let coinInNumber = parseInt(coinField.innerText);

// reuseable function
function allBtnCoinUseHistoryAdded(
  callBtn,
  cardSubTitleId,
  callingNumberId,
  newHistoryAddedFieldId,
  clearHistoryId
) {
  // cards subtitle target
  let cardSubTitle = document.getElementById(cardSubTitleId);
  // cards numbers target
  let callingNumber = document.getElementById(callingNumberId);

  // cards call button target
  const callBtnElement = document.getElementById(callBtn);

  // javascript local time showing target
  let nowTime = new Date();
  let localTime = nowTime.toLocaleTimeString();

  // showing history elements target
  const newHistoryAddedFieldElement = document.getElementById(
    newHistoryAddedFieldId
  );

  // history clear button target
  const clearButton = document.getElementById(clearHistoryId);

  // call button click event run
  callBtnElement.addEventListener("click", function () {
    // (1st), coin check and calculating
    if (coinInNumber >= 20) {
      coinInNumber -= 20;
      coinField.innerText = coinInNumber;
    } else if (coinInNumber < 20) {
      alert("Sorry, You do not have enough coin!");
      return;
    }

    // (2nd), title and number alert
    const elementTitle = cardSubTitle.innerText;
    const callNumber = callingNumber.innerText;
    alert(`${elementTitle} ${callNumber}`);

    // (3rd), create element
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
    newHistoryAddedFieldElement.appendChild(newDiv);
  });

  // (4th), history clear button event
  clearButton.addEventListener("click", function () {
    newHistoryAddedFieldElement.innerHTML = "";
  });
}

// coin field id, card subtitle id, cards number id, activities add in new history sections id, history clear button id pass in to the reuseable function as an arguments

// card-1, national emergency cards
allBtnCoinUseHistoryAdded(
  "nationalEmergencyCall",
  "nationalEmergencySubTitle",
  "nationalEmergencyNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-2, police helpline cards
allBtnCoinUseHistoryAdded(
  "policeHelplineCall",
  "policeHelplineSubTitle",
  "policeHelplineNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-3, fire service cards
allBtnCoinUseHistoryAdded(
  "fireServiceCall",
  "fireServiceSubTitle",
  "fireServiceNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-4, ambulance service cards
allBtnCoinUseHistoryAdded(
  "ambulanceCall",
  "ambulanceSubTitle",
  "ambulanceNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-5, woman & child helpline cards
allBtnCoinUseHistoryAdded(
  "womanChildCall",
  "womanChildSubTitle",
  "womanChildNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-6, anti corruption helpline cards
allBtnCoinUseHistoryAdded(
  "antiCorruptionCall",
  "antiCorruptionSubTitle",
  "antiCorruptionNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-7, electricity helpline cards
allBtnCoinUseHistoryAdded(
  "electricityCall",
  "electricitySubTitle",
  "electricityNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-8, brac helpline cards
allBtnCoinUseHistoryAdded(
  "bracCall",
  "bracSubTitle",
  "bracNumber",
  "newHistoryAddedField",
  "clearBtn"
);
// card-9, bangladesh railway helpline cards
allBtnCoinUseHistoryAdded(
  "bangladeshRailwayCall",
  "bangladeshRailwaySubTitle",
  "bangladeshRailwayNumber",
  "newHistoryAddedField",
  "clearBtn"
);

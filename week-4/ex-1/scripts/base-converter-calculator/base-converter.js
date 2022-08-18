let isBaseConverterOperationsShow = false;
let isTemperatureClicked = false;

let baseConverterCalculator = document.querySelector("#base-converter-calculator");
let baseConverterOperationsButtonElement = document.createElement("button");
baseConverterOperationsButtonElement.classList.add("action--converter-operations-button");
baseConverterOperationsButtonElement.textContent = "operations";

let baseConverterClassicButtonElement = document.createElement("button");
baseConverterClassicButtonElement.classList.add("action--converter-type-button");
baseConverterClassicButtonElement.textContent = "classic";


let baseConverterTemperatureButtonElement = document.createElement("button");
baseConverterTemperatureButtonElement.classList.add("action--data-converter-temperature");
baseConverterTemperatureButtonElement.textContent = "T";

let baseConverterMoneyButtonElement = document.createElement("button");
baseConverterMoneyButtonElement.classList.add("action--data-converter-money");
baseConverterMoneyButtonElement.textContent = "$";

console.log(baseConverterCalculator);

baseConverterCalculator.addEventListener("click", () => {

    historyContainer.appendChild(baseConverterOperationsButtonElement);
    historyContainer.appendChild(baseConverterClassicButtonElement);
    historyContainer.appendChild(baseConverterTemperatureButtonElement);
    historyContainer.appendChild(baseConverterMoneyButtonElement);
    isBaseConverterOperationsShow = true;
    baseConverterCalculator.disabled = false;
    operationalCalculatorButton.disabled = true;
    
    baseConverterTemperatureButtonElement.addEventListener("cilck", () => {
        isTemperatureClicked = true;
        temperatureButton = document.querySelector(".action--data-converter-temperature");
        console.log(temperatureButton);
        let baseOperationsSectionElement = document.querySelector(".base-operations");

        console.log(baseOperationsSectionElement);
        let temperatureResetBackUpContainer = document.querySelector(".reset-back-up-container");
        let temperatureReverseClassicContainer = document.querySelector(".reverse-classic-container");
        let temperatureConverterContainer = document.querySelector("#reset-back-up-container");



        let temperatureButtonElement = document.createElement("button");
        let temperatureResetButtonElement = document.createElement("button");

        temperatureButtonElement.classList.add("operator");
        temperatureButtonElement.setAttribute("id", "operation--reset");
        temperatureButtonElement.textContent = "C";

        temperatureResetButtonElement.classList.add("operator");
        temperatureResetButtonElement.setAttribute("id", "operation--backup");
        temperatureResetButtonElement.textContent = "F";


        temperatureResetBackUpContainer.appendChild(temperatureButtonElement);
        temperatureResetBackUpContainer.appendChild(temperatureResetButtonElement);

        temperatureConverterContainer.appendChild(baseConverterTemperatureButtonElement);
        baseConverterMoneyButtonElement.setAttribute("id", "temperature-container");
        temperatureConverterContainer.appendChild(baseConverterMoneyButtonElement);
        /* <button class="action--converter-reverse-button">reverse</button>
         <button class="action--converter-type-button">classic</button>*/


        let temperatureReverseButtonElement = document.createElement("button");
        temperatureReverseButtonElement.classList.add("action--converter-reverse-button");
        temperatureReverseButtonElement.textContent = "reverse";

        let temperatureClassicButtonElement = document.createElement("button");
        temperatureClassicButtonElement.classList.add("action--converter-type-button");
        temperatureClassicButtonElement.textContent = "classic";

        temperatureReverseClassicContainer.appendChild(temperatureReverseButtonElement);
        temperatureReverseClassicContainer.appendChild(temperatureClassicButtonElement);

        baseOperationsSectionElement.display = "none";

        baseOperationsSectionElement.appendChild(temperatureResetBackUpContainer);
        baseOperationsSectionElement.appendChild(temperatureReverseClassicContainer);
        baseOperationsSectionElement.appendChild(temperatureConverterContainer);
    })
});
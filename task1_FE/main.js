console.log('started');
let firstBit;
let naiBitValue;
let screeningBitValue;
let presentationBitValue;
let numberingPlanBitValue;
let routingBitValue;
const numberElement = document.getElementById('numberId');
const convertedElement = document.getElementById('convertedId');

/**
 * models
 */
let NAI = {
    national: '0001',
    unknown: '0010',
    nationalSignificant: '0011',
    international: '0100'
};

let screening = {
    notVerified: '00',
    verifiedAndPassed: '01',
    verifiedAndField: '10',
    networkProvided: '11',
};

let presentation = {
    allowed1: '00',
    restricted: '01',
    notAvailable: '11'

};

let numberingPlan = {
    isdn: '001',
    daya: '011',
    telex: '100'
};

let routing = {
    allowed2: '0',
    notAllowed: '1'
};

/**
 * возвращает выбранное значение группы радиокнопок
 * @param elementName - имя группы радиокнопок
 * @returns {*} - возвращает значение выбранной радиокнопки
 */
function getSelectedRadioValue(elementName) {
    let radios = document.getElementsByName(elementName);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
}

numberElement.oninput = function () {
    let inputValue = numberElement.value;
    console.log('current value: ' + inputValue);
    if (inputValue % 2 === 0) {
        firstBit = '0000';
    } else {
        firstBit = '1000';
    }
    convertNumber();
}

// обработка NAI
let groupNai = document.getElementById('naiGroupId');

function calculateNai() {
    let selectedValue = getSelectedRadioValue('nai');
    console.log(selectedValue);
    for (let key in NAI) {
        if (selectedValue === key) {
            naiBitValue = NAI[key];
        }
    }
    convertNumber();
}

groupNai.onclick = calculateNai;

// обработка screening
let groupScreening = document.getElementById('screeningGroupId');

function calculateScreening() {
    let selectedValue = getSelectedRadioValue('screening');
    console.log(selectedValue);
    for (let key in screening) {
        if (selectedValue === key) {
            screeningBitValue = screening[key];
        }
    }
    convertNumber();
}

groupScreening.onclick = calculateScreening;

let groupPresentation = document.getElementById('presentationGroupId');

function calculatePresentation() {
    let selectedValue = getSelectedRadioValue('presentation');
    console.log(selectedValue);
    for (let key in presentation) {
        if (selectedValue === key) {
            presentationBitValue = presentation[key];
        }
    }
    convertNumber();
}

groupPresentation.onclick = calculatePresentation;

let groupNumberingPlan = document.getElementById('numberingPlanGroupId');

function calculateNumberingPlan() {
    let selectedValue = getSelectedRadioValue('numberingPlan');
    console.log(selectedValue);
    for (let key in numberingPlan) {
        if (selectedValue === key) {
            numberingPlanBitValue = numberingPlan[key];
        }
    }
    convertNumber();
}

groupNumberingPlan.onclick = calculateNumberingPlan;

let groupRouting = document.getElementById('routingGroupId');

function calculateRouting() {
    let selectedValue = getSelectedRadioValue('routing');
    console.log(selectedValue);
    for (let key in routing) {
        if (selectedValue === key) {
            routingBitValue = routing[key];
        }
    }
    convertNumber();
}

groupRouting.onclick = calculateRouting;

function convertNumber() {
    if (numberElement.value) {
        convertedElement.value = ("H'" +
            parseInt(firstBit, 2).toString(16) +
            parseInt(naiBitValue, 2).toString(16) +
            parseInt(screeningBitValue + presentationBitValue, 2).toString(16) +
            parseInt(numberingPlanBitValue + routingBitValue, 2).toString(16)).toUpperCase();
    }
}

calculateNai();
calculateScreening();
calculatePresentation();
calculateNumberingPlan();
calculateRouting();

console.log('finished');

import {GeneratedName} from "./models/GeneratedName.js";
import {loadPage} from "./globalScript";

let selectedGender: string = 'Any';
let includeLastName: boolean = true;
let genderInputs: JQuery<HTMLElement> = $('.gender-input');

let genderInputArray: Element[] = Array.from(genderInputs);
let generateButton: JQuery<HTMLElement> = $("#generate-name-button-div");
let nationalityInput: JQuery<HTMLElement> = $('#nationality-input');
let similarNamesInput: JQuery<HTMLElement> = $('#similar-names-input');
let dissimilarNamesInput: JQuery<HTMLElement> = $('#dissimilar-names-input');
let complexityInput: JQuery<HTMLElement> = $('#complexity-input');
let uniquenessInput: JQuery<HTMLElement> = $('#uniqueness-input');
let lastNameInput: JQuery<HTMLElement> = $('#last-name-input');
let numberOfNamesInput: JQuery<HTMLElement> = $('#number-of-names-input');
let generatedNamesSection: JQuery<HTMLElement> = $('#generated-names-section');
let loadingWheelDiv: JQuery<HTMLElement> = $('#loading-wheel-div');
//=============================-Server-Functions-=============================
async function getNamesFromServer(): Promise<any> {
    let preResponse: Response = await fetch('/generator/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gender: selectedGender,
            nationality: nationalityInput.val(),
            similarNames: similarNamesInput.val(),
            dissimilarNames: dissimilarNamesInput.val(),
            lastName: lastNameInput.val(),
            includeLastName: includeLastName,
            numNames: numberOfNamesInput.val() as number,
            nameComplexity: complexityInput.val() as number,
            nameUniqueness: uniquenessInput.val() as number
        })
    })
    let response = await preResponse.json();
    return response;
}
function updateSelectedGender(): void {
    genderInputArray.forEach((genderInput: Element): void => {
        if ((genderInput as HTMLInputElement).checked) {
            selectedGender = (genderInput as HTMLInputElement).id;
        }
    });
}
type SimpleName = {
    name: string
}
function displayNamesFromServer(): void {
    generatedNamesSection.empty();
    getNamesFromServer().then(response => {
        console.log(response.names);
        response.names.names.forEach((name: SimpleName): void => {
            console.log(name.name);
            let nameString: string = name.name.replace(' ', '\n');
            let generatedName: GeneratedName = new GeneratedName(nameString);
            let generatedNameBubble: HTMLElement = generatedName.getHtml();
            // Add some randomness to the vertical position
            applyRandomFloat($(generatedNameBubble));
            generatedNamesSection.append(generatedNameBubble);
        });
    }).catch(error => {
        console.error('Error: ', error)
    });
}
function applyRandomFloat(generatedNameBubble: JQuery<HTMLElement>): void {
    let verticalOffset: number = Math.floor(Math.random() * 80) - 40; // gives a random number between -20 and 20
    let randomFloatType: number = Math.floor(Math.random() * 2) + 1;
    console.log(randomFloatType);
    if (randomFloatType === 1) {
        generatedNameBubble.css('animation', 'float 4s ease-in-out infinite');
    } else {
        generatedNameBubble.css('animation', 'negative-float 4s ease-in-out infinite');
    }
    generatedNameBubble.css('transform', `translateY(${verticalOffset}px)`);
}
function generateNamesSequence(): void {
    hideElement(generateButton);
    showElement(loadingWheelDiv);
    displayNamesFromServer();
    hideElement(loadingWheelDiv);
    showElement(generateButton);
}
function showElement(element: JQuery<HTMLElement>): void {
    element.css('display', 'flex');
}
function hideElement(element: JQuery<HTMLElement>): void {
    element.hide();
}

let genderSelectorDropdown: JQuery<HTMLElement> = $('#gender-selector-dropdown');
let genderItemDivs: JQuery<HTMLElement> = $('.gender-item-div');
let genderChoiceText: JQuery<HTMLElement> = $('#gender-choice');
let currentGenderChoice: string = 'Any';

function toggleGenderSelectorOpening(): void {
    if (genderSelectorDropdown.hasClass('opened-dropdown')) {
        genderSelectorDropdown.addClass('closed-dropdown');
    } else {
        genderSelectorDropdown.removeClass('closed-dropdown');
    }
    if (!genderSelectorDropdown.hasClass('closed-dropdown')) {
        genderSelectorDropdown.addClass('opened-dropdown');
    } else {
        genderSelectorDropdown.removeClass('opened-dropdown');
    }
}
function selectGenderChoice() {
    currentGenderChoice = $(this).find('.gender-item-text').text();
    genderChoiceText.text(currentGenderChoice);
}

let shouldLoadPage: boolean = loadPage(document.body, 'generator');
if (shouldLoadPage) {
    generateButton.on("click", generateNamesSequence);
    genderInputs.on("click", updateSelectedGender);
    genderSelectorDropdown.on("click", toggleGenderSelectorOpening);
    genderItemDivs.on("click", selectGenderChoice);
}
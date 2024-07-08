import {GeneratedName} from "./models/GeneratedName.js";

let genderInputs: HTMLCollectionOf<Element> = document.getElementsByClassName('gender-input');
let genderInputArray: Element[] = Array.from(genderInputs);
let selectedGender: string = 'Any';
function updateSelectedGender(): void {
    genderInputArray.forEach((genderInput: Element): void => {
        if ((genderInput as HTMLInputElement).checked) {
            selectedGender = (genderInput as HTMLInputElement).id;
        }
    });
}
genderInputArray.forEach((genderInput: Element): void => {
    genderInput.addEventListener("click", updateSelectedGender);
});
let generateButton: HTMLElement = document.getElementById("generate-name-button-div");
let nationalityInput: HTMLElement = document.getElementById('nationality-input');
let similarNamesInput: HTMLElement = document.getElementById('similar-names-input');
let dissimilarNamesInput: HTMLElement = document.getElementById('dissimilar-names-input');
let complexityInput: HTMLElement = document.getElementById('complexity-input');
let uniquenessInput: HTMLElement = document.getElementById('uniqueness-input');
let lastNameInput: HTMLElement = document.getElementById('last-name-input');
let includeLastName: boolean = true;
let numberOfNamesInput: HTMLElement = document.getElementById('number-of-names-input');
async function getNamesFromServer(): Promise<any> {
    let preResponse: Response = await fetch('/generator/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gender: selectedGender,
            nationality: (nationalityInput as HTMLInputElement).value,
            similarNames: (similarNamesInput as HTMLInputElement).value,
            dissimilarNames: (dissimilarNamesInput as HTMLInputElement).value,
            lastName: (lastNameInput as HTMLInputElement).value,
            includeLastName: includeLastName,
            numNames: Number((numberOfNamesInput as HTMLInputElement).value),
            nameComplexity: Number((complexityInput as HTMLInputElement).value),
            nameUniqueness: Number((uniquenessInput as HTMLInputElement).value)
        })
    })
    let response = await preResponse.json();
    return response;
}
let generatedNamesSection: HTMLElement = document.getElementById('generated-names-section');
function displayNamesFromServer(): void {
    generatedNamesSection.innerHTML = '';
    getNamesFromServer().then(response => {
        console.log(response.names);
        response.names.names.forEach((name: {name: string}): void => {
            console.log(name.name);
            let nameString: string = name.name.replace(' ', '\n');

            let generatedName: GeneratedName = new GeneratedName(nameString);
            let generatedNameBubble: HTMLElement = document.createElement('div');
            generatedNameBubble.classList.add('generated-name-bubble');
            // Add some randomness to the vertical position
            let verticalOffset = Math.floor(Math.random() * 80) - 40; // gives a random number between -20 and 20
            let randomFloatType = Math.floor(Math.random() * 2) + 1;
            console.log(randomFloatType);
            if (randomFloatType === 1) {
                generatedNameBubble.style.animation = 'float 4s ease-in-out infinite';
            } else {
                generatedNameBubble.style.animation = 'negative-float 4s ease-in-out infinite';
            }
            generatedNameBubble.style.transform = `translateY(${verticalOffset}px)`;
            generatedNameBubble.innerHTML = generatedName.getHtmlString();
            generatedNamesSection.appendChild(generatedNameBubble);
        });
    }).catch(error => {
        console.error('Error: ', error)
    })
}
let loadingWheelDiv: HTMLElement = document.getElementById('loading-wheel-div');
function generateNamesSequence(): void {
    hideElement(generateButton);
    showElement(loadingWheelDiv);
    displayNamesFromServer();
    hideElement(loadingWheelDiv);
    showElement(generateButton);
}
function showElement(element: HTMLElement): void {
    element.style.display = 'flex';
}
function hideElement(element: HTMLElement): void {
    element.style.display = 'none';
}
generateButton.addEventListener("click", generateNamesSequence);
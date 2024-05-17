let generatedNameText = document.getElementById("generated-name");
let genderInputs: HTMLCollectionOf<Element> = document.getElementsByClassName('gender-input');
let genderInputArray: Element[] = Array.from(genderInputs);
let selectedGender: string = 'Any';
function updateSelectedGender(): void {
    genderInputArray.forEach((genderInput: Element) => {
        if ((genderInput as HTMLInputElement).checked) {
            selectedGender = (genderInput as HTMLInputElement).id;
        }
    });
}
genderInputArray.forEach((genderInput: Element) => {
    genderInput.addEventListener("click", updateSelectedGender);
});
let generateButton: HTMLElement = document.getElementById("generate-name-button");
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
function displayNamesFromServer(): void {
    getNamesFromServer().then(response => {
        let generatedNames: string = '';
        console.log(response.names);
        response.names.names.forEach((name: {name: string}) => {
            console.log(name.name);
            generatedNames += name.name + '\n';
        });
        generatedNameText.innerText = generatedNames;
    }).catch(error => {
        console.error('Error: ', error)
    })
}

generateButton.addEventListener("click", displayNamesFromServer);
export class GeneratedName {
    private _generatedName: string;
    constructor(generatedName: string) {
        this._generatedName = generatedName;
    }
    get generatedName(): string {
        return this._generatedName;
    }
    set generatedName(generatedName: string) {
        this._generatedName = generatedName;
    }
    getHtmlString(): string {
        return `
            <div class="generated-name-bubble-text-div">
                <h4 class="generated-name-bubble-text">${this._generatedName}</h4>
            </div>
            <div class="generated-name-save-button tiny-button">
                <h5>Save</h5>
            </div>
        `;
    }
    getHtml(): HTMLDivElement {
        let generatedNameBubble: HTMLDivElement = document.createElement('div');
        generatedNameBubble.classList.add('generated-name-bubble');
        generatedNameBubble.innerHTML = this.getHtmlString();
        return generatedNameBubble;
    }
}
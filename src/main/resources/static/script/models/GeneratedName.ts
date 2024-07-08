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
            <h4 class="generated-name-bubble-text">${this._generatedName}</h4>
        `
    }
    getHtml(): HTMLDivElement {
        let generatedNameBubble: HTMLDivElement = document.createElement('div');
        generatedNameBubble.classList.add('generated-name-bubble');
        generatedNameBubble.innerHTML = this.getHtmlString();
        return generatedNameBubble;
    }
}
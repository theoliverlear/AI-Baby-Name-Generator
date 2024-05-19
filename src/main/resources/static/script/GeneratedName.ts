export class GeneratedName {
    generatedName: string;
    constructor(generatedName: string) {
        this.generatedName = generatedName;
    }
    buildBubbleHtml(): string {
        return `
            <h4 class="generated-name-bubble-text">${this.generatedName}</h4>
        `
    }
}
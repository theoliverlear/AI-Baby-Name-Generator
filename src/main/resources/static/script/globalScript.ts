const allImages: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');

//--------------------------Disable-Draggable-Images--------------------------
function disableDraggableImages(): void {
    for (let image of Array.from(allImages)) {
        image.draggable = false;
    }
}
//-------------------------------Load-Page------------------------------------
function loadPage(bodyElement: HTMLElement, pageName: string): boolean {
    return bodyElement.getAttribute('data-page') === pageName;
}
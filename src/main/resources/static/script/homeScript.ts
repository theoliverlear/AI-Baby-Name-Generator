let generateNowButton: HTMLElement = document.getElementById("generate-now-div");
function goToGeneratePage(): void {
    window.location.href = "/generator/";
}
generateNowButton.addEventListener("click", goToGeneratePage);

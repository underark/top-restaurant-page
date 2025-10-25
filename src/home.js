import { makeHeader, makeParagraph, makeImage } from "./element";
import homeImage from "./img/home-image.jpg";
export { homePage };

function homePage() {
    const title = makeHeader("Welcome to Pipi, Bibi, and Ronron!");

    const info = makeParagraph("We are a family restaurant.");
    const image = makeImage(homeImage);

    const mainSection = document.createElement("div");
    const infoImage = document.createElement("div");

    infoImage.appendChild(info);
    infoImage.appendChild(image);
    infoImage.classList.add("content-section");

    mainSection.appendChild(title);
    mainSection.appendChild(infoImage);
    return mainSection;
}
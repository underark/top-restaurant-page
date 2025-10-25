import "./style.css";
import { homePage } from "./home";

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector("#content");
    const homeButton = document.querySelector("#home");

    homeButton.addEventListener("click", () => {
        const homeContent = homePage();
        content.appendChild(homeContent);
    })
});
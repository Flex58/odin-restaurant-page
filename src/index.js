import "./styles.css";
import clearPage from "./clearPage";
import home from "./home";
import menu  from "./menu";

home();

const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const aboutBtn = document.querySelector("#aboutBtn")


homeBtn.addEventListener("click", () => {
    clearPage();
    home();
})

menuBtn.addEventListener("click", () => {
    clearPage();
    menu();
})
// Mengimpor kelas yang diperlukan
import ScientificCalculator from "./ScientificCalculator.js";
import Display from "./Display.js";
import Theme from "./Themes.js";
import ButtonHandler from "./ButtonHandler.js";

// Menunggu hingga seluruh konten DOM dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Mengambil elemen display dari HTML dan menginisialisasi objek kalkulator
    const displayElement = document.getElementById("display");
    const display = new Display(displayElement);

    // Menginisialisasi objek kalkulator
    const calculator = new ScientificCalculator(display);

    // Menginisialisasi objek tombol
    const buttonHandler = new ButtonHandler(calculator);

    // Menginisialisasi tema
    const theme = new Theme();
    theme.initializeTheme();

    // Mengatur event listiner untuk tombol toggle tema
    document.getElementById("toggleButton").onclick = () => theme.toggleMode();

    // Mengatur event listiner untuk setiap tombol kalkulator
    document.querySelectorAll(".button").forEach((button) => {
        const value = button.getAttribute("data-value"); // Mengambil nilai dari atribut data
        // Menghubungkan klik tombol ke handler yang sesuai
        button.addEventListener("click", () => buttonHandler.handleButton(value));
    });
});
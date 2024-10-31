// untuk mengelola tampilan kalkulator
export default class Display {
    constructor(displayElement) {
        this._displayElement = displayElement; // menyimpan elemen display field private
    }

    get value() {
        return this._displayElement.innerText; // mengambil nilainya dari elemen display 
    }

    set value(value) {
        this._displayElement.innerText = value // mengatur nilai untuk elemen display
    }

    clear() {
        this.value = "0"; // mengatur display ke angka "0"
    }
}
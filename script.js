class Counter {
    constructor(number) {
        this.number = number
        Counter.fetchNumberFromLocalStorage()
    }

    increaseNumberFunction() {
        localStorage.setItem("number", JSON.stringify(this.number++))
        document.querySelector("#actual-number").innerText = this.number

        // Counter.fetchNumberFromLocalStorage()
    }

    decreaseNumberFunction() {
        localStorage.setItem("number", JSON.stringify(this.number--))
        document.querySelector("#actual-number").innerText = this.number

        // Counter.fetchNumberFromLocalStorage()
    }

    static fetchNumberFromLocalStorage() {
        if (localStorage.getItem("number") === null) {
            return;
        } else {
            let parsedNumberDataFromLocalStorage = JSON.parse(localStorage.getItem("number"))
            this.number = Number(parsedNumberDataFromLocalStorage)
            document.querySelector("#actual-number").innerText = this.number
        }
    }
}

let parseLocalStorageNumber = Number(JSON.parse(localStorage.getItem("number")))
let counter_instance = new Counter(parseLocalStorageNumber)

document.querySelector(".decrease-number").addEventListener("click", () => counter_instance.decreaseNumberFunction())

document.querySelector(".increase-number").addEventListener("click", () => counter_instance.increaseNumberFunction())
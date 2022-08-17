/* 
    Process to create a counter that stores value in localStorage
    Methods required:
        1. increase number and put it onto the screen
        2. decrease number and put it onto the screen
        3. fetch number from localStorage to onto the screen, everytime the site is left or refreshed
*/

class Counter {
    // constructor contains the crusial factor of the page (number => the intial number is 0)
    // but when number gets increased and decreased by the user that value is then fetched from localStorage
    constructor(number) {
        this.number = number

        // here we need to call this.fetchDataFromLocalStorage() method, it works everytime the page is re-loaded
        // sets value to the screen
        this.fetchDataFromLocalStorage()
    }

    // 1. number is increased  2. gets shown onto the screen  3. also puts number to local storage  4. we need to call the function to see the actions gets happened everytime the click event is fired or triggerd 
    increaseNumber() {
        this.number += 1
        document.querySelector("#actual-number").innerText = this.number

        this.addDataToLocalStorage(this.number)
        this.fetchDataFromLocalStorage()
    }

    // 1. number is decrease  2. gets shown onto the screen  3. also puts number to local storage  4. we need to call the function to see the actions gets happened everytime the click event is fired or triggerd 
    decreaseNumber() {
        this.number -= 1
        document.querySelector("#actual-number").innerText = this.number

        this.addDataToLocalStorage(this.number)
        this.fetchDataFromLocalStorage()
    }

    // this method add the numberData parameter/argument to the localStorage
    addDataToLocalStorage(numberData) {
        localStorage.setItem("number", JSON.stringify(numberData))
    }

    // 1. fetch data from local storage 2. show it onto the screen 3. this.number becomes now the value that has been fetched through local storage
    fetchDataFromLocalStorage() {
        let fetchedNumberData = JSON.parse(localStorage.getItem("number"))
        // console.log(fetchedNumberData, typeof fetchedNumberData)
        document.querySelector("#actual-number").innerText = fetchedNumberData
        this.number = Number(fetchedNumberData)
    }
}

// first instance of the class
firstInstanceCounter = new Counter(0)

// increase number event
document.querySelector(".increase-number").addEventListener("click", () => firstInstanceCounter.increaseNumber())

// decrease number event
document.querySelector(".decrease-number").addEventListener("click", () => firstInstanceCounter.decreaseNumber())

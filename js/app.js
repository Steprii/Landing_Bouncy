function showInConsole(someItem) {
    console.log(someItem)
}

let burger = document.querySelector("#burger");
let sidebar = document.querySelector("#sidebar");

burger.addEventListener(
    "click", (e) => {
        burger.classList.toggle("open");
        sidebar.classList.toggle("open");
    }
)
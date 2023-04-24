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

const btnModal = document.querySelector('.bouncy__button'),
      closeModal = document.querySelector('.modal__button'),
      modal = document.querySelector('.modal');

modal.classList.add('hide');

      btnModal.addEventListener('click', (e) =>{
        modal.classList.remove('hide');
        modal.classList.add('show');
      })

      closeModal.addEventListener('click', (e) =>{
        modal.classList.remove('show');
        modal.classList.add('hide');
        
      })


import getRandomData from "./form.test-data.js"
import * as view from "./form.view.js"
import * as model from "./../model.js"

function init() {
    renderTestData()
    setupEventListeners()
}

function setupEventListeners () {
    view.elements.form.addEventListener('submit', formSubmitHandler)
}

//Функция, возвращающая рандомный экземпляр
function renderTestData() {
    view.insertTestData(getRandomData())
}

function formSubmitHandler(event) {
    event.preventDefault()
    // Получили данные из формы 
    const formData = view.getFormInput()
    // Создали новую заявку в модели 
    model.addRequest(formData)
    view.clearForm(); 
    renderTestData();
}

init()

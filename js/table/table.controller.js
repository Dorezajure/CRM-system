import * as model from './../model.js'
import * as view from './table.view.js'

function init() {
    // Получили все заявки из модели 
    const requests = model.getRequests()
    // Отправили заявки на рендер 
    view.renderRequests(requests)
    addEventListeners()

    const newRequestsCount =  model.countNewRequests()
    view.renderBadgeNew(newRequestsCount)

    const filter = model.getFilter();

    view.updateFilter(filter)
}

function addEventListeners() {
    view.elements.select.addEventListener('change', filterProducts)
    // Фильтрация по верхнему бару 
    view.elements.topStatusBar.addEventListener('click', filterByStatus)
    // Фильтрация по левому бару 
    view.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus)
    })
}

function filterProducts() {
    const filter = model.changeFilter('products', this.value)
    const filterRequests = model.filterRequests(filter)
    // Рендер заявок по статусу 
    view.renderRequests(filterRequests)
}

function filterByStatus(e) {
    const filter = model.changeFilter('status', e.target.dataset.value)
    const filteredRequests = model.filterRequests(filter)
    view.renderRequests(filteredRequests)
    view.updateStatusLinks(e.target.dataset.value)
}

init()

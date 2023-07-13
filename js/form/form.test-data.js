// Класс для создания данных 
class ExampleItem{ 
    constructor(name, phone, email, product){
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }
}

// Рандомные данные для проверки
const testData = [
    new ExampleItem('Ковалев Данил', parseInt('+89659063198'), 'kovalev20030815@yandex.com', 'course-js'),
    new ExampleItem('Киселева Алина', parseInt('+89604930659'), 'kiseleva254@mail.com', 'course-js'),
    new ExampleItem('Светлана Курдюкова', parseInt('+89506939581'), 'kurdukovaa456@mail.com', 'course-vue'),
    new ExampleItem('Алексей Безбородов', parseInt('+89695043052'), 'bezborodovalexei@yandex.ru', 'course-wordpress'),
    new ExampleItem('Аня Сторожева', parseInt('+89695049386'), 'storogevaanna2001@mail.com', 'course-html'),
    new ExampleItem('Глеб Немогутин', parseInt('+89506949367'), 'nemgleb2004@yandex.ru', 'course-php'),
]

// Создание рандомного элемента 
function getRandomIndex(max){
    return Math.floor(Math.random() * max);
}

// Принимает рандомный элемент индекс элемента из функции
export default function getRandomData () {
    const index = getRandomIndex(testData.length)
    return testData[index]
}

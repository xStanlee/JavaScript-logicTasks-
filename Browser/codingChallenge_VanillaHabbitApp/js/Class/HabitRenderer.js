import { CalendarRenderer } from "./CalendarRenderer";

class HabitRenderer {

    constructor(selector, array) {
        this.selector = document.querySelector(selector);
        this.array = array;
    }

    prepereElement(el) {
        this.ejdztiemel = document.createElement('li');
        this.ejdztiemel.setAttribute('class', 'mr-2 mb-4 col-3');

        this.firstChild = document.createElement('div');
        this.firstChild.setAttribute('class', 'mt-4 mb-2 card');
        this.firstChild.style.width = '80%';
        this.firstChild.style.margin = '0 auto;';
        this.firstChild.innerHTML = '<img class="card-img-top" src="https://www.verbaltovisual.com/wp-content/uploads/2020/01/EstablishYourRoutine_Featured-1050x591.png" style="background-size: cover;" alt="Card-img-fail">'

        this.secondChild = document.createElement('div');
        this.secondChild.setAttribute('class', 'mb-2 card-body');
        this.secondChild.innerHTML = `  <h5 class="card-title">${el.name}</h5>
                                        <p class="mb-4 card-text">Started at ${el.day}${this.setPostfix(el.day)} ${this.setMonth(el.month)}.</p>
                                        <a href="#" id="${el.id}" class="mb-2 btn btn-info">Calendar</a>`;

        this.ejdztiemel.insertAdjacentElement('afterbegin', this.firstChild);
        this.ejdztiemel.insertAdjacentElement('beforeend', this.secondChild);

        this.selector.appendChild(this.ejdztiemel);
    }

    addItem() {
        this.prepereElement(this.array.habits[this.array.habits.length - 1]);
        //add listener tooo
    }

    render() {
        this.array.habits.forEach(el => {
            this.prepereElement(el);
        })
    }

    addListeners() {
        this.today = new Date();
        this.currentDay = this.today.getDate();
        this.currentMonth = this.today.getMonth() + 1;
        this.array.habits.forEach(el => {
            const calendarHabbit = document.querySelector(`#${el.id}`);
            calendarHabbit.addEventListener('click', () => {
                const habitter = new CalendarRenderer(Number(el.day), Number(el.month), this.currentDay, this.currentMonth);
                console.log(habitter);
            })
        })}

    setMonth(month) {
        switch(month) {
            case '1': return 'January';
            case '2': return 'February';
            case '3': return 'March';
            case '4': return 'April';
            case '5': return 'May';
            case '6': return 'June';
            case '7': return 'July';
            case '8': return 'August';
            case '9': return 'September';
            case '10': return 'October';
            case '11': return 'November';
            case '12': return 'December';
            default: break;
        }
    }
    setPostfix(day) {
        switch(day) {
            case '1': return 'st.';
            case '2': return 'nd.';
            case '3': return 'rd.';
            default: return 'th.';
        }
    }
}

export { HabitRenderer };

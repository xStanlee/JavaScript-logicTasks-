const refferences = [];

class HabitRenderer {

    constructor(selector, array) {
        this.selector = selector;
        this.array = array;

        this.ejdztiemel = '';
    }

    render() {
        this.ejdztiemel = '';
        this.prepereString();
        document.querySelector(this.selector).innerHTML = this.ejdztiemel;
    }

    prepereString() {
        this.array.habits.forEach(el => {
            this.IDelement = `calendar-${this.getRandomInt(99999)}`;
            this.ejdztiemel += `<div class="mr-2 mb-4 col-3">
                                    <div class="mt-4 mb-2 card" style="width: 80%; margin: 0 auto;">
                                        <img class="card-img-top" src="https://www.verbaltovisual.com/wp-content/uploads/2020/01/EstablishYourRoutine_Featured-1050x591.png" style="background-size: cover;" alt="Card-img-fail">
                                    </div>
                                    <div class="mb-2 card-body">
                                        <h5 class="card-title">${el.name}</h5>
                                        <p class="mb-4 card-text">Started at ${el.day}${this.setPostfix(el.day)} ${this.setMonth(el.month)}.</p>
                                        <a href="#" id="${this.IDelement}" class="mb-2 btn btn-info">Calendar</a>
                                    </div>
                                </div>`
            this.pair = {
                "id": this.IDelement,
                "month": el.month,
                "day": el.day
            }
            refferences.push(this.pair);
        });
    }
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
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export { HabitRenderer, refferences };

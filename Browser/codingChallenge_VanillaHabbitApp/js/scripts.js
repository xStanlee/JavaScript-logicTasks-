import Swal from '../node_modules/sweetalert2/src/sweetalert2.js';
import { AppStorage } from './storage/AppStorage.js';
import { DataRepository } from './Class/DataRepository.js';
import { HabitRenderer } from './Class/HabitRenderer.js';
import { CalendarRenderer } from './Class/CalendarRenderer.js';


window.document.addEventListener( 'DOMContentLoaded', e => {
    const addHabitBtn = document.querySelector('#add-habit > button');
    const searchHabitBtn = document.querySelector('#search-habit');

    const storage = new AppStorage();
    const dataRepository = new DataRepository(storage);
    const renderer = new HabitRenderer('.list', dataRepository);

    renderer.render();
    renderer.addListeners();

    searchHabitBtn.addEventListener( 'click', e => {

        e.preventDefault();
        //Search
    })

    addHabitBtn.addEventListener( 'click', e => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
            title: 'Give a name of habit.',
            text: 'Example: Programming ;)'
            },
            {
            title: 'Type in month started.',
            text: 'In number. Example: 2 = February'
            },
            {
            title: 'Type in day of month started.',
            text: 'In number. Example: 15 = As 15th day of month'
            }
        ]).then((result) => {
            if (result.value) {
                const name = result.value.shift();
                const [month, day] = result.value;
                if (name === '' || month <= 0 || month > 12 || day <= 0 || day > 31 || isNaN(day || month)) {
                    Swal.fire(
                        'Wrong arguments passed.',
                        'Please, type correct number of month and day.',
                        'error'
                        )
                } else if (dataRepository.check(name)) {
                    Swal.fire(
                        'Existing habit.',
                        'Please, delete old habit if you want start from scratch.',
                        'info'
                        )
                } else {
                const elementID = `calendar-${getRandomInt(999999)}`;
                dataRepository.add({ name: name,
                                    month: month,
                                    day: day,
                                    id: elementID,
                                    calendar: {
                                        1: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        2: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false],
                                        3: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        4: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false],
                                        5: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        6: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false],
                                        7: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        8: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        9: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false],
                                        10: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                        11: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false],
                                        12: [false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false,
                                            false, false, false, false, false, false, false, false, false, false, false],
                                    }
                                });
                renderer.addItem('.list', dataRepository.getAll());
                Swal.fire({
                    title: 'Habit succesfully added!',
                    html: `
                    Info :
                    <pre><code>${name} is added as a Habit to local DB</code></pre>
                    `,
                    confirmButtonText: 'Lovely!'
                    });
                document.querySelector(`#${elementID}`).addEventListener('click', e => {
                    // Get name of habit and search storage APP_HABIT.name
                    console.log(e.target);
                    //render calendar on popup
                    });
                }
            }
        })
    });

    function getRandomInt(max) {
        return Math.floor (Math.random() * Math.floor(max));
    }
});
/*
function setCalendarListener(reff) { 
    for(const each of reff) {
        const el = document.querySelector(`#${each.id}`);
        el.addEventListener('click', e => {
            e.preventDefault();
            const date = new Date();
            const month = date.getMonth();
            const day = date.getDate();
            console.log(month);
            //.log(`${Number(each.month)}`);
            console.log(`${month} and day is ${day}`);
        })
    }
}*/

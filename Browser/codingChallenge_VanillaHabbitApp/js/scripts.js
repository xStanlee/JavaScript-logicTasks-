import Swal from '../node_modules/sweetalert2/src/sweetalert2.js';
import { AppStorage } from './storage/AppStorage.js';
import { DataRepository } from './Class/DataRepository.js';
import { TaskRenderer } from './Class/TaskRenderer.js';


window.document.addEventListener( 'DOMContentLoaded', e => {
    const addHabitBtn = document.querySelector('#add-habit > button');
    const searchHabitBtn = document.querySelector('#search-habit');

    const storage = new AppStorage();
    const dataRepository = new DataRepository(storage);
    const renderer = new TaskRenderer('.list', dataRepository);

    renderer.render('.list', dataRepository.getAll());


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

                if (name === '' || month <= 0 || month > 12 || day <= 0 || day > 31) {
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
                dataRepository.add({ name: name,
                                    month: month,
                                    day: day,
                                });
                renderer.render('.list', dataRepository.getAll());
                Swal.fire({
                    title: 'Habit succesfully added!',
                    html: `
                    Info :
                    <pre><code>${name} is added as a Habit to local DB</code></pre>
                    `,
                    confirmButtonText: 'Lovely!'
                });
                // other functions
                }
            }
        })
    });
});

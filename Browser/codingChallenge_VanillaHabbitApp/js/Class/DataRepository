class DataRepository {

    constructor(storage) {
        this.habits = storage.get('APP_HABITS') || [];
        this.subscribers = [];
        this.storage = storage;
    }

    add(habit) {
        this.habits.push(habit);
        this.onChange();
    }

    remove(habitID) {
        this.habits = this.habits.filter(h => h.id !== habitID);
        this.onChange();
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    check(name) {
        let holder = false;
        for (let habit of this.habits) {
            habit.name === name ? holder = true : holder;
        };
        return holder;
    }

    onChange() {
        this.storage.set('APP_HABITS', this.habits)
        this.subscribers.forEach(s => {
            s(this.tasks);
        });
    }

    getAll() {
        return this.habits;
    }
}

export { DataRepository };

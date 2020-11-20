class AppStorage {

    constructor() {
        this.storage = sessionStorage;
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        const data = this.storage.getItem(key);
        return JSON.parse(data);
    }
}
export { AppStorage };

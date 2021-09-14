import {makeAutoObservable} from "mobx";

class Counter {
    count = 0;
    timer = 60;

    constructor() {
        makeAutoObservable(this)
    }

    implement() {
        this.count = this.count + 1
    }

    decrement() {
        this.count = this.count - 1
    }

    get total() {
        return 'Count + timer = ' + this.timer + this.count
    }
}

export default new Counter;
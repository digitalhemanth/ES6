class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat() {
        return `${this.name} is eating!`;
    }

    sleep() {
        return `${this.name} is going to sleep!`;
    }

    wakeUp() {
        return `${this.name} is waking up!`;
    }

}

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    climbTrees() {
        return `${this.name} is climbing trees!`;
    }

    poundChest() {
        return `${this.name} is pounding its chest!`;
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
    }

}

function display(content) {
    console.log(content);
}

const gorilla = new Gorilla('George', '160Kg');
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());

class Student {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}

window.onload = () => {
    let yamada = new Student("yamada", 1919);
    const h1 = document.createElement("h1");
    h1.innerText = `${yamada.name} is ${yamada.age} years old.`;
    document.getElementById("app").appendChild(h1);
};
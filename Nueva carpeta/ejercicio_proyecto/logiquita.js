
const   proyecto = [];

const tutor = {
    Tutor: prompt("Digita nombre del tutor"),
    Menor: prompt("Digita nombre del menor")
}

const tutor2 = {
    Tutor: prompt("Digita nombre del tutor"),
    Menor: prompt("Digita nombre del menor")
}

const tutor3 = {
    Tutor: prompt("Digita nombre del tutor"),
    Menor: prompt("Digita nombre del menor")
}

proyecto.unshift(tutor3);
proyecto.push(tutor2);
proyecto.push(tutor);

console.log(proyecto);
console.table(proyecto);
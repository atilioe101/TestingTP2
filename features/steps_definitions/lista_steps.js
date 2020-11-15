const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const Lista = require("../../module/lista.js");

const Dado = require('@cucumber/cucumber').Given
const Cuando = require('@cucumber/cucumber').When
const Entonces = require('@cucumber/cucumber').Then

let contexto = {};

Given('una lista vacía', function () {
    // Write code here that turns the phrase above into concrete actions
    contexto.Lista = new Lista;
    return 'pending';
});

When('se agrega la pareja {}', function (pareja) {
    // Write code here that turns the phrase above into concrete actions
    parea = JSON.parse(pareja);
    contexto.Lista.add(Object.keys(pareja)[0], Object.values(pareja)[0]);
    return 'pending';
});

Then('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Dado('una lista con los siguientes elementos', function (tabla) {
    contexto.Lista = new Lista;
    tabla.rawTable.forEach(pareja => {
        contexto.Lista.add(eval(pareja[0]),eval(pareja[1]));
    });
});

Cuando('se elimina la clave {string}', function (clave) {
    contexto.Lista.delete(clave);
});

Cuando('se modifica clave {string} con valor {string}', function (clave, valor) {
    contexto.encontrado = contexto.Lista.update(clave, valor);
});

Cuando('se busca la clave {string}', function (clave) {
    contexto.encontrado = contexto.Lista.find(clave);
});


Entonces('se obtiene el valor NaN', function () {
    expect(contexto.encontrado).is.NaN;
});

Entonces('se obtiene el valor {string}', function (valor) {
    expect(contexto.encontrado).is.equal(valor);
});

Entonces('El nuevo valor de clave es {string}', function (valor) {
    expect(contexto.encontrado).is.equal(valor);
});


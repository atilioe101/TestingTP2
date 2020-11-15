module.exports = class Lista {
    #elementos;
    
    constructor() {
        this.#elementos = [];
    }

    add(key, value) {
        this.#elementos.push({'clave': key, 'valor': value});
    }

    indexOf(key) {
        for (var indice = 0; indice < this.#elementos.length; indice++) {
            if (this.#elementos[indice].clave == key) {
                return indice;
            }
        }
        return NaN;
    }

    delete(key) {
        var indice = this.indexOf(key);
        if (!isNaN(indice)) {
            this.#elementos.splice(indice, 1);
            return
        }
    }

    find(key) {
        var indice = this.indexOf(key);
        if (!isNaN(indice)) {
            return this.#elementos[indice].valor;
        }
        return NaN;
    }

    update(key, value) {
        var indice = this.indexOf(key);
        if (!isNaN(indice)) {           
            this.#elementos[indice].valor = parseInt(value);
            return value;
        }
        return NaN;
    }
    
    count() {
        return this.#elementos.length;
    }
};
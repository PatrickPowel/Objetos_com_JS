// Definindo a classe abstrata 

class Abstracao{
    constructor(atributo){
        this.atributo = atributo;
    }

    metodoAbstracao() {
        throw new Error("Este método precisa ser implementado nas classes filhas.");
    }
}

// Classe filha 1
class Filha1 extends Abstracao {
    metodoAbstrato() {
        return `Método abstrato implementado na classe Filha1. Atributo: ${this.atributo}`;
    }
}

// Classe filha 2 
class Filha2 extends Abstracao {
    metodoAbstrato() {
        return `Métódo abstrato implementado na calsse Filha2. Atributo: ${this.atributo}`;
    }
}

// Criando instâncias das classes
const instancia1 = new Filha1("Instância 1");
const instancia2 = new Filha1("Instância 2");
const instancia3 = new Filha2("Instância 3");

// Chamando o método abstrato em cada instância
console.log(instancia1.metodoAbstrato());
console.log(instancia2.metodoAbstrato());
console.log(instancia3.metodoAbstrato());
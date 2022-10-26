class Carro{
    constructor (placa, ano, modelo){
        this.placa = placa
        this.ano = ano
        this.modelo = modelo
    }

    getInfo(){
        return [this.placa, this.ano, this.modelo]
    }
}

const carro = new Carro("123ABC", 2021, "Punto")
console.log(carro.getInfo())


const CarroFactory = (placa, ano, modelo) => ({
    placa,
    ano,
    modelo,
    getInfo: () => ({placa, ano, modelo})
})

const carroFactory = CarroFactory("ABC123", 2017, "Fiesta")
console.log(carroFactory.getInfo())

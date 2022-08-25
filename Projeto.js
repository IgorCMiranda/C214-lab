class Veiculo{
    placa;
    ano;

    constructor(placa, ano){
        this.ano = ano;
        this.placa = placa;
    }

    setPlaca(nvplaca){
        this.placa = nvplaca;
    }
    
    setAno(nvano){
        this.ano = nvano;
    }
    
    setAno(nvanostr){
        this.ano = nvanostr;
    }
    
    getPlaca(){
        console.log(`Placa = ${this.placa}`);
    }
    
    getAno(){
        console.log(`Ano = ${this.ano}`);
    }
    
    exibirDados(){
        console.log(`Ano do veiculo = ${this.placa} e o ano = ${this.ano}`);
    }
}


class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(neixos){
        this.eixos = neixos;
    }

    getEixos(){
        console.log(`Numero de eixos = ${this.eixos}`);
    }

    exibirDados(){
        console.log(`Ano do veiculo = ${this.placa} e o ano = ${this.ano} e o numero de eixos = ${this.eixos}`);
    }
}


class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setEixos(nassentos){
        this.assentos = nassentos;
    }

    getEixos(){
        console.log(`Numero de assentos = ${this.assentos}`);
    }

    exibirDados(){
        console.log(`Ano do veiculo = ${this.placa} e o ano = ${this.ano} e o numero de assentos = ${this.assentos}`);
    }
}

let novo_veiculo = new Veiculo("GFV-3012", 2012);
novo_veiculo.getAno();

let nv_caminhao = new Caminhao("FER-2323", 2013, 4);
nv_caminhao.exibirDados();

let nv_bus = new Onibus("FVG-2343", 2014, 40);
nv_bus.exibirDados();
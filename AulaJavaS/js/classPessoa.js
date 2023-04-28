class Pessoa {
    constructor(pNmPessoa, pDataNascimento) {
        this.nmPessoa = pNmPessoa;
        this.dtNascimento = new Date(pDataNascimento);

    }

    getNmPessoa(){
        return this.nmPessoa
    }
    getIdade(){
        var vHoje = new Date();
        return vHoje.getFullYear() - this.dtNascimento.getFullYear() 
    }
}

class Aluno extends Pessoa {
    constructor(pNmPessoa, pDataNascimento, pNmCurso){
        super(pNmPessoa,pDataNascimento);
        this.nmCurso = pNmCurso;
    }

    getNmCurso() {
        return this.nmCurso;
    }
}

class Professor extends Pessoa {
    constructor(pNmPessoa, pDataNascimento, pNmDepto){
        super(pNmPessoa,pDataNascimento);
        this.nmDepto = pNmDepto;
    }

    getNmDepto(){
        return this.nmDepto;
    }
}
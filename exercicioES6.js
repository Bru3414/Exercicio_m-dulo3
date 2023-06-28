const alunos = ['Bruno', 'João', 'Pedro', 'Jonas', 'Wellington', 'Ana', 'Roberta', 'Joaquim', 'Fernanda', 'Miguel'];

const alunosNotas = alunos.map((itemAtual) => {

    return itemAtual = {
        nome: itemAtual,
        nota: Math.round(Math.random() * 10),
        aprovado: false
    }

})

verificaNotas = () => {

    alunosNotas.filter((item) => {
        if (item.nota >= 6) {
            item.aprovado = true;
        }else item.aprovado = false;
    })
    
    alunosNotas.forEach((item) => {
        if (item.aprovado) {
            console.log(`Aluno APROVADO: ${item.nome} com nota ${item.nota}`);
        }else {
            console.log(`Aluno REPROVADO: ${item.nome} com nota ${item.nota}`);
        }
    })

}

verificaNotas();
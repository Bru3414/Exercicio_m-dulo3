const multiplicar = (n1: number, n2: number): number => {
    const soma: number = n1 * n2;
    return soma;
}
console.log(multiplicar(5, 5));

const dizOla = (nome: string): string => {
    return `Olá ${nome}`
}
console.log(dizOla('Pedro'));
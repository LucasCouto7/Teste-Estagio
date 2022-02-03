// Teste 01

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(soma);

// Resp:. A variável SOMA terá valor 91 ao final do processamento. Passando pelo loop, sendo K menor do que INDICE, k será incrementado em 1 a cada passagem, até atingir valor 13 a pausar o loop. SOMA será atríbuido do valor atual de SOMA mais o valor atual de K. No última passagem, com SOMA em valor 78, e K com valor 12, sendo adicionado mais 1 a K, tem-se 78 + 13, obtendo-se 91 como valor final de SOMA.

// Teste 02

// Fibonacci
let num = Number(
  prompt(
    "Informe a quantidade de elementos que deseja ver da sequência de Fibonacci"
  )
);

let isSequence = false;

const fibonacci = (num, isSequence) => {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;
  let i = 0;

  console.log("Elementos da sequência de fibonacci");

  console.log(n1);
  console.log(n2);

  while (i < num - 2) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    i++;
    console.log(n3);
    if (n3 == num) {
      isSequence = true;
    }
  }

  if (isSequence) {
    console.log("O número informado pertence a sequência");
  } else {
    console.log("O número informado não pertence a sequência");
  }
};

fibonacci(num);

// Teste 03

/*  

A - 11 - números ímpares
B - 128 - números pares
C - 49 - 1*1, 2*2, 3*3, 4*4, 5*5, 6*6, 7*7...
D - 100 - 2*2, 4*4, 6*6, 8*8, 10*10
E - 13 - Fibonacci
F - 200 - números de pronúncia iniciada com a letra D 
 
 */

// Teste 04

// A

/*

 Inicialmente, ao se considerar o momento em que se cruzam, é possível afirmar que ambos estão à mesma distância de Ribeirão Preto. Nesse sentido, é possível calcular o deslocamento de cada um e o tempo gasto.

 Considerando a velocidade relativa, têm-se que com o caminhão inicialmente em repouso, a velocidade do carro em relação ao caminhão é dada pela soma das duas velocidades, sendo 110 somado de 80, Vr = 110 + 80 = 190Km/h. Sendo então a velocidade relativa do carro 190km/h. 
 
 A partir dessa velocidade relativa, pode-se obter o tempo necessário para se encontrarem. S = v * t -> 100 = 190.t -> t = 0,526 horas.

 Com o tempo necessário para se encontrarem, é possivel calcular o deslocamento de cada um até o momento do encontro. Sendo do carro -> S = 110 * 0,52631 = 57,9Km e do caminhão S = 80 * 0,52631 = 42,1Km. 

 Subtraindo então 42.1km do total de 100km, obtêm-se 57.9km, exatamente o deslocamento do carro. Logo, estão ambos à mesma distância de Ribeirão Preto.
 
 */

// B

/* 

Inicialmente, ao se considerar o momento em que se cruzam, é possível afirmar que ambos estão à mesma distância de Ribeirão Preto. Nesse sentido, é possível calcular o deslocamento de cada um e o tempo gasto.

 Considerando então duas paradas de 5 minutos do caminhão, totalizando 10 minutos(0,167 horas) nos quais o carro se mantém em velocidade constante de 110km/h e o caminhão se encontra em repouso(v = 0). A partir disso é possivel calcular o deslocamento do carro nesse período. Sendo S = v * t -> S = 110 * 0,167 -> S = 18.3Km.

 Sendo assim, o carro percorreu 18.3km enquanto o caminhão estava em repouso, restando 81.7km nos quais ambos andaram na mesma direção e sentido oposto, sendo observada a velocidade relativa, dada pela soma das duas velocidades e sendo possível calcular o tempo gasto até se encontrarem. S = v * t -> 81.7 = 190 * t -> t = 0.43 horas. 

 Para então determinar o deslocamento de cada um, têm-se para o carro -> S = 110 * 0,43 = 47.3Km. Somando então 18.3km percorridos enquanto o caminhão estava parado, temos que o carro percorreu 65.6 km até se cruzarem. Já o deslocamento do caminhão é obtido por S = 80 * 0.43 -> S = 34.4km.

 Subtraindo então os 34.4km percorridos pelo caminhão do total de 100km, obtém-se 65.6km, exatamente o deslocamento do carro. Logo, ambos estão à mesma distância em relação Ribeirão Preto. 
 */

// C

//  Demonstrado nas questões A e B

// Questão 05

let stringInit = prompt("Informe a string a ser invertida");
let stringArr = stringInit.split("");
let arrLength = stringArr.length;
let stringReverse = [];

for (let i = 0; i < arrLength; i++) {
  let letter = stringArr[arrLength - (i + 1)];
  stringReverse[i] = letter;
}

console.log(`String inicial: ${stringInit}`);

console.log(`String invertida: ${stringReverse.join("")}`);

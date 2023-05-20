let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');
let multi = document.getElementById('multi');
let diviAB = document.getElementById('diviAB');
let diviBA = document.getElementById('diviBA');
let potenciaAB = document.getElementById('potenciaAB');
let potenciaBA = document.getElementById('potenciaBA');
let raizA = document.getElementById('raizA');
let raizB = document.getElementById('raizB');
let fatA = document.getElementById('fatA');
let fatB = document.getElementById('fatB');
let porceAB = document.getElementById('porceAB');
let porceBA = document.getElementById('porceBA');
let media = document.getElementById('media');


soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
multi.innerHTML = 0;
diviAB.innerHTML = 0;
diviBA.innerHTML = 0;
potenciaAB.innerHTML = 0;
potenciaBA.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatA.innerHTML = 0;
fatB.innerHTML = 0;
porceAB.innerHTML = 0;
porceBA.innerHTML = 0;
media.innerHTML = 0;


//fazer os cálculos
function calculoSoma(a, b) {
    return a + b;
}; 

    const calculoSubtracao = (a, b) => a - b;
    const calculoSubtracao2 = (a, b) => b - a;
    const multiplicacao = (a, b) => a * b;
    const divisaoAB = (a, b) => a / b;
    const divisaoBA = (a, b) => b / a;
    const poteAB = (a, b) => a ** b;
    const poteBA = (a, b) => b ** a;
    const raizAA = (a, b) => Math.sqrt(a);
    const raizBB = (a, b) => Math.sqrt(b);

    function factorialize(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
      }
    const fatorialA = (a, b) => factorialize(a);
    const fatorialB = (a, b) => factorialize(b);

    const percentualAB =  (a, b) => (b / a)*100;
    const percentualBA =  (a, b) => (a / b)*100;

    const med = (a, b) => (a+b)/2;

//criar uma função ao clicar no botão calcular
const calcular = () => {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

let a = parseFloat(inputA);
let b = parseFloat(inputB);

soma.innerHTML = calculoSoma(a  , b);
subtracaoA.innerHTML = calculoSubtracao(a, b);
subtracaoB.innerHTML = calculoSubtracao2(a, b);
multi.innerHTML = multiplicacao(a, b);
diviAB.innerHTML = divisaoAB(a, b);
diviBA.innerHTML = divisaoBA(a, b);
potenciaAB.innerHTML = poteAB(a, b);
potenciaBA.innerHTML = poteBA(a, b);
raizA.innerHTML = raizAA(a, b);
raizB.innerHTML = raizBB(a, b);
fatA.innerHTML = fatorialA(a, b);
fatB.innerHTML = fatorialB(a, b);
fatB.innerHTML = fatorialB(a, b);
porceAB.innerHTML = percentualAB(a, b);
porceBA.innerHTML = percentualBA(a, b);
media.innerHTML = med(a, b);



}
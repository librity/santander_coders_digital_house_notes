function eMaior(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function hojeSeJoga(aString) {
  const domingo = "domingo";
  if (aString == domingo) {
    return "Hoje é dia de futebol!!!";
  } else {
    return "Hoje não é dia de futebol :(";
  }
}

function sinal(num) {
  if (num > 0) {
    return 1;
  }
  if (num < 0) {
    return -1;
  }
  return 0;
}

function eNumeroDaSorte(num) {
  return num >= 0 && (num % 2 == 0 || num % 3 == 0) && num % 15 != 0;
}

function possoIrAoBanco(diaDaSemana, horaAtual) {
  const saturday = "sábado";
  const sunday = "domingo";
  if (diaDaSemana == saturday || diaDaSemana == sunday) {
    return false;
  }
  if (horaAtual < 9 || horaAtual > 15) {
    return false;
  }
  return true;
}

function filosofoHipster(profession, nationality, milage) {
  const musician = "Músico";
  const brazilian = "Brasil";
  return profession == musician && nationality == brazilian && milage > 2;
}

paiDe(sandy);
maeDe(sandy);
paiDe(junior);
maeDe(junior);

function temAMesmaMae(a, b) {
  return maeDe(a) === maeDe(b);
}
function temOMesmoPai(a, b) {
  return paiDe(a) === paiDe(b);
}

function saoMeioIrmaos(a, b) {
  if (temAMesmaMae(a, b) && temOMesmoPai(a, b)) {
    return false;
  }
  return temAMesmaMae(a, b) || temOMesmoPai(a, b);
}

function xor(a, b) {
  return a != b;
}

// boolean operators by precedence: !, &&, ||
function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return (!temJuros && taxasDoCartao >= 3) || dinheiroDisponivel < 100;
}
pagarComCartao(true, 6, 320);
pagarComCartao(false, 8, 80);
pagarComCartao(true, 2, 215);
pagarComCartao(true, 1, 32);

function podeSeAposentar(age, gender, contribution) {
  const male = "M";
  const female = "F";
  return (
    contribution >= 30 &&
    ((gender == female && age >= 60) || (gender == male && age >= 65))
  );
}

function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
  return (
    !temProblemaCardiaco &&
    (alturaPessoa >= 1.5 || (alturaPessoa >= 1.2 && vemComCompania))
  );
}

function medalhaSegundoOPosto(placing) {
  if (placing == 1) {
    return "ouro";
  }
  if (placing == 2) {
    return "prata";
  }
  if (placing == 3) {
    return "bronze";
  }
  return "Continue participando";
}

function imprimirAzul4() {
  for (var i = 0; i < 4; i++) {
    console.log("Azul");
  }
}

function imprimir5vezes5() {
  for (var i = 0; i < 5; i++) {
    console.log(5);
  }
}

function passoAPasso() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

function passandoPor() {
  for (var i = 0; i < 4; i++) {
    console.log(`aqui eu tenho o valor de ${i}`);
  }
}

function passandoPelosPares() {
  for (var i = 0; i < 7; i++) {
    if (i % 2 == 0) {
      console.log(`aqui eu tenho o valor de ${i}`);
    }
  }
}

function imprimirAzul(x) {
  for (var i = 0; i < x; i++) {
    console.log(`Azul`);
  }
}

function somar5MoedasDe25Centavos() {
  let value = 0;
  for (var i = 0; i < 5; i++) {
    value += 0.25;
  }
  return value;
}

function somarMoedasDe25(quantidadeDeMoedas) {
  let value = 0;
  for (var i = 0; i < quantidadeDeMoedas; i++) {
    value += 0.25;
  }
  return value;
}

function somaDosPares(x) {
  let value = 0;
  for (var i = 0; i < x + 1; i++) {
    if (i % 2 == 0) {
      value += i;
    }
  }
  return value;
}

function somatoria(x) {
  let value = 0;
  for (var i = 0; i < x; i++) {
    value += i;
  }
  return value;
}

function caloriasDeTrote(x) {
  let value = 0;
  for (var i = 1; i <= x; i++) {
    value += i * 5;
  }
  return value;
}

const pertences = ["espada", "escudo", "crossbow"];
pertences.push("cross");
pertences.pop();

function mover(a, b) {
  b.push(a.pop());
}

function contem(a, b) {
  return a.indexOf(b) != -1;
}

function medalhaDeAcordoComPosto(numero) {
  const medals = ["nada", "ouro", "prata", "bronze"];
  if (medals[numero]) {
    return medals[numero];
  }
  return medals[0];
}

function lucroTotal(profits) {
  let totalProfit = 0;
  for (var i = 0; i < profits.length; i++) {
    totalProfit += profits[i];
  }
  return totalProfit;
}

function lucroTotal4(profits) {
  let totalProfit = 0;
  for (var i = 0; i < profits.length; i++) {
    totalProfit += profits[i];
  }
  return totalProfit;
}

function lucroTotal4(profits) {
  let totalProfit = 0;
  for (var i = 0; i < profits.length; i++) {
    totalProfit += profits[i];
  }
  return totalProfit;
}

function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade = 0;
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      quantidade += 1;
    }
  }
  return quantidade;
}

function quantidadeDeMesesComPerda(umPeriodo) {
  let quantidade = 0;
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] < 0) {
      quantidade += 1;
    }
  }
  return quantidade;
}

function saldoDeMesesComLucro(umPeriodo) {
  let quantidade = [];
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      quantidade.push(umPeriodo[mes]);
    }
  }
  return quantidade;
}

function naipeDeTruco(suite) {
  let set = [];
  for (var i = 1; i <= 12; i++) {
    if (i != 8 && i != 9) {
      set.push(`${i} de ${suite}`);
    }
  }
  return set;
}

//////////////////////////////////////////////////

function produto(arr) {
  let value = 1;
  for (var i = 0; i < arr.length; i++) {
    value *= arr[i];
  }
  return value;
}
produto([1, 4, 7]);

function maisMenos(arr) {
  let positives = 0;
  let zeroes = 0;
  let negatives = 0;
  const total = arr.length;
  const answer = [];

  for (var i = 0; i < total; i++) {
    if (arr[i] > 0) {
      positives += 1;
    }
    if (arr[i] == 0) {
      zeroes += 1;
    }
    if (arr[i] < 0) {
      negatives += 1;
    }
  }

  answer.push(positives / total);
  answer.push(zeroes / total);
  answer.push(negatives / total);

  return answer;
}
maisMenos([1, 2, 0, -1]);

function escada(heigth) {
  const answer = [];

  for (var i = 1; i <= heigth; i++) {
    answer.push(" ".repeat(heigth - i) + "#".repeat(i));
  }

  return answer;
}
escada(5);

function acontece(arr, cutoff) {
  let present = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      present += 1;
    }
  }
  return present >= cutoff;
}
function aberturas(arrArr, cutoff) {
  const answer = [];

  for (var i = 0; i < arrArr.length; i++) {
    if (acontece(arrArr[i], cutoff)) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
}
aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2);

function alturaArvoreUtopica(cycles) {
  let answer = 1;
  for (var i = 0; i < cycles; i++) {
    if (i % 2 == 0) {
      answer *= 2;
    } else {
      answer += 1;
    }
  }
  return answer;
}
alturaArvoreUtopica(2);

function fatorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}
fatorial(2);

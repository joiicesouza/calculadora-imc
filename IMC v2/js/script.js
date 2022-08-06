function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  handleButtonClick();
}

function calculateImc(weight, height) {
  var imc = weight / (height * height);

  const result = document.getElementById('result');

  if (imc > 16 && imc < 17) {
    console.log('Muito abaixo do peso');
    document.getElementById('result').innerHTML = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc < 18.5) {
    console.log('Abaixo do peso');
    document.getElementById('result').innerHTML = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
    document.getElementById('result').innerHTML = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
    document.getElementById('result').innerHTML = 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau I');
    document.getElementById('result').innerHTML = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 40) {
    console.log('Obesidade grau II');
    document.getElementById('result').innerHTML = 'Obesidade grau II';
  } else if (imc >= 40) {
    console.log('Obesidade grau III');
    document.getElementById('result').innerHTML = 'Obesidade grau III';
  } else {
    console.log('inválido');
    document.getElementById('result').innerHTML = 'Inválido';
  }
  return imc;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imcResult = document.querySelector('#imc-result');

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

start();

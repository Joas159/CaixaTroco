const vlrCompra = document.querySelector('#vlrCompra');
const vlrCliente = document.querySelector('#vlrCliente');
const btnTroco = document.querySelector('#botao');
const buyValue = document.querySelector('#buyValue');
const exchangeValue = document.querySelector('#exchangeValue');
const divResultado = document.querySelector('.divResultado');
const cedulas = document.querySelector('#cedulas');

btnTroco.addEventListener('click', () => {
    divResultado.classList.toggle('escondido');
    buyValue.innerHTML = (`Valor da Compra >> ${vlrCompra.value}`);
    exchangeValue.innerHTML = (`Valor do Troco >> ${exchangeValue.innerHTML = ((vlrCompra.value - vlrCliente.value) * -1).toFixed(2)}`);

    const vlrCedula = calcCedula(vlrCompra.value - vlrCliente.value);
    cedulas.innerHTML = (vlrCedula);

});

function calcCedula(valor) {
    valor = valor / 100;
    const arr2 = valor.toString().split('');
    console.log(arr2);
    const indexPonto = arr2.findIndex(ponto => {
        return ponto === '.';
    });

    const separador = arr2.splice(0, indexPonto);
    const cedula100 = separador.join('');
        return `Cédulas --> Nota de 100 - > ${cedula100} < # Nota de 10 - > ${arr2[1]} < # Nota de 1 > ${ typeof arr2[2] === 'undefined' ? 0 : arr2[2] } <`;
};
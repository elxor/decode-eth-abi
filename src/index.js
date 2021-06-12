import abiDecoder from 'abi-decoder';
import abi from 'human-standard-token-abi';
import './main.css';

abiDecoder.addABI(abi);

const decodeBtn = document.querySelector('.decodeBtn');
const inputArea = document.querySelector('#inputarea');
const outputArea = document.querySelector('#outputarea');

decodeBtn.addEventListener('click', decodeHandler);

function decodeHandler() {
    const dataAbiHex = inputArea.value.trim();
    let outputtext = '';

    try {
        const dataAbi = decodeAbi(dataAbiHex);
        outputtext = JSON.stringify(dataAbi, null, 4);

    } catch (err) {
        outputtext = err.toString();
    }

    outputArea.value = outputtext;
}

function decodeAbi(hex) {
    const decodedData = abiDecoder.decodeMethod(hex);

    return decodedData;
}
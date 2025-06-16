let cardData = document.getElementById('card-data');
let cardTime = document.getElementById('card-time');
let cardDetails = document.getElementById('details-card');

let inputDate = document.getElementById('wedding-date');
let inputTime = document.getElementById('wedding-time');
let detailsP = document.getElementById('details');

function nextStep() {
    if (!inputDate.value) {
        alert("Por favor, escolha uma data para o casamento.");
        return;
    }
    
    cardData.classList.add('d-none');
    cardTime.classList.remove('d-none');
}

function showDetails() {
    if (!inputTime.value) {
        alert("Por favor, escolha um horário para o casamento.");
        return;
    }
    let date = new Date(inputDate.value + 'T00:00:00');
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('pt-BR', options);

    let time = inputTime.value;
    
    detailsP.innerText = `Casamento marcado para ${formattedDate}, às ${time}.`;
    
    cardTime.classList.add('d-none');
    cardDetails.classList.remove('d-none');
}

function voltar() {
    cardData.classList.remove('d-none');
    cardTime.classList.add('d-none');
    cardDetails.classList.add('d-none');
}
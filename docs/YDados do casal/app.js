document.addEventListener('DOMContentLoaded', function() {

    let coupleForm = document.getElementById('coupleForm');
    let saveButton = coupleForm.querySelector('button[type="submit"]');
    let infoCasal = document.getElementById('info-casal');
    let nome1Input = document.getElementById('nome1');
    let sobrenome1Input = document.getElementById('sobrenome1');
    let nome2Input = document.getElementById('nome2');
    let sobrenome2Input = document.getElementById('sobrenome2');
    let separadorSelect = document.getElementById('separador');
    let successToastEl = document.getElementById('successToast');
    let successToast = new bootstrap.Toast(successToastEl);

    function updatePreview() {
        let nome1 = nome1Input.value.trim();
        let sobrenome1 = sobrenome1Input.value.trim();
        let nome2 = nome2Input.value.trim();
        let sobrenome2 = sobrenome2Input.value.trim();
        let separador = separadorSelect.value;

        let fullName1 = `${nome1} ${sobrenome1}`.trim();
        let fullName2 = `${nome2} ${sobrenome2}`.trim();
        
        if (!nome1 && !nome2) {
            infoCasal.textContent = "Nenhum dado inserido.";
        } else if (nome1 && nome2) {
            infoCasal.textContent = `${fullName1} ${separador} ${fullName2}`;
        } else {
            infoCasal.textContent = "Preencha ambos os nomes...";
        }
    }

    function salvarDados(event) {
        event.preventDefault(); 

        let isNome1Valid = nome1Input.value.trim() !== '';
        let isNome2Valid = nome2Input.value.trim() !== '';
        
        nome1Input.classList.toggle('is-invalid', !isNome1Valid);
        nome2Input.classList.toggle('is-invalid', !isNome2Valid);

        if (!isNome1Valid || !isNome2Valid) {
            infoCasal.textContent = "Por favor, preencha os nomes obrigatórios.";
            return;
        }
        
        saveButton.classList.add('loading');
        saveButton.disabled = true;

        setTimeout(() => {
            updatePreview(); 
            
            saveButton.classList.remove('loading');
            saveButton.disabled = false;
            successToast.show();
        }, 800);
    }

    coupleForm.addEventListener('submit', salvarDados);
    coupleForm.addEventListener('input', updatePreview);

});
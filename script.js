function geradorNumeros() {

    const input1 = Math.ceil(document.querySelector('.input1').value)
    const input2 = Math.floor(document.querySelector('.input2').value)

    if (input1 >= input2) {
        alert('O primeiro numero deve ser menor que o segundo')
        return;
    }

   
        const result = Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
        alert(`O numero sorteado foi ${result}`)
    }

     document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            geradorNumeros();
        }
    });

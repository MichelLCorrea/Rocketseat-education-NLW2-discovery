// procurar o botão 
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    }) 

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
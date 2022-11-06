var agora = new Date()
var hora = agora.getHours() //função para pegar a hora do sistema
console.log(`São exatamente ${hora} horas.`)
if (hora <6){
    console.log('Boa madrugada!')
    }
    else if (hora < 12) {
    console.log('Bom dia!')
    }
    else if (hora <18) {
        console.log('Boa tarde!')
        }
    else if (hora < 23){
        console.log('Boa noite!')
    }
    if (hora > 24){
        console.log('Insira uma hora válida.')
    }
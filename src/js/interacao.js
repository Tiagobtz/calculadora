function calcular(tipo, valor){
    if (tipo === 'acao'){
        if (valor === 'c'){
            document.getElementById('visor-resultado').value = ''
        }
        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('visor-resultado').value += valor
        }
        else if (valor === '='){
            let valorDoCampo = eval(document.getElementById('visor-resultado').value)
            document.getElementById('visor-resultado').value = valorDoCampo
        }
    }
    else if (tipo === 'valor'){
        document.getElementById('visor-resultado').value += valor
    }
}
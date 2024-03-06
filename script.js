function FazerCalculo() {
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valueF03 = document.getElementById("faixa03").value;
    let mult = parseFloat(document.getElementById("mult").value);
    let tol = parseFloat(document.getElementById("tol").value);
    if (valueF03 != 10) {
        var operacao = (parseFloat(valueF01+valueF02+valueF03))*mult;
    }
    else {
    var operacao = (parseFloat(valueF01+valueF02)) * mult;
}
let tolerancia1 = operacao - (operacao*tol);
    let tolerancia2 = operacao + (operacao*tol);
    if (operacao >= 10**3 && operacao < 10**6) {
        operacao = (operacao/10**3) + "KΩ";
    }
    else if (operacao >= 10**6 && operacao < 10**9) {
        operacao = (operacao/10**6) + "MΩ";
     }
     if (operacao >= 10**9 && operacao < 10**12) {
        operacao = (operacao/10**3) + "BΩ";
    }
    else if (operacao >= 10**12 && operacao < 10**15) {
        operacao = (operacao/10**6) + "TΩ";
     }
     if (tolerancia1 >= 10**3 && tolerancia1 < 10**6) {
        tolerancia1 = (tolerancia1/10**3) + "KΩ";
    }
    else if (tolerancia1 >= 10**6 && tolerancia1 < 10**9) {
        tolerancia1 = (tolerancia1/10**6) + "MΩ";
     }
     if (tolerancia1 >= 10**9 && tolerancia1 < 10**12) {
        tolerancia1 = (tolerancia1/10**3) + "BΩ";
    }
    else if (tolerancia1 >= 10**12 && tolerancia1 < 10**15) {
        tolerancia1 = (tolerancia1/10**6) + "TΩ";
     }
     if (tolerancia2 >= 10**3 && tolerancia2 < 10**6) {
        tolerancia2 = (tolerancia2/10**3) + "KΩ";
    }
    else if (tolerancia2 >= 10**6 && tolerancia2 < 10**9) {
        tolerancia2 = (tolerancia2/10**6) + "MΩ";
     }
     if (tolerancia2 >= 10**9 && tolerancia2 < 10**12) {
        tolerancia2 = (tolerancia2/10**3) + "BΩ";
    }
    else if (tolerancia2 >= 10**12 && tolerancia2 < 10**15) {
        tolerancia2 = (tolerancia2/10**6) + "TΩ";
     }
    document.getElementById("resul").value = operacao;
    document.getElementById("tolera").value = (tolerancia1+" e "+ tolerancia2);
}

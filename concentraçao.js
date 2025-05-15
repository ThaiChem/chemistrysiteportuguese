function calcularMolaridade() {
        // Obter os valores de entrada
        var quantidadeMol = parseFloat(document.getElementById('QuantidadeMolinput').value);
        var volumeLitros = parseFloat(document.getElementById('Volumeinput').value);

        // Calcular a molaridade
        var molaridade = quantidadeMol / volumeLitros;

        // Exibir o resultado
        document.getElementById('resultadoMolaridade').innerText = "A molaridade é: " + molaridade.toFixed(2) + " M";
        document.getElementById('resultadoConcentracaoMassaMassa').innerText = ""; // Limpar o resultado da concentração massa-massa
    }

    function calcularConcentracaoMassaMassa() {
        // Obter os valores de entrada
        var massaSoluto = parseFloat(document.getElementById('MassaSolutoinput').value);
        var massasolucao = parseFloat(document.getElementById('Massasoluçaoinput').value);

        // Calcular a concentração massa-massa
        var concentracaoMassaMassa = massaSoluto / massasolucao;

        // Exibir o resultado
        document.getElementById('resultadoConcentracaoMassaMassa').innerText = "A concentração massa-massa é: " + concentracaoMassaMassa.toFixed(2);
        document.getElementById('resultadoMolaridade').innerText = ""; // Limpar o resultado da molaridade
    }

    function limparPagina() {
        // Limpar campos de entrada e resultados
        document.getElementById('QuantidadeMolinput').value = "";
        document.getElementById('Volumeinput').value = "";
        document.getElementById('MassaSolutoinput').value = "";
        document.getElementById('Massasoluçaoinput').value = "";
        document.getElementById('resultadoMolaridade').innerText = "";
        document.getElementById('resultadoConcentracaoMassaMassa').innerText = "";
    }
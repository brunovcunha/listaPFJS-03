window.addEventListener('load', function () {
    var select = document.getElementById("opcoes");
    var resultados = document.getElementById("resultados");

    select.addEventListener('change', function () {
        var opcaoSelecionada = select.value;

        fetch('estudantes.json').then(response => response.json())
            .then(conteudo => {
                resultados.innerHTML = '';

                switch (opcaoSelecionada) {
                    case "opcao1":
                        conteudo.estudantes.forEach(element => {
                            resultados.innerHTML += `<p>${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}</p>`;
                        });
                        break;

                    case "opcao2":
                        const estudantesHomens = conteudo.estudantes.filter(pessoa => pessoa.sexo === "M");

                        estudantesHomens.forEach(element => {
                            resultados.innerHTML += `<p>${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}</p>`;
                        });
                        break;

                    case "opcao3":
                        const estudantesMulheres = conteudo.estudantes.filter(pessoa => pessoa.sexo === "F");

                        estudantesMulheres.forEach(element => {
                            resultados.innerHTML += `<p>${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}</p>`;
                        });
                        break;

                    case "opcao4":
                        const aprovados = conteudo.estudantes.filter(pessoa => pessoa.notaBim1 + pessoa.notaBim2 >= 60.0);

                        aprovados.forEach(element => {
                            resultados.innerHTML += `<p>${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}</p>`;
                        });

                        break;

                    case "opcao5":
                        const reprovados = conteudo.estudantes.filter(pessoa => pessoa.notaBim1 + pessoa.notaBim2 < 60.0);

                        reprovados.forEach(element => {
                            resultados.innerHTML += `<p>${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}</p>`;
                        });

                        break;

                    case "opcao6":
                        const todosAprovados = conteudo.estudantes.every(pessoa => (pessoa.notaBim1 + pessoa.notaBim2) >= 60.0);

                        todosAprovados == true ? resultados.innerHTML += `<p>Todos foram aprovados</p>` : resultados.innerHTML += `<p>Nem todos foram aprovados</p>`

                        break;

                    case "opcao7":
                        const somaB1 = conteudo.estudantes.reduce((total, valor) => total + valor.notaBim1, 0);
                        const somaB2 = conteudo.estudantes.reduce((total, valor) => total + valor.notaBim2, 0);
                        var media = ((somaB1 + somaB2) / conteudo.estudantes.length).toFixed(2);

                       

                        resultados.innerHTML += `<p>Nota média da turma = ${media}</p>`;
                        break;


                    default:
                        break;
                }



            });

    });
});


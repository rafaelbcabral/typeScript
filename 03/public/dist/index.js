var planets = [];
function addPlanet(name, coordenadas, situacao, satelites) {
    var planet = {
        name: name,
        coordenadas: coordenadas,
        situacao: situacao,
        satelites: satelites
    };
    planets.push(planet);
    alert("".concat(planet.name, " foi adicionado."));
}
function valuesPlanet() {
    var name = prompt('Qual é o nome do planeta a ser registrado?');
    var coordenada1 = parseFloat(prompt('Qual é a primeira coordenada?'));
    var coordenada2 = parseFloat(prompt('Qual é a segunda coordenada?'));
    var coordenada3 = parseFloat(prompt('Qual é a terceira coordenada?'));
    var coordenada4 = parseFloat(prompt('Qual é a quarta coordenada?'));
    if (isNaN(coordenada1) || isNaN(coordenada2) || isNaN(coordenada3) || isNaN(coordenada4)) {
        alert('Uma ou mais coordenadas não são válidas. Por favor, insira números válidos.');
        return;
    }
    var coordenadas = [coordenada1, coordenada2, coordenada3, coordenada4];
    var situacao = prompt("Qual a situacao do planeta? (habitado, habitavel, inabitavel, inexplorado)");
    if (situacao === "habitado" || situacao === "habitavel" || situacao === "inabitavel" || situacao === "inexplorado") {
        var satelites = [];
        do {
            var nomeSatelite = prompt('Digite o nome de um satelite');
            satelites.push(nomeSatelite);
            var adicionarSatelite = String(prompt("Deseja adicionar mais um satelite? Digite \"Sim\" se deseja ou pressione qualquer tecla para sair."));
        } while (adicionarSatelite == "Sim");
        addPlanet(name, coordenadas, situacao, satelites);
    }
    else {
        alert('Situação inválida. Por favor, insira uma situação válida.');
    }
}
function updatePlanetSituation() {
    var name = prompt('Qual é o nome do planeta cuja situação você deseja atualizar?');
    var newSituacao = prompt('Qual a nova situação do planeta? (habitado, habitavel, inabitavel, inexplorado)');
    if (newSituacao !== "habitado" && newSituacao !== "habitavel" && newSituacao !== "inabitavel" && newSituacao !== "inexplorado") {
        alert('Situação inválida. Por favor, insira uma situação válida.');
        return;
    }
    for (var i = 0; i < planets.length; i++) {
        if (planets[i].situacao === newSituacao) {
            alert("O planeta j\u00E1 est\u00E1 na situa\u00E7ao ".concat(newSituacao, "!"));
            return;
        }
        if (planets[i].name == name) {
            planets[i].situacao = newSituacao;
            alert("A situa\u00E7\u00E3o do planeta ".concat(name, " foi atualizada para ").concat(newSituacao, "."));
            return;
        }
    }
    alert("Planeta com o nome ".concat(name, " n\u00E3o encontrado."));
}
function addSatelite() {
    var name = prompt('Qual é o nome do planeta cuja deseja adicionar um satélite?');
    var sateliteNovo = prompt('Digite o nome do satelite que quer adicionar');
    for (var i = 0; i < planets.length; i++) {
        if (planets[i].name === name) {
            if (planets[i].satelites.includes(sateliteNovo)) {
                alert("".concat(sateliteNovo, " j\u00E1 est\u00E1 cadastrado!"));
                return;
            }
            else {
                planets[i].satelites.push(sateliteNovo);
                alert("".concat(sateliteNovo, " adicionado ao planeta ").concat(name));
                return;
            }
        }
    }
    alert("Planeta com o nome ".concat(name, " n\u00E3o encontrado."));
}
function removeSatelite() {
    var name = prompt('Qual o nome do planeta que deseja remover algum satélite?');
    var sateliteParaRemover = prompt('Digite o nome do satélite que deseja remover.');
    for (var i = 0; i < planets.length; i++) {
        if (planets[i].name === name) {
            var index = planets[i].satelites.indexOf(sateliteParaRemover);
            if (index !== -1) {
                planets[i].satelites.splice(index, 1);
                alert("O sat\u00E9lite ".concat(sateliteParaRemover, " foi removido do planeta ").concat(name, "."));
                return;
            }
            else {
                alert("O sat\u00E9lite com o nome ".concat(sateliteParaRemover, " n\u00E3o foi encontrado."));
                return;
            }
        }
    }
    alert("Planeta com o nome ".concat(name, " n\u00E3o encontrado."));
}
function listPlanets() {
    var planetsInfo = "";
    planets.forEach(function (planet) {
        planetsInfo += "Planeta ".concat(planet.name, ". \n\n                 ").concat(planet.coordenadas, ".\n\n                 Situacao do ").concat(planet.name, ": ").concat(planet.situacao, ".\n\n                 Lista de Sat\u00E9lites: ").concat(planet.satelites, ".\n\n");
    });
    alert(planetsInfo);
}
function chamarTodasAsFunctions() {
    var continuar = true;
    do {
        var contador = Number(prompt("Cadastrar Planeta - 1\nAtualizar situacao de um determinado planeta - 2\nAdicionar um Sat\u00E9lite a um determinado planeta - 3\nRemover um Sat\u00E9lite de um determinado planeta - 4\nListar todos os planetas salvos - 5\nEncerrar - 6"));
        switch (contador) {
            case 1:
                valuesPlanet();
                break;
            case 2:
                updatePlanetSituation();
                break;
            case 3:
                addSatelite();
                break;
            case 4:
                removeSatelite();
                break;
            case 5:
                listPlanets();
                break;
            case 6:
                continuar = false;
                break;
            default:
                alert("Opçao inválida!");
        }
    } while (continuar);
}
chamarTodasAsFunctions();

let planets = []

function addPlanet(name: string, coordenadas: [number, number, number, number], situacao: "habitado" | "habitavel" | "inabitavel" | "inexplorado", satelites: string[]){
  let planet = {
    name,
    coordenadas,
    situacao,
    satelites
  }

  planets.push(planet);
  alert(`${planet.name} foi adicionado.`)

}

function valuesPlanet(){
  const name = prompt('Qual é o nome do planeta a ser registrado?')
  const coordenada1 = parseFloat(prompt('Qual é a primeira coordenada?'))
  const coordenada2 = parseFloat(prompt('Qual é a segunda coordenada?'))
  const coordenada3 = parseFloat(prompt('Qual é a terceira coordenada?'))
  const coordenada4 = parseFloat(prompt('Qual é a quarta coordenada?'))  
  
  if (isNaN(coordenada1) || isNaN(coordenada2) || isNaN(coordenada3) || isNaN(coordenada4)) {
    alert('Uma ou mais coordenadas não são válidas. Por favor, insira números válidos.');
    return;
  }
  
  const coordenadas: [number, number, number, number]  = [coordenada1, coordenada2, coordenada3, coordenada4]
  const situacao = prompt("Qual a situacao do planeta? (habitado, habitavel, inabitavel, inexplorado)")
  
  if (situacao === "habitado" || situacao === "habitavel" || situacao === "inabitavel" || situacao === "inexplorado") {
    const satelites = []

    do {
      const nomeSatelite = prompt('Digite o nome de um satelite');
      satelites.push(nomeSatelite);
      var adicionarSatelite = String(prompt(`Deseja adicionar mais um satelite? Digite "Sim" se deseja ou pressione qualquer tecla para sair.`));
  } while (adicionarSatelite == "Sim");

    addPlanet(name, coordenadas, situacao, satelites);
  } else{
    alert('Situação inválida. Por favor, insira uma situação válida.');
  }
}

function updatePlanetSituation() {
  const name = prompt('Qual é o nome do planeta cuja situação você deseja atualizar?');
  const newSituacao = prompt('Qual a nova situação do planeta? (habitado, habitavel, inabitavel, inexplorado)');

  if (newSituacao !== "habitado" && newSituacao !== "habitavel" && newSituacao !== "inabitavel" && newSituacao !== "inexplorado") {
    alert('Situação inválida. Por favor, insira uma situação válida.');
    return;
  }

  for (let i = 0; i < planets.length; i++) {

    if(planets[i].situacao === newSituacao){
      alert(`O planeta já está na situaçao ${newSituacao}!`)
      return
    }
    if (planets[i].name == name) {
      planets[i].situacao = newSituacao;
      alert(`A situação do planeta ${name} foi atualizada para ${newSituacao}.`);
      return;
    }
  }

  alert(`Planeta com o nome ${name} não encontrado.`);
}

function addSatelite(){
  const name = prompt('Qual é o nome do planeta cuja deseja adicionar um satélite?');
  const sateliteNovo = prompt('Digite o nome do satelite que quer adicionar');

  for (let i = 0; i < planets.length; i++) {
    if (planets[i].name === name) {
      if (planets[i].satelites.includes(sateliteNovo)) {
        alert(`${sateliteNovo} já está cadastrado!`);
        return;
      } else {
        planets[i].satelites.push(sateliteNovo);
        alert(`${sateliteNovo} adicionado ao planeta ${name}`);
        return;
      }
  }
}
  alert(`Planeta com o nome ${name} não encontrado.`);
}

function removeSatelite(){
  const name = prompt('Qual o nome do planeta que deseja remover algum satélite?')
  const sateliteParaRemover = prompt('Digite o nome do satélite que deseja remover.')

  for(let i = 0; i < planets.length; i++){
    if(planets[i].name === name){
      const index = planets[i].satelites.indexOf(sateliteParaRemover);
      if (index !== -1) {
        planets[i].satelites.splice(index, 1);
        alert(`O satélite ${sateliteParaRemover} foi removido do planeta ${name}.`);
        return
      }else{
        alert(`O satélite com o nome ${sateliteParaRemover} não foi encontrado.`);
        return
      }
    }
  }
alert(`Planeta com o nome ${name} não encontrado.`);
}


function listPlanets() {
  let planetsInfo = "";
  planets.forEach(planet => {
    planetsInfo += `Planeta ${planet.name}. \n
                 ${planet.coordenadas}.\n
                 Situacao do ${planet.name}: ${planet.situacao}.\n
                 Lista de Satélites: ${planet.satelites}.\n\n`;
  });
  alert(planetsInfo);
}
  

  function chamarTodasAsFunctions(){
    let continuar = true;
    do {
    let contador = Number(prompt(`Cadastrar Planeta - 1
Atualizar situacao de um determinado planeta - 2
Adicionar um Satélite a um determinado planeta - 3
Remover um Satélite de um determinado planeta - 4
Listar todos os planetas salvos - 5
Encerrar - 6`));
    switch(contador){
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
     alert("Opçao inválida!")
  }
}while (continuar);
}

chamarTodasAsFunctions()
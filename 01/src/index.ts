let spaceShips = []

function saveSpaceShip(name: string, pilot: string, crewLimit: number){

  let spaceShip = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }

  spaceShips.push(spaceShip)
  alert(`A nave ${spaceShip.name} foi registrada.`)
}


function addMemberInCrew(name: string, spaceShip:{name: string, crew: string[], crewLimit: number}){

  if(spaceShip.crew.length < spaceShip.crewLimit ){
    spaceShip.crew.push(name);
    alert(`${name} foi adicionado à tripulação da ${spaceShip.name}`)
  }else{
    alert("O limite de tribulantes foi excedido.")
    return;
  }
}

function OnMission(missionName: string, spaceShip:{name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean}){

  if (spaceShip.inMission) {
    return `A espaçonave ${spaceShip.name} já está em missão.`;
  }

  let crewRequired = Math.floor(spaceShip.crewLimit / 3);
  if(spaceShip.crew.length >= crewRequired ){
    spaceShip.inMission = true;
    return `A espaçonave ${spaceShip.name} com o piloto ${spaceShip.pilot} e ${spaceShip.crew.length} tripulantes iniciou a missão "${missionName}".`;
}else{
  alert(`${spaceShip.name} não pode ser enviada. Tripulação insuficiente.`)
}
}

function RegisteredSpaceShips(spaceShip: {name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean}){

  if(spaceShips.length > 0){
  return spaceShips.forEach((spaceShip) => {
    console.log(`spaceShip\n`);
  });
  }
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }
  
  spaceship = spaceShips.find((ship) => {
    return ship.name === name
  });
  
  return spaceship
}

function firstMenuOption() {
  const name = prompt('Qual é o nome da nave a ser registrada?')
  const pilot = prompt(`Qual é o nome do piloto da ${name}`)
  const crewLimit = Number.parseInt(prompt(`Quantos tripulantes a ${name} suporta?`))

  const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto: ${pilot}\nTamanho da Tripulação: ${crewLimit}`)

  if (confirmation) {
    saveSpaceShip(name, pilot, crewLimit)
  }
}

function secondMenuOption() {
  const member = prompt('Qual é o nome do tripulante?')
  const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)

  const spaceship = findSpaceship(spaceshipName)

  if (spaceship) {
    const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)

    if (confirmation) {
      addMemberInCrew(member, spaceship)
    }
  }
}

function thirdMenuOption() {
  const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')
  const nameMission = prompt('Qual o nome da missao a ser executada?')
  const spaceship = findSpaceship(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

    if (confirmation) {
      OnMission(nameMission, spaceship)
    }
  }
}

function fourthMenuOption() {
  let list = 'Naves Registradas:\n'

  spaceShips.forEach((spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }) => {
    list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `

    spaceship.crew.forEach(member => {
      list += `    - ${member}\n`
    })

  })

  alert(list)
}

/**
 * Menu
 */

let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}




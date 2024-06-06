function sendSpaceship(name: string, captain: string){
  const spaceShip = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`A nave ${spaceShip.name} comandada pelo capitao ${spaceShip.captain} foi enviada a uma missao.`)
  return spaceShip
}

function accelerate(targetSpeed:number, spaceShip: {name: string, speed: number}){
  if(spaceShip.speed > targetSpeed){
    alert(`reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
  }else if(spaceShip.speed < targetSpeed){
    alert(`Aumentando a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
  }else{
    alert(`Mantendo a velocidade da ${spaceShip.name}...`)
  }
}
  
const spaceShipName = prompt('Insira o nome da nave')

const spaceShipCaptain = prompt('Insira o nome do capitao da nave')

const currentShip = sendSpaceship(spaceShipName, spaceShipCaptain)

const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar.'))

accelerate(speed, currentShip)
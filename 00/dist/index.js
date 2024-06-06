function sendSpaceship(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceShip.name, " comandada pelo capitao ").concat(spaceShip.captain, " foi enviada a uma missao."));
    return spaceShip;
}
function accelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("reduzindo a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceShip.name, "..."));
    }
}
var spaceShipName = prompt('Insira o nome da nave');
var spaceShipCaptain = prompt('Insira o nome do capitao da nave');
var currentShip = sendSpaceship(spaceShipName, spaceShipCaptain);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar.'));
accelerate(speed, currentShip);

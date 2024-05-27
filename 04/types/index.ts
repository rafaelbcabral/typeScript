
interface Star{
  name: string
  mass: number

  createSatellite(name: string)
}

let sun: Star = {
  name: "Sun",
  mass: 943829045385093,

  createSatellite(Mercurio){
    return Mercurio
  }
}

interface Planet extends Star {
  orbitedStar: Star
  population: number
}

let earth: Planet = {
  name: "Terra",
  mass: 5.972 * Math.pow(10, 24),
  population: 8000000000,
  createSatellite: (name: string) => {
    // ...
  },

  orbitedStar: sun
}

// O mesmo não é possível com Types
// O código abaixo gera um erro
// type Planet = {
//   satellites: string[]
// }


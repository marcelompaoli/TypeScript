import {Spacecraft, Containership} from './base-ships-aula13'
import {MillenniumFalcon} from './starfighters-aula13'
import * as _ from 'lodash'
console.log(_.pad(" Typescript Examples ", 50, "="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship : Containership) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes' : 'no'}`)

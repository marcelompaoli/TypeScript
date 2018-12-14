"use strict";
exports.__esModule = true;
var base_ships_aula13_1 = require("./base-ships-aula13");
var starfighters_aula13_1 = require("./starfighters-aula13");
var _ = require("lodash");
console.log(_.pad(" Typescript Examples ", 50, "="));
var ship = new base_ships_aula13_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_aula13_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
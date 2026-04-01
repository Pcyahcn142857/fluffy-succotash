elements.evil_leafy: {
	color: "#ff0000",
	behavior: behaviors.WALL,
	reactions: {
		"vinegar": { elem1:"dead_plant", elem2:null, chance:0.035 },
		"baking_soda": { elem1:"dead_plant", elem2:null, chance:0.01 },
		"bleach": { elem1:"dead_plant", elem2:null, chance:0.05 },
		"alcohol": { elem1:"dead_plant", elem2:null, chance:0.035 },
		"mercury": { elem1:"dead_plant", elem2:null, chance:0.01 },
		"salt": { elem1:"dead_plant", elem2:null, chance:0.001 },
		"stench": { elem2:null, chance:0.25 },
		"chlorine": { stain1:"#a2bf00" }
	},
	renderer: renderPresets.PLANTCHAR,
	category:"life",
	tempHigh: 100,
	stateHigh: "dead_evil_leafy",
	tempLow: -1.66,
	stateLow: "frozen_evil_leafy",
	burn:15,
	burnTime:60,
	burnInto: "dead_evil_leafy",
	breakInto: "dead_evil_leafy",
	state: "solid",
	density: 1050,
	forceSaveColor: true
},
elements.dead_evil_leafy: {
	color: ["#ff0000"],
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"M2|M1|M2"
	],
	category:"life",
	tempHigh: 300,
	stateHigh: "fire",
	tempLow: -2,
	stateLow: "frozen_evil_leafy",
	burn:85,
	burnTime:45,
	state: "solid",
	density: 1050,
	hidden: true
},
elements.frozen_evil_leafy: {
	color: "#00bf8c",
	behavior: behaviors.WALL,
	category:"life",
	temp: -2.66,
	tempHigh: 7,
	stateHigh: "dead_evil_leafy",
	state: "solid",
	density: 1000,
	hidden: true
}

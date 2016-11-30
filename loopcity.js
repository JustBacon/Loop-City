// mommy can count to 100
var count ;

for (var count = 0; count <= 100; count++) {
	console.log("banana " + count);
}

// Noah Arc
var animalCount ;

for (var animalCount = 0; animalCount <= 5 ; animalCount++) {
	console.log("there are " + animalCount + " animals in Noahs Arc");
}

// Hip Hop Array
var partyAnimals = [1,2,3,4,5];

for (var a = 0; a <= 4; a++) {
	console.log(partyAnimals[a]);
}

// Merlin's Battle Weapon
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
	wizard : 'Merlin',
	weapon : weaponChest[2],
	power : 30
}

function stuff(a){
	if(a == "Sorcerer's stone"){
		console.log(hero.wizard + ' shall slay the dragon with the ' + hero.weapon);
	}else{
		hero.weapon = weaponChest[1]
		console.log(hero.wizard + ' is ready for war with the ' + hero.weapon);
	}
}
stuff(hero.weapon)


//epikcontroller.js

var app =angular.module('myAttr', ['ngSanitize']);

app.controller('charSpecs', function($scope) {
//core character specs for feeding out data. Will eventually move this to php file?
//
$scope.characterCore =
  {name: "Hikaru Mori",
  age: 23,
  gender: "Female",
  race: "Human/Werewolf",
  types: "Cute/Hero",
  roots: "Secretly Royalty",
  origin: "Glassheart",
  stress: "Break Things",
  weapons: {type: "Dual Daggers",
      weapon1: {name: "Minute", category: "Dagger", runeslots: 3, gemslots: 5, runesused: 1, gemsused: 5, materials: "none/normal"},
  weapon2: {name: "Hour", category: "Dagger", runeslots: 3, gemslots: 4, runesused: 3, gemsused: 4, materials: "none/normal"} },
  traits: ["Natural Cook", "Species: Werewolf", "Close Ties", "Handy", "Secretly Royalty"],
  magic: "Muttle",
fightstyle: "Assassin(ish)",
colors: {hair: "Gold",
        eyes: "Purple",
        skin: "Pale",
        outfit: "Blue and Black"}};
console.log($scope.characterCore.name);



});


app.controller('attrCtrl', function($scope) {
    $scope.attribute = [
    {name: "Select One", stat: null, bonus: null},
    {name: "Athletics", stat: 32, bonus: 1},
    {name: "Affection", stat: 44, bonus: 13},
    {name: "Skill", stat: 50, bonus: 30},
    {name: "Cunning", stat: 31, bonus: 8},
    {name: "Will", stat: 35, bonus: 17},
    {name: "Luck", stat: 30, bonus: 3}
  ];
  $scope.myAttrib = $scope.attribute[0]; //should be select one. default starting value

$scope.actions = [
  {name: "Select One", bonus: null},
  {name: "Attack", bonus: 233},
  {name: "Defense", bonus: 195},
  {name: "Magic Control", bonus: 198},
  {name: "Magic Attack", bonus: 217},
  {name: "Awareness", bonus: 10},
  {name: "Steal", bonus: 7},
  {name: "Dismantle", bonus: 5},
  {name: "Flat Roll (No Bonus)", bonus: null}
];
$scope.myAction = $scope.actions[0]; //sets default to select one.
// console.log($scope.myAction);


//so the hope is that we just make one row with two dropdowns...
//one that changes the bonus depending on if its attack, defense, awareness, or flat...
//and the other to determine the stat. The defaults are null.
//We're eliminating markup repitition.

//cute little total function.
//total = our stat + the stat bonus + the die's roll value +the bonus amount for your action
 $scope.rollCalc = function(){
    $scope.dievalue = Math.floor(Math.random()*20) +1;
  function calc(){
     $scope.theTotal =
     $scope.myAttrib.stat +
     $scope.myAttrib.bonus +
     $scope.dievalue +
     $scope.myAction.bonus;
   };
     calc();
  };
});

app.controller('monsterCtrl', function($scope){

$scope.monster = {
  hp: 350,
  stress: 100,
  atk: 150,
  def: 200
}

});


app.controller('rollCtrl', function($scope){
  //So we take the last value as supplied by the last roll function fired
  // and we append it as a running 'log' of what we rolled.
  $scope.lastRoll = ""; //default is blank
 function appendRoll(lastValue, lastdie){
    $scope.lastRoll = "d" + lastdie + ":  "+ lastValue + '<br>' + $scope.lastRoll;
    }

    //Roll dice using a number passed in to the function for whichever die number we need.
    //1 function instead of 20.

    $scope.rollDice = function(num){
      var die = num;
      $scope.dValue = Math.floor(Math.random()*die) +1;
      appendRoll($scope.dValue, die);
    }


});

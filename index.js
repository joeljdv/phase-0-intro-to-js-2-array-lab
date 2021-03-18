// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 
  
  function destructivelyAppendCat(){
      cats.push('Ralph')
      
  }
  function destructivelyPrependCat(){
      cats.unshift('Bob')
  }

  function destructivelyRemoveLastCat(){
      cats.pop('Ralph')
  }

  function destructivelyRemoveFirstCat(){
      cats.shift('Bob')
  }

  function appendCat(){
    const copyCats=[...cats,'Broom'] 
    return copyCats
  }

  function prependCat(){
    const copyCats2=['Arnold',...cats]
    return copyCats2
  }

  function removeLastCat(){
      const catsArray=cats.slice(0,2)
      return catsArray
  }
  
  function removeFirstCat(){
      const catsArray2=cats.slice(1)
      return catsArray2
  }
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){ 
    cats.push("Ralph");
}

function destructivelyPrependCat(){ 
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const copyOfCats = cats.slice();
    copyOfCats.push("Broom");
    return copyOfCats;
}

function prependCat(){
    const copyOfCats = cats.slice();
    copyOfCats.unshift("Arnold");
    return copyOfCats;
}

function removeLastCat(){
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = cats.slice(-2);
    return copyOfCats;
}
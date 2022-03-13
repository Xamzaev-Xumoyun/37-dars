var elList = document.querySelector(".list")


for( var film of pokemons){
  var newItem = document.createElement("li");
  var newImg = document.createElement("img");
  var newDiv = document.createElement("div");
  
  var newNumber = document.createElement("number");
  var newHeader = document.createElement("h3");
  var newWeight = document.createElement("span");
  var newCandy = document.createElement("p");
  var newTime = document.createElement("time");
  var newType = document.createElement("ul");
  

for(var newTypeItem of film.type){
var newListItem = document.createElement("li");
newListItem.textContent = newTypeItem
newType.appendChild(newListItem);
}

  newImg.setAttribute("src" , film.img);
  
  newNumber.textContent =  film.num ;
  newHeader.textContent =  film.name ;
  newWeight.textContent = film.weight;
  newCandy.textContent = film.candy_count;
  newTime.textContent = film.spawn_time;



  newItem.setAttribute("class" , "list__item" );
  newImg.setAttribute("class" , "list__img" );
  newNumber.setAttribute("class" , "list__number" );
  newHeader.setAttribute("class" , "list__header" );
  newWeight.setAttribute("class" , "list__weight" );
  newCandy.setAttribute("class" , "list__candy" );
  newTime.setAttribute("class" , "list__time" );
  newDiv.setAttribute("class" , "list__box");
  newType.setAttribute("class" , "list__list");
  newListItem.setAttribute("class" , "list__list-box");
  
  
  



  newItem.appendChild(newImg);
  newDiv.appendChild(newNumber);
  newDiv.appendChild(newHeader);
  newDiv.appendChild(newWeight);
  newDiv.appendChild(newCandy);
  newDiv.appendChild(newTime);
  newDiv.appendChild(newType);  
  

  newItem.appendChild(newDiv)


   elList.appendChild(newItem);
     
}




var json = false;

fetch("http://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/item.json").then(res => res.json()).then(xhr => {
  json = xhr;
  
  for(prop in xhr.data){
      document.getElementById("itens").innerHTML += "<img class='icon' src='http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/"+ json.data[prop].image.full +"' title='"+ json.data[prop].name +"' id='"+ prop +"' onclick='showDetails(this.id)' style='cursor: pointer'>";
    }
});

function showDetails(id){
  document.getElementById("info").innerHTML = "";
  document.getElementById("info").innerHTML += "<div class='info'><center><img class='icon' src='http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/"+ json.data[id].image.full +"'></center><br>"+ json.data[id].description + "</div>"
  document.getElementById("outro").innerHTML = ""
  
  try{
    for(let i = 0; i < json.data[id].into.length; i++){
      document.getElementById("outro").innerHTML += "<img class='icon' src='http://ddragon.leagueoflegends.com/cdn/10.18.1/img/item/"+ json.data[id].into[i] +".png' title='"+ json.data[json.data[id].into[i]].name +"' id='"+ json.data[id].into[i] +"' onclick='showDetails(this.id)' style='cursor: pointer'>";
    }
  } catch(e){
    console.clear();
  }
}
const reqChamp = new XMLHttpRequest() 
reqChamp.open("GET", "http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/champion.json", true)

reqChamp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let champions = JSON.parse(this.responseText)
        

    for(prop in champions.data) {
        document.getElementById("seleChamp").innerHTML += "<option value='" + prop + "'>" + prop + "</option>"
    }
}

}

reqChamp.send()


var dataObj;
var obj = {}
var armaduras = 0
var armorperlevel = 0
var danoataque = 0
var attackdamageperlevel = 0
var raiodeataque = 0
var velocidadedeataque = 0
var attackspeedperlevel = 0
var crit = 0
var critperlevel = 0
var hp = 0
var hpperlevel = 0
var hpregenperlevel = 0
var mp = 0
var mpperlevel = 0
var movespeed = 0
var mpregen = 0
var mpregenperlevel = 0
var  spellblock = 0
var spellblockperlevel = 0
var mostrarSlides = false
var slideIndex = 0




function mostrar(name){

const repChamp = new XMLHttpRequest() 

repChamp.open("GET", "http://ddragon.leagueoflegends.com/cdn/10.18.1/data/pt_BR/champion/" + name + ".json")

repChamp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        dataObj = data.data
        for(req in dataObj){
        console.log(dataObj[req].stats)
        obj = {
            armaduras: dataObj[req].stats.armor,
            armorperlevel: dataObj[req].stats.armorperlevel,
            danoataque: dataObj[req].stats.attackdamage,
            attackdamageperlevel: dataObj[req].stats.attackdamageperlevel,
            raiodeataque: dataObj[req].stats.attackrange,
            velocidadeataque: dataObj[req].stats.attackspeed,
            attackspeedperlevel: dataObj[req].stats.attackspeedperlevel,
            crit: dataObj[req].stats.crit,
            critperlevel: dataObj[req].stats.critperlevel,
            hp: dataObj[req].stats.hp,
            hpperlevel: dataObj[req].stats.hpperlevel,
            hpregenperlevel: dataObj[req].stats.hpregenperlevel,
            velocidademovimento: dataObj[req].stats.movespeed,
            mp: dataObj[req].stats.mp,
            mpperlevel: dataObj[req].stats.mpperlevel,
            movespeed: dataObj[req].stats.movespeed,
            mpregen: dataObj[req].stats.mpregen,
            mpregenperlevel: dataObj[req].stats.mpregenperlevel,
            spellblock: dataObj[req].stats.spellblock,
            spellblockperlevel: dataObj[req].stats.spellblockperlevel,

          

    
    
       
        }

        const descObj = document.getElementById("champDesc")
        
        descObj.innerHTML = "<div id='descCamp'><h2>Biografia: </h2><p>" + dataObj[name].lore + "</p></div>"
        

        soma(1)
        ImgCamp(dataObj, name)
        mostrarSlides = true
        showSlides(slideIndex)

        showSpells(name)
    }



    
    }

}
 repChamp.send()
}


function showDetails( i, skill) {
    let name = aux
    var descSpell = document.getElementById("descSpell")
    descSpell.innerHTML = ""
    
      if(skill == 1) descSpell.innerHTML += "<div class='descSpell'><h3>" + dataObj[name].spells[i].name + "</h3><img class='icon' src='https://ddragon.leagueoflegends.com/cdn/10.18.1/img/spell/" + dataObj[name].spells[i].image.full + "'><p>" + dataObj[name].spells[i].description + "</p></div>"

    else if(skill == 2) descSpell.innerHTML += "<div class='descSpell'><h3>" + dataObj[name].passive.name + "</h3><img class='icon' src='https://ddragon.leagueoflegends.com/cdn/10.18.1/img/passive/" + dataObj[name].passive.image.full + "'><p>" + dataObj[name].passive.description + "</p></div>"

}

var aux  
function showSpells(name) {
    aux = name
    var bscSpell = document.getElementById("spells")
    bscSpell.innerHTML = ""
    
    for(let i = 0 ; i < dataObj[name].spells.length; i++){
        console.log(dataObj[name].spells[i])
        bscSpell.innerHTML += "<img class='icon' src='https://ddragon.leagueoflegends.com/cdn/10.18.1/img/spell/" + dataObj[name].spells[i].image.full + "' onclick='showDetails("+ i +" , 1)' style='cursor: pointer; width: 64px'>"
    }
    bscSpell.innerHTML += "<img class='icon' src='https://ddragon.leagueoflegends.com/cdn/10.18.1/img/passive/" + dataObj[name].passive.image.full + "' onclick='showDetails(1, 2)' style='cursor: pointer; width: 64px'>"
    
}

function level(nivel){
    
    armorperlevel = ((nivel - 1) * obj.armorperlevel)
    attackdamageperlevel = ((nivel - 1) * obj.attackdamageperlevel)
    attackspeedperlevel = ((nivel - 1) * obj.attackspeedperlevel)
    critperlevel = ((nivel - 1) * obj.critperlevel)
    hpperlevel = ((nivel - 1) * obj.hpperlevel)
    hpregenperlevel = ((nivel - 1) * obj.hpregenperlevel)
    mpperlevel = ((nivel - 1) + obj.mpperlevel)
    mpregenperlevel = ((nivel - 1) * obj.mpregenperlevel)
    spellblockperlevel = ((nivel - 1) * obj.spellblockperlevel)

   soma(nivel)
}

function soma(nivel){
    document.getElementById("infCamp").innerHTML = "<div class='infCamp'><h2>Escolha seu nível:</h2><input value='" + nivel + "' type='number' min='1' max='18' placeholder = '1-20' id='somanivel' onchange = 'level(this.value) '><br><p>Vida: " + obj.hpperlevel + hpperlevel.toFixed(2) + "</p>" + "<p>Armadura: " + obj.armorperlevel + armorperlevel.toFixed(2) + "</p>" + "<p>Ataque: " + obj.attackdamageperlevel + attackdamageperlevel.toFixed(2) + "</p>" + "<p>Velocidade de Ataque: " + obj.attackspeedperlevel + attackspeedperlevel.toFixed(2) + "</>" + "<p>Raio de Ataque: " + obj.raiodeataque + raiodeataque.toFixed(2) + "</p>" + "<p>Nivel Criticio: " + obj.critperlevel + critperlevel.toFixed(2) + "</p>" + "<p>Regenaração de Vida: "+ obj.hpregenperlevel + hpregenperlevel.toFixed(2) + "</p>" + "<p>MP: " + obj.mpperlevel + mpperlevel.toFixed(2) + "</p>" + "<p>Velocidade: " + obj.movespeed + movespeed.toFixed(2) + "</p>" + "<p>Resistência: " + obj.spellblockperlevel + spellblockperlevel.toFixed(2) + "</p></div>"
}




function ImgCamp(json, champion) {
       let skins = "<div class='slideshow-container'>";  
    for(let i = 0; i < json[champion].skins.length;i++){
        let name = {nome: json[champion].skins[i].name, 
  
         imagem: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ champion +"_"+ json[champion].skins[i].num +".jpg"}
         if(i == 0) name.nome = champion
       skins += "<div class= mySlides fade'><div class='numbertext'>" + (i+1) +"/" + (json[champion].skins.length) + "</div><img id='champ' src="+ name.imagem + ">" + "<div class='text'>" + name.nome + "</div></div>"
        
       

        }

        skins += "<a class='prev' onclick='showSlides(slideIndex += -1)'>&#10094;</a><a class='next' onclick='showSlides(slideIndex += 1)'>&#10095;</a></div>"
       console.log("img")

       document.getElementById("imgCamp").innerHTML = skins
    }

    
function showSlides(n){
        if(mostrarSlides == true){
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            
            if(n > slides.length) slideIndex = 1;
            if(n < 1) slideIndex = slides.length;
            
            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }
            
            for(i = 0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }
            
            slides[slideIndex-1].style.display = "block";
        }
    }

      var slideIndex = 1


   
   


              
      













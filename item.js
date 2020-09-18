const reqChamp = new XMLHttpRequest() 

reqChamp.open("GET", "http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/item.json", true)

reqChamp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let champions = JSON.parse(this.responseText)
        

        for(let i = 0; i < champions.length; i++) {
        document.getElementById("tabela").innerHTML += "<tr><td>" + champions[i].name + "</td>"
    }
}



reqChamp.send()
}
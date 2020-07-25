var obj = [{
    "value": "card__hueBlue'>"
}, {
    
    "value": "card__brightBlue'>"
}, {
    
    "value": "card__darkBlue'>"
}, {
    
    "value": "card__colorGrey'>"
}];

function loadCards(doShuffle){
    var index = [1, 2, 3, 4, 5, 6,7,8,9];
    var colorIndex = [0,1,2,3];
    if(doShuffle == true){
        index.sort(function(a, b){return 0.5 - Math.random()});
        colorIndex.sort(function(a, b){return 0.5 - Math.random()});
    }
    document.getElementById('cardsCnt').innerHTML='';
    var cardsCnt = document.getElementById('cardsCnt');
    var j =0;
    for (var i = 0; i < index.length; i++) {
        if(j==4){j=0}
        var div = "";
        div += "<li class='col-sm-4 card " +obj[colorIndex[j]].value.toString() + index[i] + "</li>";
        cardsCnt.innerHTML += div;
        j++;
    }
}
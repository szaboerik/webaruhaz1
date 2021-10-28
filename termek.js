var receptekTomb = [];

$(function () {


        receptMegjelenit();



    $.ajax(
            {url: "termekek.json", success: function (result) {
                    console.log(result);
                    receptekTomb = result;                  
                    receptMegjelenit();
           
                }});

});




function receptMegjelenit() {
    $("article").empty();
    for (var item in receptekTomb) {
        var receptek = "<div><h3>" + receptekTomb[item]["nev"] + " </h3\n\
                        <img src='" + receptekTomb[item]['kep'] + "' alt='" + receptekTomb[item]
                        ['kep'].slice(6, receptekTomb[item]['kep'].length - 4) + "' >\n\
                          <p>" + receptekTomb[item]["leiras"] + "</p>\n\
                          <span>" + receptekTomb[item]["ar"] + "</span>\n\
                           </div>";
        $("article").append("<div id='" + receptekTomb[item]["nev"] + "'>" + receptek + "</div>");

    }

}

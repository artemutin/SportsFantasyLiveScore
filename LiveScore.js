/**
 * Created by chichi on 11/5/15.
 */
$( document ).ready(function() {
    alert("Fuck you again");
    var HOVER_DELAY = 1000;
    //show player info on hover of <i> icon
    $("i.ico.info2").hover(function(){
        setTimeout(function(wasHovered, cssSelector){
            var nowHovered = $(cssSelector);
            wasHovered.is(nowHovered) ? nowHovered.trigger('click') : null;

        }, HOVER_DELAY, $("i:hover"), "i:hover");
    },function(){
        }
    )
    //close player info overlay just by click to empty space
    $(".overlay").click(function(){
        $(".but.close-x").click();
    })
    //close player info overlay just by left hover of block
    $(".person-popup").delay(HOVER_DELAY).hover(function(){

    }, function(){
        $(".but.close-x").click();
    })

    console.log($(".field-container i.ico.info2").map(function(index, elm){
        return elm.getAttribute("data-id");
    }).get().toString())

    getPlayerName = function(data_id){
        var name;
        var url = "http://www.sports.ru/fantasy/basketball/player/info/150/"
        $.get(url+data_id+".html", null, function(data){
            var profileURL = $( data ).find("a.go-to-page").attr("href");
            return $.get(profileURL, null, function(data){
                name = $( data ).find("div.short-info div.descr").html()//sss;
            });
        });
        return name;
    }

    $("i.ico.info2").click(function(){
      var data_id = $("i.ico.info2").attr("data-id");
      getPlayerName(data_id);
    })

    //stat table
    var matchRows = $("div.stat.mB20 > table.stat-table tr");
    function scanMatches(rows, myTeams){

    }


})


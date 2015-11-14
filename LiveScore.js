$({
    var playerBoxes = $("ins.player.hold");

    var players = playerBoxes.map(function(idx, elem){
        elem = $(elem);
        return {"team" : elem.find("img.t-shirt").attr("title"),
            "data-id" : elem.find("i.ico.info2").attr("data-id"),
            "elem" : elem
        }
    });

    var matches = $("div.stat.mB20 table.stat-table tr").map(function(idx, elem){
        elem = $(elem);
        return {"dateStr" : elem.find("td").first().text(),
            "homeTeam" : elem.find("td.owner-td").text().trim(),
            "awayTeam" : elem.find("td.guests-td").text().trim()
        }
    });

    function getPlayerNumber(player){
        var url = "http://www.sports.ru/fantasy/basketball/player/info/150/"+player["data-id"]+".html";
        var playerNum;
        $.get(url, null, function(htmlData,resp){
            console.log(resp)
            playerNum = $(htmlData).find(".profile-table tr").first().find("td").first().text();
            console.log(playerNum)
            player.num = new RegExp(/\([\D]*([\d]+)[\D]*\)/).exec(playerNum)[1];
        }, "html");
        return playerNum;
    };

});
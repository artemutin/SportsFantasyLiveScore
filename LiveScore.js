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
        if (idx == 0){
            return;
        }
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
    }

    function timeBeforeStart(match){
        var MoscowTimeToUtc = 3*60*60*1000;
        var splitDate = match.dateStr.split( /[\.\ :]/);
        return Date.now() - new Date(Date.UTC(2015, splitDate[1]-1, splitDate[0], splitDate[2], splitDate[3]) - MoscowTimeToUtc);
    }

    function nextMatch(player){
        for (i=0; i < matches.length; ++i){
            if ( (matches[i].awayTeam == player.team || matches[i].homeTeam == player.team) &&
            timeBeforeStart(matches[i]) < 0){
                player.nextMatch = matches[i];
                return;
            }
        }
        player.nextMatch = null;

    }

    //form a string with time, remaining til the game
    function countdownText(time){
        var minutes = time/1000/60;
        var hours = minutes/60;
        var time;
        if (Math.abs(hours) > 1){
            var letter = "h";
            time = hours;
        }else{
            letter = "m";
            time = minutes;
        }
        with (Math) {
            return round(abs(time))+ letter
        };
    }

    function initCountdown(){
        function countdownCallback(span, time, match){
            var text = countdownText(time);
            span.text( text );
            var delay = text[length.text - 1] == "h" ? 30*60*1000 : 1*60*1000;
            time += delay;
            //if game is in future
            if (time < 0){
                match.countdownTimeoutID = setTimeout(countdownCallback, delay, span, time, match);
            }else{
                //set state and begin a translation
                match.countdownTimeoutID = null;
            }
        }
        //find next match for a player
        players.get().forEach(nextMatch);
        //for each player box, set up a label
        players.get().forEach(function(player, idx){
            if (player.elem.find("span.live-score").length > 0){
                //we already have a countdown timer
                return;
            }else{
                var span = $("<span class='live-score'></span>");
                if (player.nextMatch == null){
                    span.text("NW");
                }else{
                    var time = timeBeforeStart(player.nextMatch);
                    countdownCallback(span, time, player.nextMatch);
                }
                span.prependTo(player.elem);
            }
        });
    }

    function startTranslation(player, elem){
        //player has nextMatch, which we will use
        //iside elem's text or html we put results
    }
});
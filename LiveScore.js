$(document).ready(function(){
    //this is html elements with player info on `court`
    var playerBoxes = $("ins.player.hold");

    //player objects to work with
    var players = playerBoxes.map(function(idx, elem){
        elem = $(elem);
        return {"team" : elem.find("img.t-shirt").attr("title"),
            "data-id" : elem.find("i.ico.info2").attr("data-id"),
            "elem" : elem
        }
    });

    //this is list of matches, which was not played or aggregated by sports.ru in the bottom of page
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
    //this is hash of nba calendar, hashed by date
    var nbaMatches = {};

    initCountdown();
    getMatchLink(matches[0]);

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

    function callback(data){
        console.log("in")
        console.log(data)
    }


    function getMatchLink(match){
        var url = "http://data.nba.com/jsonp/5s/json/cms/noseason/scoreboard/";//20151116/games.json
        //from comparison of match times on nba.com and sports.ru
        var timeDiff = 8*60*60*1000;//hours
        var splitDate = match.dateStr.split( /[\.\ :]/);
        var date = new Date(Date.UTC(2015, splitDate[1]-1, splitDate[0], splitDate[2]) - timeDiff) ;
        url += date.getUTCFullYear()
        url += (date.getUTCMonth()+1)
        url += date.getUTCDate();
        url += "/games.json";

        function callback( response ){
            var parInd = response.indexOf('{');
            var matches = $.parseJSON(response.slice(parInd, -2));
            var date = matches.games.sports_meta.date_time;
            //put matches to cache
            nbaMatches[date] = nbaMatches[date] || matches;
            console.log(matches)
            var homeID = Static.getTeamID({city: match.homeTeam, lang: "ru"});
            var awayID = Static.getTeamID({city: match.awayTeam, lang: "ru"});
            var nbaMatch = null;
            var gamesArray = matches.games.game;
            for ( i=0; i < gamesArray.length; ++i){
                if (gamesArray[i].home.id == homeID && gamesArray[i].visitor.id == awayID){
                    nbaMatch["id"] = gamesArray[i].id;
                    nbaMatch["date"] = gamesArray[i].date;
                    break;
                }
            }
        }

        $.ajax({
            url: url,
            dataType: "text",//it's actually jsonp, but i got problems with scopes, so i give up
            success: callback
        });
    }
})
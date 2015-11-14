/**
 * Created by chichi on 11/9/15.
 */
//Static values storage
var Static= new function(){
    this.teams = [
        {"is_nba_team":true,"team_name":"Atlanta","team_nickname":"Hawks","team_code":"hawks","team_abbrev":"ATL","city":"Atlanta","state":"GA","team_short_name":"Atlanta","team_id":1610612737,"conference":"East","division_id":"Southeast"}
        ,{"is_nba_team":true,"team_name":"Boston","team_nickname":"Celtics","team_code":"celtics","team_abbrev":"BOS","city":"Boston","state":"MA","team_short_name":"Boston","team_id":1610612738,"conference":"East","division_id":"Atlantic"}
        ,{"is_nba_team":true,"team_name":"Brooklyn","team_nickname":"Nets","team_code":"nets","team_abbrev":"BKN","city":"Brooklyn","state":"NY","team_short_name":"Brooklyn","team_id":1610612751,"conference":"East","division_id":"Atlantic"}
        ,{"is_nba_team":true,"team_name":"Charlotte","team_nickname":"Hornets","team_code":"hornets","team_abbrev":"CHA","city":"Charlotte","state":"NC","team_short_name":"Charlotte","team_id":1610612766,"conference":"East","division_id":"Southeast"}
        ,{"is_nba_team":true,"team_name":"Chicago","team_nickname":"Bulls","team_code":"bulls","team_abbrev":"CHI","city":"Chicago","state":"IL","team_short_name":"Chicago","team_id":1610612741,"conference":"East","division_id":"Central"}
        ,{"is_nba_team":true,"team_name":"Cleveland","team_nickname":"Cavaliers","team_code":"cavaliers","team_abbrev":"CLE","city":"Cleveland","state":"OH","team_short_name":"Cleveland","team_id":1610612739,"conference":"East","division_id":"Central"}
        ,{"is_nba_team":true,"team_name":"Dallas","team_nickname":"Mavericks","team_code":"mavericks","team_abbrev":"DAL","city":"Dallas","state":"TX","team_short_name":"Dallas","team_id":1610612742,"conference":"West","division_id":"Southwest"}
        ,{"is_nba_team":true,"team_name":"Denver","team_nickname":"Nuggets","team_code":"nuggets","team_abbrev":"DEN","city":"Denver","state":"CO","team_short_name":"Denver","team_id":1610612743,"conference":"West","division_id":"Northwest"}
        ,{"is_nba_team":true,"team_name":"Detroit","team_nickname":"Pistons","team_code":"pistons","team_abbrev":"DET","city":"Detroit","state":"MI","team_short_name":"Detroit","team_id":1610612765,"conference":"East","division_id":"Central"}
        ,{"is_nba_team":true,"team_name":"Golden State","team_nickname":"Warriors","team_code":"warriors","team_abbrev":"GSW","city":"Golden State","state":"CA","team_short_name":"Golden State","team_id":1610612744,"conference":"West","division_id":"Pacific"}
        ,{"is_nba_team":true,"team_name":"Houston","team_nickname":"Rockets","team_code":"rockets","team_abbrev":"HOU","city":"Houston","state":"TX","team_short_name":"Houston","team_id":1610612745,"conference":"West","division_id":"Southwest"}
        ,{"is_nba_team":true,"team_name":"Indiana","team_nickname":"Pacers","team_code":"pacers","team_abbrev":"IND","city":"Indiana","state":"IN","team_short_name":"Indiana","team_id":1610612754,"conference":"East","division_id":"Central"}
        ,{"is_nba_team":true,"team_name":"Los Angeles","team_nickname":"Clippers","team_code":"clippers","team_abbrev":"LAC","city":"Los Angeles","state":"CA","team_short_name":"L.A. Clippers","team_id":1610612746,"conference":"West","division_id":"Pacific"}
        ,{"is_nba_team":true,"team_name":"Los Angeles","team_nickname":"Lakers","team_code":"lakers","team_abbrev":"LAL","city":"Los Angeles","state":"CA","team_short_name":"L.A. Lakers","team_id":1610612747,"conference":"West","division_id":"Pacific"}
        ,{"is_nba_team":true,"team_name":"Memphis","team_nickname":"Grizzlies","team_code":"grizzlies","team_abbrev":"MEM","city":"Memphis","state":"TN","team_short_name":"Memphis","team_id":1610612763,"conference":"West","division_id":"Southwest"}
        ,{"is_nba_team":true,"team_name":"Miami","team_nickname":"Heat","team_code":"heat","team_abbrev":"MIA","city":"Miami","state":"FL","team_short_name":"Miami","team_id":1610612748,"conference":"East","division_id":"Southeast"}
        ,{"is_nba_team":true,"team_name":"Milwaukee","team_nickname":"Bucks","team_code":"bucks","team_abbrev":"MIL","city":"Milwaukee","state":"WI","team_short_name":"Milwaukee","team_id":1610612749,"conference":"East","division_id":"Central"}
        ,{"is_nba_team":true,"team_name":"Minnesota","team_nickname":"Timberwolves","team_code":"timberwolves","team_abbrev":"MIN","city":"Minnesota","state":"MN","team_short_name":"Minnesota","team_id":1610612750,"conference":"West","division_id":"Northwest"}
        ,{"is_nba_team":true,"team_name":"New Orleans","team_nickname":"Pelicans","team_code":"pelicans","team_abbrev":"NOP","city":"New Orleans","state":"LA","team_short_name":"New Orleans","team_id":1610612740,"conference":"West","division_id":"Southwest"}
        ,{"is_nba_team":true,"team_name":"New York","team_nickname":"Knicks","team_code":"knicks","team_abbrev":"NYK","city":"New York","state":"NY","team_short_name":"New York","team_id":1610612752,"conference":"East","division_id":"Atlantic"}
        ,{"is_nba_team":true,"team_name":"Oklahoma City","team_nickname":"Thunder","team_code":"thunder","team_abbrev":"OKC","city":"Oklahoma City","state":"OK","team_short_name":"Oklahoma City","team_id":1610612760,"conference":"West","division_id":"Northwest"}
        ,{"is_nba_team":true,"team_name":"Orlando","team_nickname":"Magic","team_code":"magic","team_abbrev":"ORL","city":"Orlando","state":"FL","team_short_name":"Orlando","team_id":1610612753,"conference":"East","division_id":"Southeast"}
        ,{"is_nba_team":true,"team_name":"Philadelphia","team_nickname":"76ers","team_code":"sixers","team_abbrev":"PHI","city":"Philadelphia","state":"PA","team_short_name":"Philadelphia","team_id":1610612755,"conference":"East","division_id":"Atlantic"}
        ,{"is_nba_team":true,"team_name":"Phoenix","team_nickname":"Suns","team_code":"suns","team_abbrev":"PHX","city":"Phoenix","state":"AZ","team_short_name":"Phoenix","team_id":1610612756,"conference":"West","division_id":"Pacific"}
        ,{"is_nba_team":true,"team_name":"Portland","team_nickname":"Trail Blazers","team_code":"blazers","team_abbrev":"POR","city":"Portland","state":"OR","team_short_name":"Portland","team_id":1610612757,"conference":"West","division_id":"Northwest"}
        ,{"is_nba_team":true,"team_name":"Sacramento","team_nickname":"Kings","team_code":"kings","team_abbrev":"SAC","city":"Sacramento","state":"CA","team_short_name":"Sacramento","team_id":1610612758,"conference":"West","division_id":"Pacific"}
        ,{"is_nba_team":true,"team_name":"San Antonio","team_nickname":"Spurs","team_code":"spurs","team_abbrev":"SAS","city":"San Antonio","state":"TX","team_short_name":"San Antonio","team_id":1610612759,"conference":"West","division_id":"Southwest"}
        ,{"is_nba_team":true,"team_name":"Toronto","team_nickname":"Raptors","team_code":"raptors","team_abbrev":"TOR","city":"Toronto","state":"ON","team_short_name":"Toronto","team_id":1610612761,"conference":"East","division_id":"Atlantic"}
        ,{"is_nba_team":true,"team_name":"Utah","team_nickname":"Jazz","team_code":"jazz","team_abbrev":"UTA","city":"Utah","state":"UT","team_short_name":"Utah","team_id":1610612762,"conference":"West","division_id":"Northwest"}
        ,{"is_nba_team":true,"team_name":"Washington","team_nickname":"Wizards","team_code":"wizards","team_abbrev":"WAS","city":"Washington","state":"DC","team_short_name":"Washington","team_id":1610612764,"conference":"East","division_id":"Southeast"}
    ];
    ruTeamsByCity = new Hash();
    ["Атланта","Бостон","Бруклин","Шарлотт", "Чикаго", "Кливленд", "Даллас", "Денвер", "Детройт", "Голден Стэйт", "Хьюстон", "Индиана", "Клипперс", "Лейкерс"
        ,"Мемфис", "Майами", "Милуоки", "Миннесота", "Новый Орлеан", "Нью-Йорк", "Оклахома", "Орландо", "Филадельфия", "Финикс", "Портленд", "Сакраменто", "Торонто"
        , "Юта", "Вашингтон"].forEach(function(city, index){
            ruTeamsByCity[city] = index;
        });
    this.ruTeamsByCity = ruTeamsByCity;

    this.getTeamID = function(queryObj){
        if (queryObj["city"] && queryObj["lang"] === "ru"){
            var city = this.ruTeamsByCity[queryObj["city"]];
            if (city === null){
                throw "Этого города нет в словаре среди команд НБА: " + queryObj[city];
            }
            return this.teams[ city ];
        }
    }
}()
//teams.sports_content.teams.team.filter(function(x){return x.is_nba_team;})

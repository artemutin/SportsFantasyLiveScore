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
})
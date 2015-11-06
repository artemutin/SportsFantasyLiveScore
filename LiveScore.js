/**
 * Created by chichi on 11/5/15.
 */
$( document ).ready(function() {
    alert("Fuck you again")
    $("i").hover(function(){
        console.log("in")
        $("i:hover").trigger("click")
    },function(){
            console.log("out")
        }
    )
    $(".overlay").click(function(){
        $(".but.close-x").click();
    })
})
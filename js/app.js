/**
 * Created by pc on 2015-11-15.
 */

$(function(){
    var arrowBox = $("ul.arrow_box")
    var menuButton = arrowBox.parent();

    arrowBox.hide();
    menuButton.mouseenter(function(){
        arrowBox.show();
    });
    menuButton.mouseleave(function(){
        arrowBox.hide();
    });

    var chairs = $(".chair");
    var chairText = $(".offert_text");

    chairs.each(function(index){
        chairs.eq(index).mouseenter(function(){
            chairText.hide();
        });
        chairs.eq(index).mouseleave(function(){
            chairText.show();
        })
    });
});
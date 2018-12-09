//Strike out todos by clicking

$("li").on("click", function(){
   $(this).toggleClass("completed");
});

$("span").on("click", function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});


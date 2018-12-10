//Strike out individual todos by clicking
//listener added to entire ul parent so that new lis can be targeted 
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});
//fades out and removes completed todos
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    //prevent bubbling up to parent elements
    e.stopPropagation();
});
//adds todo lis to ul
$("input[type='text']").on("keypress", function(e){
    //listening for enter (13) keypress
    if(e.which === 13){
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class = 'fas fa-trash'></i></span> " + todoText + "</li>");
    };
});


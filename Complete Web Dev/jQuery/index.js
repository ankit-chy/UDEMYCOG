$(document).ready(function(){
    // $("h1").css("color","red");
    $("h1").addClass("big-title");
    $("h1").text("Hi Buddy");
    // $("h1").text("<em>Hi Bud<em>");
    $("h1").html("<em>Hi Bud<em>");

    var hef = $("a").attr("href");
    $("p").text(hef);
    
    $("a").attr("href","https://www.yahoo.com");
});

$("button").click(function(){
    $("h1").css("color","purple");
});

// $("input").keypress(function(event){
//     console.log(event.key);
// });

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});

    $("h1").before("<button>Mew</button>");
    $("h1").after("<button>Mew</button>");
    $("h1").append("<button>Mew</button>");
    $("h1").prepend("<button>Mew</button>");

    // $("button").click(function(){
    //     $("h1").toggle();
    // });

    // $("button").click(function(){
    //     $("h1").fadetoggle();
    // });


    // $("button").click(function(){
    //     $("h1").slideToggle();
    // });

    $("button").on("click",function(){
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    });
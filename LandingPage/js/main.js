// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y < 100) {
//         $(".myCard").fadeOut();
//     } else {
//         $(".myCard").fadeIn();
//     }
// });
$(document).ready(function () {
    $(".parent").fadeOut();

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y < 100) {
            console.log("if true", "Scroll position: ", y);
            $(".parent").fadeOut();
        } else {
            console.log("if false", "Scroll position: ", y);
            $(".parent").fadeIn();
        };

        $(".myCard").click(function () {
            $(".myModal").css("display", "block")
        }
        )
    });
});



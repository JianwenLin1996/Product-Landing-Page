$(document).ready(function(){

    $(".nav-link, .nav-brand").click( function(e){
        console.log(e.target.href);
        let targetId = null;
        if (e.target.href != undefined){
            targetId = e.target.href.substr(e.target.href.indexOf("#"));
        }
        else {
            targetId = "#slides";
        }
        var offset = $(targetId).offset();
        var scrollto = offset.top - 60; // minus fixed header height
        $('html, body').animate({scrollTop:scrollto}, 500); //jquery.slim cannot use animate
    })

})
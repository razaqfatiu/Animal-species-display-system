$(function (){
    $("form").submit(function(e){
        // console.log(e);
        e.preventDefault()
        var name = $('#name').val()
        var email = $('#email').val()
        var password = $("#password").val()
        var url = $(this).attr('action')

        $.post(url, {name, email, password}).done(function(data){
            console.log("Saved Data");
            console.log(data)
            // window.location.href= "../html/index.html"
        })
    })

});

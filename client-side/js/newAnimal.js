$(function(){
    $("form").submit(function (e) {
        e.preventDefault()
        console.log(e);
        // var fileName = $('#image')
        //     if (fileName){
        //     // console.log(fileName.name);
        //     }

        datas = {
            name: $("#name").val(),
            scientificName: $("#sciName").val(),
            species: $("#species").val(),
            group: $("#group option:selected").text(),
            sex: $("#sex option:selected").text(),
            image: $("#image").val()
        }
        $.post("http://localhost:3000/animals", datas).done(function (data) {
            console.log(data);
        })
        console.log(datas)
    })
})
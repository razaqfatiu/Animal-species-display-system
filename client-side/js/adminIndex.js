$(function() {
   $("#two").hide()
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/animals',
        dataType: 'json',
    }).done(function(data){
        $.map(data, function(post, i){
            $("#structured").append(`
            <div class="card border border-primary rounded text-center each" style="width: 18rem;" id=${post.id}>
            <img class="card-img-top" src=${post.image} alt="Card image cap" height="200">
            <div class="card-body">
                <h5 class="card-title">${post.scientificName}</h5>
                <p class="card-text">A ${post.sex} ${post.name}.</p>
                <p class="card-text">Groups: ${post.group}.</p>
                <p class="card-text">Among the wildest: ${post.species}.</p>
                <button class="btn btn-outline-success my-2 my-sm-0" id="update" type="submit">Update</button>
                <button class="btn btn-outline-warning my-2 my-sm-0" id="delete" type="submit">Delete</button>

            </div>
            </div>`)
        })
    }) 


    $("#search").click(function(e){
        e.preventDefault()
        const name = $("#text").val()
    
        $.ajax({
          method: 'GET',
          url: `http://localhost:3000/animals/?name=${name}`,
          dataType: 'json',
      }).done(function(data){
        $.map(data, function(post, i){
          console.log(data);
          const {image,name,scientificName,group,sex} = post
          $("#img").attr("src", image)
          $("#atittle").text(name)
          $("#sciname").text(scientificName)
          $("#group").text(group)
          $("#three").append(`<button class="btn btn-outline-success my-2 my-sm-0" id="update" type="button">Update</button>
          <button class="btn btn-outline-warning my-2 my-sm-0" id="delete" type="button">Delete</button>`)
          $("#two").show()
        })
      })    
})

    
})   
$(function() {
   $("#one").hide()
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
                </div>
              </div>`)
            })
        })
})    
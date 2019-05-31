$(function() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/animals',
        dataType: 'json',
    }).done(function(data){
        // console.log(data);
        $.map(data, function(post, i){
            $("#structured").append(`
            <div class="card border border-primary rounded each" style="width: 18rem;" id=${post.id}>
            <img class="card-img-top" src=${post.image} alt="Card image cap" height="200">
            <div class="card-body">
              <h5 class="card-title">${post.scientificName}</h5>
              <p class="card-text">Groups: ${post.group}.</p>
              <button class="btn btn-primary" id="detail">See Details</button>
            </div>
          </div>`)
        })
    })

  $("#jumb").hide()
  $("#search").click(function(){
    const id = $("#text").val()
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/animals/'+id,
      dataType: 'json',
  }).done(function(data){
      console.log(data);
      $(window).load(function() {

        jQuery.noConflict();
            $('#myModal').modal('show');
        });
  })
    
  })
  })
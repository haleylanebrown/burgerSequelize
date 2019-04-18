console.log("hi")

$(function() {
    $("#devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured status to", true);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $("#deleteBurgers").on("click", function(event) {
        event.preventDefault();
        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    }); 
    })


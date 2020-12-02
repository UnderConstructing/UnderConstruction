$("#submission").on("click", function (e) {
    e.preventDefault();
    var updateContractor = {
        email: $("#request-text").val().trim()
    }
    $.ajax({
        url: `/api/update`, 
        method: "PUT",
        data: updateContractor
    }).then(response => {
        console.log(response)
    }) 

})
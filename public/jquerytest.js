$("#submission").on("click", function () {
    if ($("#city").val()=== "In which city you located?") {
        openModal();
    }
    if ($("#state").val()=== "Which state are you in?") {
        openModal();
    }
    if ($("project").val()=== "What project are you trying to remodel?") {
        openModal();
    }
    var cleCon = {
        city: $("#city").val(),
    }
    $.ajax({
        url: "/results",
        method: "GET",
        data: cleCon
    }).then(response => {
        console.log(response)
    })

})
$("#close-modal").on("click", function () {
    closeModal()
})

function openModal() {
    $("#validate").addClass("is-active")
}

function closeModal() {
    $("#validate").removeClass("is-active")
    console.log("modal closed!")

}

$("#submission").on("click", function () {
    if ($("#city").val()=== "In which city you located?") {
        openModal();
        return
    }
    if ($("#state").val()=== "Which state are you in?") {
        openModal();
        return
    }
    if ($("project").val()=== "What project are you trying to remodel?") {
        openModal();
        return
    }
    else {
    var cleCon = {
        city: $("#city").val(),
        project: $("#project").val()
    }
    console.log(cleCon.project)
    $.ajax({
        url: "/api/results",
        method: "GET",
        data: cleCon
    }).then(res => {
        console.log(res)
        window.location.href = "/results"
    })}
})
$("#lenders").on("click", function () {
    $.ajax({
        url: "/lenders",
        method: "GET"
    }).then(response =>{
        console.log(response)
    })
})

$("#submit-contractor").on("click", function () {
    let reqObj = {
        company: $("#inputCompany").val(),
        email: $("#inputEmail").val(),
        city: $("#inputCity").val(),
        state: $("#inputState").val(),
        phone: $("#inputPhone").val(),
    }
    $.ajax({
        url: "/api/newcontractor",
        method: "POST",
        data: reqObj
    }).then(function () {
        console.log("posted!")
        $("#posted").removeClass("d-none")
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

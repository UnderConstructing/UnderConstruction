$("#submission").on("click", function () {
    console.log($("#city").val())
    if ($("#city").val() === "In which city are you located?") {
        console.log("city missin")
        $("#validate").addClass("is-active");
        return
    }
    else if ($("#state").val()=== "What state are you in?") {
        openModal();
        return
    }
    else if ($("#project").val()=== "What is your project?") {
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
        switcheroo()
     })
    }
})

function switcheroo() {
    switch ($("projectID").val()){
        case "Kitchen":
            $("#projectResults").text("It costs about $150 per square foot to rennovate a kitchen.");
        break
        case "Bathroom":
            $("#projectResults").text("It costs about $70 per square foot to rennovate a bathroom.");
        break
        case "Bedroom":
            $("#projectResults").text("It costs about $20 per square foot to rennovate a bedroom.");
        break
        default:
            console.log("Somethin' done goofed!")
        break  
        }
}
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
    if ($(".valid").val() === "") {
        openModal2()
        return
    }

    else if ($("#inputState").val()==='Choose...') {
        openModal2()
        return
    }
    else {
    
    $.ajax({
        url: "/api/newcontractor",
        method: "POST",
        data: reqObj
    }).then((response) => {
        console.log("posted!" + res)
        $("#posted").removeClass("d-none")
    })}
})


$("#close-modal").on("click", function () {
    closeModal()
})

$("#close-modal2").on("click", function () {
    closeModal2()
})
function openModal() {
    $("#validate").addClass("is-active")
}

function closeModal() {
    $("#validate").removeClass("is-active")
    console.log("modal closed!")
}

function openModal2() {
    $("#validated").addClass("is-active")
}

function closeModal2() {
    $("#validated").removeClass("is-active")
    console.log("modal closed!")
}


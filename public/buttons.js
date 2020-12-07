$(document).ready(function (){
function switcheroo() {
    console.log($("#projectId").text())
    switch ($("#projectId").text()){
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
            $("#projectResults").text("Something done goofed.")
        break  
        }
}
switcheroo()
})
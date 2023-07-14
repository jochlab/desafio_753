var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
});

$("#recetas-ingredientes").on("dblclick", function () {
    $("#recetas-ingredientes").toggleClass("text-danger")
})

$("#recetas-preparacion").on('dblclick', function () {
    $("#recetas-preparacion").toggleClass("text-danger")
});

$("#panqueques").click(function () {
    $("#panqueques-receta").toggle("slow");
});

$("#tiramisu").click(function () {
    $("#tiramisu-receta").toggle("slow");
});

$("#plateada").click(function () {
    $("#plateada-receta").toggle("slow");
});
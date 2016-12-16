$(document).ready(function () {
    $('#instructions-modal').modal('show');
    print();
});

var count = Math.floor((Math.random() * 11) + 1), polaridad = Math.floor((Math.random() * 2) + 1);
if (polaridad == 2){
    count = count*-1;
}
var altura = $('#img-left-car').height();
$('#img-left-car').height(altura+(2*count));

//BUTTON CONTROLS
//LEFT BUTTON CONTROL
$('#btn-ctrl-left').click(function () {
    if ($('#img-left-car').height() <= $('#img-right-car').height() + 20) {
        var altura = $('#img-left-car').height();
        console.log(altura);
        $('#img-left-car').height(altura + 2);
        count++;
    }
    print();
});
//RIGHT BUTTON CONTROL
$('#btn-ctrl-right').click(function () {
    if ($('#img-left-car').height() >= $('#img-right-car').height() - 20) {
        var altura = $('#img-left-car').height();
        console.log(altura);
        $('#img-left-car').height(altura - 2);
        count--;
    }
    print();
});

//MIDDLE BUTTON CONTROL
$('#btn-ctrl-middle').click(function () {

    $("#img-left-car").fadeOut("slow", function () {
        $("#img-left-car").remove();

        if (count ==0){
            $("#img-left-car0").attr("style", "display: block;");
        }else {
            var name = "#img-left-car"+count;
            $(name).attr("style", "display: block;");
            $("#grid-window").attr("style", "display: block;");
        }
        $("#left-car-container").attr("style", "width: 47.5%");
        $("#right-car-container").attr("style", "width: 47.5%");
        $("#palet").attr("style", "display: flex;");
    });
    $("#img-right-car").fadeOut("slow", function () {
        $("#img-right-car").remove();
        $("#img-right-car2").attr("style", "display: block;");
    });

});

var print = function () {
    console.log(count+"-"+polaridad);
};
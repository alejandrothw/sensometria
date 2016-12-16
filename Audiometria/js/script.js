$(document).ready(function () {
    $(".se-pre-con").fadeOut("slow");
    $('.result-container').hide();
    $('#instructions-modal').modal('show');
});

$('#start2').click(function () {
    $('#start').click();
});

$('#start').click(function () {
    $("#start2").remove();

    for (i = 1; i <= 10; i++) {
        $("#song" + i)[0].play();
        $("#song" + i)[0].pause();
    }

    var Resultados = [];

    var status = 'off';
    var delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
    var clicks = 0;
    var indice = 0;

    $('#btn-listen').click(function () {
        setTimeout(function () {
        }, 1000);
        if (status == 'wait') {
            Resultados[indice] = 'success';
            status = 'success';
        } else {
            Resultados[indice] = 'failure'
            status = 'failure';
        }
        clicks = clicks + 1;
    });

    //OIDO IZQUIERDO 500Hz
    setTimeout(function () {
        $("#song1")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, delay + 3000);

    //OIDO DERECHO 500Hz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 1;
    }, 10000);

    setTimeout(function () {
        $("#song2")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 10000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure'
        }
    }, 10000 + delay + 3000);


    //OIDO IZQUIERDO 1MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 2;
    }, 20000);

    setTimeout(function () {
        $("#song3")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 20000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 20000 + delay + 3000);


    //OIDO DERECHO 1MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 3;
    }, 30000);

    setTimeout(function () {
        $("#song4")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 30000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 30000 + delay + 3000);


    //OIDO IZQUIERDO 2MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 4;
    }, 40000);

    setTimeout(function () {
        $("#song5")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 40000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 40000 + delay + 3000);


    //OIDO DERECHO 2MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 5;
    }, 50000);

    setTimeout(function () {
        $("#song6")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 50000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 50000 + delay + 3000);


    //OIDO IZQUIERDO 4MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 6;
    }, 60000);

    setTimeout(function () {
        $("#song7")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 60000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 60000 + delay + 3000);

    //OIDO DERECHO 4MHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 7;
    }, 70000);

    setTimeout(function () {
        $("#song8")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 70000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 70000 + delay + 3000);

    //OIDO IZQUIERDO 8KHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 8;
    }, 80000);

    setTimeout(function () {
        $("#song9")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 80000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 80000 + delay + 3000);


    //OIDO DERECHO 8KHz
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 9;
    }, 90000);

    setTimeout(function () {
        $("#song10")[0].play();
        if (status == 'off') {
            status = 'wait';
        }
    }, 90000 + delay);

    setTimeout(function () {
        if (status == 'wait') {
            Resultados[indice] = 'failure';
        }
    }, 90000 + delay + 3000);

    setTimeout(function () {
        $('#btn-listen').hide();
        $('.result-container').show();
        for (i = 0; i <= 9; i++) {
            if (Resultados[i] == 'success') {
                $('#Resultado' + (i + 1)).replaceWith("<span class='glyphicon glyphicon-ok success-icon'></span>");
            } else {
                $('#Resultado' + (i + 1)).replaceWith("<span class='glyphicon glyphicon-remove failed-icon'></span>");
            }
        }
    }, 100000);
});
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

    var Resultados = [];

    var status = 'off';
    var delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
    var clicks = 0;
    var indice = 0;
    var centesimas = 0;


    $('#btn-listen').click(function () {
        setTimeout(function () {
        }, 1000);
        if (status == 'wait') {
            clearInterval(control);
            $('#btn-listen').css('color', '#14FF1E');
            Resultados[indice] = $('#Centesimas').text();
            status = 'success';
        } else {
            Resultados[indice] = 300;
            $('#btn-listen').css('color', 'red');
            status = 'failure';
        }
        clicks = clicks + 1;
    });

    //PRIMER INTENTO
    setTimeout(function () {
        if (status == 'off') {
            $('#btn-listen').css('color', '#0CBAFF');
            status = 'wait';
            control = setInterval(cronometro, 10);
        }
    }, delay);

    setTimeout(function () {
        $('#btn-listen').css('color', '#FFF');
        if (status == 'wait') {
            Resultados[indice] = 300;
            clearInterval(control);
        }
    }, delay + 3000);


    //SEGUNDO INTENTO
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 1;
        centesimas = 0;
    }, 10000);

    setTimeout(function () {
        if (status == 'off') {
            $('#btn-listen').css('color', '#0CBAFF');
            status = 'wait';
            control = setInterval(cronometro, 10);
        }
    }, 10000 + delay);

    setTimeout(function () {
        $('#btn-listen').css('color', '#FFF');
        if (status == 'wait') {
            Resultados[indice] = 300;
            clearInterval(control);
        }
    }, 10000 + delay + 3000);

    //TERCER INTENTO
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 2;
        centesimas = 0;
    }, 20000);

    setTimeout(function () {
        if (status == 'off') {
            $('#btn-listen').css('color', '#0CBAFF');
            status = 'wait';
            control = setInterval(cronometro, 10);
        }
    }, 20000 + delay);

    setTimeout(function () {
        $('#btn-listen').css('color', '#FFF');
        if (status == 'wait') {
            Resultados[indice] = 300;
            clearInterval(control);
        }
    }, 20000 + delay + 3000);

    //CUARTO INTENTO
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 3;
        centesimas = 0;
    }, 30000);

    setTimeout(function () {
        if (status == 'off') {
            $('#btn-listen').css('color', '#0CBAFF');
            status = 'wait';
            control = setInterval(cronometro, 10);
        }
    }, 30000 + delay);

    setTimeout(function () {
        $('#btn-listen').css('color', '#FFF');
        if (status == 'wait') {
            Resultados[indice] = 300;
            clearInterval(control);
        }
    }, 30000 + delay + 3000);

    //QUINTO INTENTO
    setTimeout(function () {
        status = 'off';
        delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
        clicks = 0;
        indice = 4;
        centesimas = 0;
    }, 40000);

    setTimeout(function () {
        if (status == 'off') {
            $('#btn-listen').css('color', '#0CBAFF');
            status = 'wait';
            control = setInterval(cronometro, 10);
        }
    }, 40000 + delay);

    setTimeout(function () {
        $('#btn-listen').css('color', '#FFF');
        if (status == 'wait') {
            Resultados[indice] = 300;
            clearInterval(control);
        }
    }, 40000 + delay + 3000);

    //DISPLAY RESULTADOS
    setTimeout(function () {
        $('#btn-listen').hide();
        $('.result-container').show();
        var prom = 0;
        for (i = 0; i <= 4; i++) {
            prom = prom + parseInt(Resultados[i]);
        }
        prom = (prom / 5).toFixed();
        for (i = 0; i <= 4; i++) {
            $('#Resultado' + (i + 1)).replaceWith(Resultados[i] + 'ms');
        }
        $('#Resultado6').replaceWith(prom + 'ms');
    }, 50000);

    function cronometro() {
        centesimas++;
        Centesimas.innerHTML = centesimas;
    }
});
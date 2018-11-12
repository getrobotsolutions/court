$(document).ready(function() {

    var myParam = getParameterByName('lang');
    if (myParam === "sp") {
        $("a").each(function() {
            var alink = $(this).attr("href");
            alink = alink.substring(0, alink.length-2);
            $(this).attr("href", alink + "sp"); });
            $("#eng").removeClass("active");
            $("#spa").addClass("active");
    } else {
        $("a").each(function() {
            var alink = $(this).attr("href");
            alink = alink.substring(0, alink.length-2);
            $(this).attr("href", alink + "en"); });
            $("#eng").addClass("active");
            $("#spa").removeClass("active");
    }

    translateText(myParam);


});

function translateText(param) {

    var sp_array = { "msg_conduct_courtroom": "Conducta en la corte",
                    "msg_conduct_courtroom_description": "<p>Por favor, permanezca en silencio mientras usted es un espectador en una sala de audiencias o en un tribunal.</p> <p>Por favor, vístase apropiadamente, como lo haría para una entrevista de trabajo.</p> <p>Fumar, comer, beber (incluyendo botella de agua) y masticar chicle no se permiten en la sala de audiencias en ningún momento, ya sea durante las sesiones de la Corte o durante el receso.</p>",
                    "msg_conduct_cellphones": "Teléfonos celulares y otros dispositivos:",
                    "msg_conduct_cellphones_description": "<p> Todos los teléfonos celulares u otros dispositivos electrónicos deben estar apagados antes de ingresar a una sala de audiencias o audiencias. </p> <p> No se permite tomar fotografías o grabaciones de video / audio en ningún dispositivo a menos que el Tribunal haya otorgado previamente su permiso. </p> <p> El incumplimiento de estas reglas puede resultar en la confiscación del dispositivo. </p>" };

    var en_array = { "msg_conduct_courtroom": "Courtroom Conduct",
                    "msg_conduct_courtroom_description": "<p>Please remain quiet while you are a spectator in a courtroom or hearing room.</p> <p>Please dress appropriately, as you would for an employment interview.</p> <p>Smoking, eating, drinking (including bottled water), and gum chewing are not allowed in a courtroom at any time, whether during sessions of the Court or at recess.</p>",
                    "msg_conduct_cellphones": "Cell Phones and Other Devices:",
                    "msg_conduct_cellphones_description": "<p>All cell phones or other electronic devices must be turned off before entering a courtroom or hearing room.</p> <p>Taking photographs or video/audio recordings by any device is not allowed unless the Court has previously granted permission.</p> <p>Failure to follow these rules may result in confiscation of the device.</p>" };
    var currentArray = [];

    if (param == "sp") {
        currentArray = sp_array;
    } else {
        currentArray = en_array;
    }

    $("#msg_conduct_courtroom").html(currentArray["msg_conduct_courtroom"]);
    $("#msg_conduct_courtroom_description").html(currentArray["msg_conduct_courtroom_description"]);
    $("#msg_conduct_cellphones").html(currentArray["msg_conduct_cellphones"]);
    $("#msg_conduct_cellphones_description").html(currentArray["msg_conduct_cellphones_description"]);

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
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


    $("#btn_English_Spanish").click(function() {
        if (myParam == "sp") {
            var currentURL = window.location.pathname + "?lang=en";
            window.location.href = currentURL;
        } else {
            var currentURL = window.location.pathname + "?lang=sp";
            window.location.href = currentURL;
        }
    });



});

function translateText(param) {

    var sp_array = { "msg_menu_header": "Seleciona UN BOTÓN DE ABAJO PARA COMENZAR",
                     "msg_menu_maps": "Mapas",
                     "msg_menu_conduct": "Conducta en La Corte",
                     "msg_menu_docket": "Encuentra tu audiencia",
                     "msg_menu_judges": "Juez y Árbitros",
                     "msg_menu_faqs": "Preguntas Más Frequentes" };

    var en_array = { "msg_menu_header": "PRESS A BUTTON BELOW TO BEGIN",
                     "msg_menu_maps": "Maps",
                     "msg_menu_conduct": "Court Conduct",
                     "msg_menu_docket": "Find Your Hearing",
                     "msg_menu_judges": "Judges & Referees",
                     "msg_menu_faqs": "Frequently Asked Questions" };
    var currentArray = [];

    if (param == "sp") {
        currentArray = sp_array;
    } else {
        currentArray = en_array;
    }

    $("#msg_menu_header").html(currentArray["msg_menu_header"]);
    $("#msg_menu_maps").html(currentArray["msg_menu_maps"]);
    $("#msg_menu_conduct").html(currentArray["msg_menu_conduct"]);
    $("#msg_menu_docket").html(currentArray["msg_menu_docket"]);
    $("#msg_menu_judges").html(currentArray["msg_menu_judges"]);
    $("#msg_menu_faqs").html(currentArray["msg_menu_faqs"]);

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

function btnClick(selection, event) {
    event.preventDefault();

    var sp_array = { "docket": "Haga clic en el número de habitación para direcciones.",
                     "judges": "Mapas",
                     "maps": "Conducta en La Corte",
                     "conduct": "Encuentra tu audiencia",
                     "faqs": "Juez y Árbitros" };

    var en_array = { "docket": "Click on the Room Number for Directions.",
                     "judges": "Here is a information on our Judges and Referees.",
                     "maps": "Click on a Room above, or name below for directions.",
                     "conduct": "Please follow these Court Conduct procedures.",
                     "faqs": "Click on a subject to learn more." };
    var currentArray = [];

    if (param == "sp") {
        currentArray = sp_array;
    } else {
        currentArray = en_array;
    }

    switch (selection) {
        case 'docket':
            PlaySpeech(currentArray['docket']);
            location.href="http://localhost:5000/home/docket?lang=en";
            break;
        case 'judges':
            PlaySpeech(currentArray['judges']);
            break;
        case 'maps':
            PlaySpeech(currentArray['maps']);
            break;
        case 'conduct':
            PlaySpeech(currentArray['conduct']);
            break;
        case 'faqs':
            PlaySpeech(currentArray['faqs']);
            break;
        
    }
}
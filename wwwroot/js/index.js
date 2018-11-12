$(document).ready(function() {
    $("#timebar").hide();

    $("#msg_welcome_spanish").hide();
    $("#msg_welcome_subtitle_spanish").hide();

    $("#msg_welcome_english").show();
    $("#msg_welcome_subtitle_english").show();

    setInterval(function() {
        $("#msg_welcome_spanish").toggle();
        $("#msg_welcome_subtitle_spanish").toggle();
    
        $("#msg_welcome_english").toggle();
        $("#msg_welcome_subtitle_english").toggle();

    }, 20000);

});
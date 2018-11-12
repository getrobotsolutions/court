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

    loadData();

});

function translateText(param) {

    var sp_array = { "msg_docket_header": "Busca:",
                    "msg_docket_name": "Nombre",
                    "msg_docket_casenumber": "Número de Caso",
                
                
                };

    var en_array = { "msg_docket_header": "Search:",
                    "msg_docket_name": "Name",
                    "msg_docket_casenumber": "Case Number",
                
                
                };
    var currentArray = [];

    if (param == "sp") {
        currentArray = sp_array;
    } else {
        currentArray = en_array;
    }

    $("#msg_docket_header").html(currentArray["msg_docket_header"]);
    $("#msg_docket_name").html(currentArray["msg_docket_name"]);
    $("#msg_docket_casenumber").html(currentArray["msg_docket_casenumber"]);




}

function clearSearch(event) {
    event.preventDefault();
    $("#txtName").val("");
    $("#txtCaseNumber").val("");
    $("#msg_clear_result").hide();
    loadData();
}

function loadData() {
    $.get("/Data/GetCourtDocket", function(dataString) {
        
        var data = JSON.parse(dataString);
        
        var tableHeader = '';

        var myParam = getParameterByName('lang');
        if (myParam == 'sp') {
            tableHeader = "<tr><th>Nombre</th><th>Sala de Audiencia</th><th>Número de Caso</th><th>Hora</th></tr>";
            docket_heading_header = "Expediente de Hoy";
            docket_heading_results = "Aquí están tus resultados.";
        } else {
            tableHeader = "<tr><th>Name</th><th>Room</th><th>Case Number</th><th>Time</th></tr>";
            docket_heading_header = "Today's Docket";
            docket_heading_results = "Here are your results";
        }

        var tableHtml = '';        

        var nameFilter = $("#txtName").val().toLowerCase();
        var caseNumberFilter = $("#txtCaseNumber").val();
        if (nameFilter) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["CASENAME"].toLowerCase().indexOf(nameFilter) >= 0) {
                    tableHtml += '<tr><td>' + data[i]["CASENAME"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + data[i]["TIME"] + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else if (caseNumberFilter) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["Case"].toLowerCase().indexOf(caseNumberFilter) >= 0) {
                    tableHtml += '<tr><td>' + data[i]["CASENAME"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + data[i]["TIME"] + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }                
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else if (nameFilter && caseNumberFilter) {
            for (var i = 0; i < data.length; i++) {
                if ((data[i]["Name"].toLowerCase().indexOf(nameFilter) || (data[i]["Case"].toLowerCase().indexOf(caseNumberFilter)))) {
                    tableHtml += '<tr><td>' + data[i]["CASENAME"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + data[i]["TIME"] + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }                  
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else {
            for (var i = 0; i < data.length; i++) {
                tableHtml += '<tr><td>' + data[i]["CASENAME"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + data[i]["TIME"] + '</td></tr>'
            }
            $("#docket_heading").html(docket_heading_header);
            $("#msg_empty_result").hide();   
        }
    
    $("table#docket").html(tableHeader + tableHtml);
    });

}

function createRoomLink(room) {
    var linkTo = '';
    var myParam = getParameterByName('lang');

    switch(room) {
        case '1A':
            linkTo = '/home/maps?floor=1&open=1&lang=' + myParam;
            break;
        case '1B':
            linkTo = '/home/maps?floor=1&open=2&lang=' + myParam;
            break;
        case '2A':
            linkTo = '/home/maps?floor=1&open=1&lang=' + myParam;
            break;
        case '2B':
            linkTo = '/home/maps?floor=1&open=2&lang=' + myParam;
            break;
        case '3A':
            linkTo = '/home/maps?floor=1&open=1&lang=' + myParam;
            break;
        case '3B':
            linkTo = '/home/maps?floor=1&open=2&lang=' + myParam;
            break;
        case '4A':
            linkTo = '/home/maps?floor=1&open=1&lang=' + myParam;
            break;
        case '4B':
            linkTo = '/home/maps?floor=1&open=2&lang=' + myParam;
            break;       
        default:
            linkTo = '/home/maps?floor=1&open=1&lang=' + myParam;
            break;
    }


    return "<a href='" + linkTo + "'>"+ room + "</a>"
}
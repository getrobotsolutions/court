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
    //$.get("/tempjson.json", function(data) {
    $.get("/Data/GetCourtDocket", function(dataString) {
        
        var data = JSON.parse(dataString);
        
        var tableHeader = '';

        var myParam = getParameterByName('lang');
        if (myParam == 'sp') {
            tableHeader = "<tr><th>Hora</th><th>Nombre</th><th>Número de Caso</th><th>Sala de Audiencia</th></tr>";
            docket_heading_header = "Expediente de Hoy";
            docket_heading_results = "Aquí están tus resultados.";
        } else {
            tableHeader = "<tr><th>Time</th><th>Name</th><th>Case Number</th><th>Room</th></tr>";
            docket_heading_header = "Today's Docket";
            docket_heading_results = "Here are your results";
        }

        var tableHtml = '';        

        var nameFilter = $("#txtName").val().toLowerCase();
        var caseNumberFilter = $("#txtCaseNumber").val();
        if (nameFilter) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["CASENAME"].toLowerCase().indexOf(nameFilter) >= 0) {
                    tableHtml += '<tr><td>' + data[i]["TIME"] + '</td><td>' + data[i]["CASENAME"] + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else if (caseNumberFilter) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["Case"].toLowerCase().indexOf(caseNumberFilter) >= 0) {
                    tableHtml += '<tr><td>' + data[i]["TIME"] + '</td><td>' + data[i]["CASENAME"] + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }                
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else if (nameFilter && caseNumberFilter) {
            for (var i = 0; i < data.length; i++) {
                if ((data[i]["Name"].toLowerCase().indexOf(nameFilter) || (data[i]["Case"].toLowerCase().indexOf(caseNumberFilter)))) {
                    tableHtml += '<tr><td>' + data[i]["TIME"] + '</td><td>' + data[i]["CASENAME"] + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td></tr>'
                }
            }
            if (tableHtml == '') { $("#msg_empty_result").show(); } else { $("#msg_empty_result").hide(); }                  
            $("#docket_heading").html(docket_heading_results);
            $("#msg_clear_result").show();
        } else {
            for (var i = 0; i < data.length; i++) {
                tableHtml += '<tr><td>' + data[i]["TIME"] + '</td><td>' + data[i]["CASENAME"] + '</td><td>' + data[i]["CASENUMBER"] + '</td><td>' + createRoomLink(data[i]["ROOM"]) + '</td></tr>'
            }
            $("#docket_heading").html(docket_heading_header);
            $("#msg_empty_result").hide();   
        }
    
    $("table#docket").html(tableHeader + tableHtml);
    
    filterTable();
    sortTable(3);

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
            linkTo = '/home/maps?floor=2&open=3&lang=' + myParam;
            break;
        case '3A':
            linkTo = '/home/maps?floor=3&open=1&lang=' + myParam;
            break;
        case '3B':
            linkTo = '/home/maps?floor=3&open=2&lang=' + myParam;
            break;
        case '210':
            linkTo = '/home/maps?floor=2&open=2&lang=' + myParam;
            break;
        case 'A':
            linkTo = '#excludeMe' + myParam;
            break;           
        default:
            linkTo = '#excludeMe' + myParam;
            break;
    }


    return "<a href='" + linkTo + "'>"+ room + "</a>"
}

function filterTable() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    filter = '#excludeMe';
    table = document.getElementById("docket");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        if (td.innerHTML.indexOf(filter) == -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }


function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("docket");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
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

    var myFloor = getParameterByName('floor');
    if (myFloor) {
        changeLayoutToFloor(myFloor);
    } else {
        changeLayoutToFloor('1');
    }

    $('img[usemap]').rwdImageMaps();

    var directionLanguage;
    if (myParam == 'sp') {
        directionLanguage = "Direcciones"
    } else {
        directionLanguage = "Directions";
    }

    $( "#dialog1" ).dialog({ autoOpen: false, modal: true, title: directionLanguage + " (1)" });
    $( "#dialog2" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (2)" });
    $( "#dialog3" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (3)" });
    $( "#dialog4" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (4)" });
    $( "#dialog5" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (5)" });
    $( "#dialog6" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (6)" });
    $( "#dialog7" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (7)" });
    $( "#dialog8" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (8)" });
    $( "#dialog9" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (9)" });
    $( "#dialog10" ).dialog({ autoOpen: false, modal: true,  title: directionLanguage + " (10)" });



    var myRoom = getParameterByName('open');
    if (myRoom) {
        $( "#dialog" + myRoom ).dialog( "open" );
    }

});

function translateText(param) {

    var sp_array_base = { "map_header": "Sotano",
                        "map_floor": "Piso:",
                        "map_directions": "Haga clic en una habitación o la nombre para direcciones",
                        "map_item1": "Sala pública",
                        "map_item1_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el piso 0. Salga del ascensor a la derecha y continúe hasta el final del pasillo. La sala estará en línea recta.",
                        "map_item2": "Ascensor",
                        "map_item2_direct": "Ascensor",
                        "map_item3": "Sala de Asamblea del Jurado.",
                        "map_item3_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el piso 0. Gire a la izquierda y verá la habitación directamente a la izquierda.",
                        "map_item4": "Libertad Condicional / Correcciones Comunitarias",
                        "map_item4_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el piso 0. Gire a la izquierda y verá la habitación que está al final del pasillo a su derecha.",
                        "map_item5": "20th Sala de conferencias de libertad vigilada del tribunal de circuito",
                        "map_item5_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el piso 0. Una vez que esté fuera del ascensor, la habitación estará directamente frente a usted.",
                        "map_item6": "MDOC Libertad Condicional y Libertad Condicional (Oficina de Grand Haven)",
                        "map_item6_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el piso 0. Salga del ascensor hacia la derecha y la habitación estará al final del pasillo a su izquierda.",
                        "map_item7": "William VanRegenmorter Jardín de la memoria",
                        "map_item7_direct": "Salga por las puertas delanteras y gire a la derecha. El jardín estará recto."
                    };

    var sp_array_1f = { "map_header": "Primer Piso",
                    "map_floor": "Piso:",
                     "map_directions": "Haga clic en una habitación o la nombre para direcciones",
                     "map_item1": "Tribunal de Distrito 1A",
                     "map_item1_direct": "Continúe recto a través de la Seguridad de entrada, luego gire a la izquierda y la habitación estará a su derecha",
                     "map_item2": "Tribunal de Distrito 1B",
                     "map_item2_direct": "Continúe recto a través de la Seguridad de la entrada, luego verá la habitación a su derecha",            
                     "map_item3": "Empleado del centro de servicio público / registro de escrituras.",
                     "map_item3_direct": "Continúe recto a través de la Seguridad de entrada, luego gire a la derecha y la habitación estará a su izquierda.",
                     "map_item4": "Servicio público centro tesorero del condado",
                     "map_item4_direct": "Continúe recto a través de la Seguridad de entrada, luego gire a la derecha y la habitación estará a su izquierda.",
                     "map_item5": "Centro de servicio público",
                     "map_item5_direct": "Continúe recto a través de la Seguridad de la entrada, luego gire a la derecha y la habitación estará al final del pasillo a su izquierda",
                     "map_item6": "Ascensor",
                     "map_item6_direct": "Ascensor",
                     "map_item7": "Fiscal de Procesamiento",
                     "map_item7_direct": "Continúe recto a través de Seguridad de entrada, luego gire a la derecha y la habitación se encuentra al final del pasillo a su izquierda",
                     "map_item8": "58th Tribunal de Distrito",
                     "map_item8_direct": "Continúe recto a través de la Seguridad de entrada, luego gire a la izquierda y la sala se encuentra en el pasillo a su izquierda"                     
                };

    var sp_array_2f = { "map_header": "Segundo Piso",
                "map_floor": "Piso:",
                "map_directions": "Haga clic en una habitación o la nombre para direcciones",
                "map_item1": "Biblioteca de Derecho",
                "map_item1_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Gire a la derecha del ascensor y continúe hasta el final del pasillo. La Biblioteca de Derecho es la última sala a la derecha. ",     
                "map_item2": "Sala de audiencias 210",
                "map_item2_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Salga a la derecha y continúe por el pasillo. La habitación estará a su derecha",
                "map_item3": "20th Corte de Circuito 2A",
                "map_item3_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Salga a la derecha y continúe por el pasillo. La habitación estará a su derecha",
                "map_item4": "Sala de visitas.",
                "map_item4_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Gire a la derecha fuera del ascensor e inmediatamente a la derecha, la habitación quedará a su izquierda",
                "map_item5": "Sala de visitas.",
                "map_item5_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Gire a la derecha fuera del ascensor e inmediatamente a la derecha, la habitación estará abajo a su derecha",
                "map_item6": "Ascensor",
                "map_item6_direct": "Ascensor",
                "map_item7": "Centro de autoayuda legal",
                "map_item7_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Gire a la izquierda y verá que la habitación estará al final del pasillo a su izquierda",
                "map_item8": "Amigo de la Corte",
                "map_item8_direct": "Continúe recto a través de la Seguridad de la entrada y tome el ascensor hasta el segundo piso. Gire a la izquierda y verá la habitación en el pasillo a su derecha"
           };
    
    var sp_array_3f = { "map_header": "Tercer Piso",
           "map_floor": "Piso:",
           "map_directions": "Haga clic en una habitación o la nombre para direcciones",
           "map_item1": "20th Corte de Circuito 3A",
           "map_item1_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el tercer piso. Salga del ascensor a la derecha y verá la habitación a su derecha.",
           "map_item2": "20th Corte de Circuito 3B",
           "map_item2_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el tercer piso. Gire a la izquierda al salir del ascensor y el 20o. Circuito 3B estará directamente a su izquierda.",
           "map_item3": "Secretario / Registro 20th Registros del Tribunal de Circuito",
           "map_item3_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el tercer piso. Salga del ascensor a la izquierda y la habitación se encuentra al final del pasillo a su izquierda.",
           "map_item4": "Sala de conferencias 325",
           "map_item4_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el tercer piso. La habitación estará directamente enfrente de los ascensores.",
           "map_item5": "20th División de Juicios del Tribunal de Circuito",
           "map_item5_direct": "Continúe recto a través de la Seguridad de entrada y tome el ascensor hasta el tercer piso. Salga del ascensor a la derecha y la habitación estará en el pasillo a su izquierda.",
           "map_item6": "Ascensor",
           "map_item6_direct": "Ascensor"
      };

      var en_array_base = { "map_header": "Basement",
            "map_floor": "Floor:",
            "map_directions": "Click on a room or name for directions",
            "map_item1": "Public Lounge",
            "map_item1_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  floor  0.  Take  a  right  out  of  the  elevator  and  proceed  to  the  end  of  the  hall  and  the  room  will  be  straight  ahead.   ",
            "map_item2": "Elevator",
            "map_item2_direct": "Elevator",
            "map_item3": "Jury Assembly Room",
            "map_item3_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  floor  0.  Take  a  left  out  of  the  elevator  and  the  room  will  be  directly  on  your  left.  ",
            "map_item4": "Probation/ Community Corrections",
            "map_item4_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  floor  0.  Take  a  left  out  of  the  elevator  and  the  room  will  be  down  the  hall  on  your  right.    ",
            "map_item5": "20th Circuit Court Probation Conference Room",
            "map_item5_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  floor  0.  Once  off  the  elevator,  the  room  will  be  directly  in  front  of  you.   ",
            "map_item6": "MDOC Probation & Parole (Grand Haven Office)",
            "map_item6_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  floor  0.  Take  a  right  out  of  the  elevator  and  the  room  will  be  down  the  hall  on  your  left.   ",
            "map_item7": "William VanRegenmorter Memory Garden",
            "map_item7_direct": "Proceed  out  the  front  doors  and  take  a  right.  The  garden  will  be  straight  ahead.    "
        };

        var en_array_1f = { "map_header": "First Floor",
            "map_floor": "Floor:",
            "map_directions": "Click on a room or name for directions",
            "map_item1": "District Courtroom 1A",
            "map_item1_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  left  and  the  room  will  be  on  your  right.    ",
            "map_item2": "District Courtroom 1B",
            "map_item2_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  the  room  is  straight  ahead  on  your  right.   ",
            "map_item3": "Public Service Center Clerk/Register of Deeds",
            "map_item3_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  right  and  the  room  will  be  on  your  left. ",
            "map_item4": "Public Service Center County Treasurer",
            "map_item4_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  right  and  the  room  will  be  on  your  left. ",
            "map_item5": "Public Service Center",
            "map_item5_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  right  and  the  room  will  be  down  the  hall  on  your  left.   ",
            "map_item6": "Elevator",
            "map_item6_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  the  elevator  will  be  straight  ahead. ",
            "map_item7": "Prosecuting Attorney",
            "map_item7_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  right  and  the  room  is  at  the  end  of  the  hall  on  your  left.   ",
            "map_item8": "58th District Court",
            "map_item8_direct": "Proceed  straight  ahead  through  the  Entrance  Security,  then  take  a  left  and  the  room  is  down  the  hall  on  your  left.    "
        };

        var en_array_2f = { "map_header": "Second Floor",
            "map_floor": "Floor:",
            "map_directions": "Click on a room for directions",
            "map_item1": "Law Library",
            "map_item1_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  right  out  of  the  elevator  and  proceed  to  the  end  of  the  hallway.  The  Law  Library  is  the  last  room  on  the  right.  ",
            "map_item2": "Hearing Room 210",
            "map_item2_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  right  out  of  the  elevator  and  proceed  down  the  hallway,  the  room  will  be  on  your  right.    ",
            "map_item3": "20th Circuit Courtroom 2A",
            "map_item3_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  right  out  of  the  elevator  and  proceed  down  the  hallway,  the  room  will  be  on  your  right.    ",
            "map_item4": "Visitation Room",
            "map_item4_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  right  out  of  the  elevator  and  an  immediate  right,  the  room  will  be  down  on  your  left.   ",
            "map_item5": "Visitation Room",
            "map_item5_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  right  out  of  the  elevator  and  an  immediate  right,  the  room  will  be  down  on  your  right.    ",
            "map_item6": "Elevator",
            "map_item6_direct": "Elevator",
            "map_item7": "Legal Self Help Center",
            "map_item7_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  left  out  of  the  elevator  and  the  room  will  be  at  the  end  of  the  hallway  on  your  left.    ",
            "map_item8": "Friend of the Court",
            "map_item8_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  second  floor.  Take  a  left  out  of  the  elevator  and  the  room  will  be  down  the  hallway  on  your  right.    "
        };

        var en_array_3f = { "map_header": "Third Floor",
            "map_floor": "Floor:",
            "map_directions": "Click on a room or name for directions",
            "map_item1": "20th Circuit Courtroom 3A",
            "map_item1_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  third  floor.  Take  a  right  out  of  the  elevator  and  the  room  will  be  on  your  right.   ",
            "map_item2": "20th Circuit Courtroom 3B",
            "map_item2_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  third  floor.  Take  a  left  out  of  the  elevator  and  the  20th  Circuit  Courtroom  3B  will  be  directly  on  your  left.   ",
            "map_item3": "Clerk/Register 20th Circuit Court Records",
            "map_item3_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  third  floor.  Take  a  left  out  of  the  elevator  and  the  room  is  at  the  end  of  the  hall  on  your  left.  ",
            "map_item4": "Conference Room 325",
            "map_item4_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  third  floor.  The  room  will  be  directly  across  from  the  elevators.    ",
            "map_item5": "20th Circuit Court Trial Division Office",
            "map_item5_direct": "Proceed  straight  ahead  through  the  Entrance  Security  and  take  the  elevator  straight  ahead  to  the  third  floor.  Take  a  right  out  of  the  elevator  and  the  room  will  be  down  the  hallway  on  your  left.   ",
            "map_item6": "Elevator",
            "map_item6_direct": "Elevator"
        };
    var currentArray = [];

    var myFloor = getParameterByName('floor');

    if ((param == "sp") && (myFloor == "b")) {
        currentArray = sp_array_base;
    } else if ((param == "sp") && (myFloor == "1")) {
        currentArray = sp_array_1f;
    } else if ((param == "sp") && (myFloor == "2")) {
        currentArray = sp_array_2f;
    } else if ((param == "sp") && (myFloor == "3")) {
        currentArray = sp_array_3f;
    } else if ((param == "en") && (myFloor == "b")) {
            currentArray = en_array_base;
    } else if ((param == "en") && (myFloor == "1")) {
        currentArray = en_array_1f;
    } else if ((param == "en") && (myFloor == "2")) {
        currentArray = en_array_2f;
    } else if ((param == "en") && (myFloor == "3")) {
        currentArray = en_array_3f;
    } else {
        currentArray = en_array_1f;
    }


    $("#map_header").html(currentArray["map_header"]);
    $("#map_directions").html(currentArray["map_directions"]);
    $("#map_floor").html(currentArray["map_floor"]);

    $(".itemsShow").hide();

    if (currentArray["map_item1"]) { $("#item1show").show(); $("#map_item1").html(currentArray["map_item1"]); }
    if (currentArray["map_item1_direct"]) { $("#map_item1_direct").html("<h3>" + currentArray["map_item1"] + "</h3>" + "<p>" + currentArray["map_item1_direct"] + "</p>"); }
    if (currentArray["map_item2"]) { $("#item2show").show(); $("#map_item2").html(currentArray["map_item2"]); }
    if (currentArray["map_item2_direct"]) { $("#map_item2_direct").html("<h3>" + currentArray["map_item2"] + "</h3>" + "<p>" + currentArray["map_item2_direct"] + "</p>"); }    
    if (currentArray["map_item3"]) { $("#item3show").show(); $("#map_item3").html(currentArray["map_item3"]); }
    if (currentArray["map_item3_direct"]) { $("#map_item3_direct").html("<h3>" + currentArray["map_item3"] + "</h3>" + "<p>" + currentArray["map_item3_direct"] + "</p>"); }    
    if (currentArray["map_item4"]) { $("#item4show").show(); $("#map_item4").html(currentArray["map_item4"]); }
    if (currentArray["map_item4_direct"]) { $("#map_item4_direct").html("<h3>" + currentArray["map_item4"] + "</h3>" + "<p>" + currentArray["map_item4_direct"] + "</p>"); }    
    if (currentArray["map_item5"]) { $("#item5show").show(); $("#map_item5").html(currentArray["map_item5"]); }
    if (currentArray["map_item5_direct"]) { $("#map_item5_direct").html("<h3>" + currentArray["map_item5"] + "</h3>" + "<p>" + currentArray["map_item5_direct"] + "</p>"); }    
    if (currentArray["map_item6"]) { $("#item6show").show(); $("#map_item6").html(currentArray["map_item6"]); }
    if (currentArray["map_item6_direct"]) { $("#map_item6_direct").html("<h3>" + currentArray["map_item6"] + "</h3>" + "<p>" + currentArray["map_item6_direct"] + "</p>"); }    
    if (currentArray["map_item7"]) { $("#item7show").show(); $("#map_item7").html(currentArray["map_item7"]); }
    if (currentArray["map_item7_direct"]) { $("#map_item7_direct").html("<h3>" + currentArray["map_item7"] + "</h3>" + "<p>" + currentArray["map_item7_direct"] + "</p>"); }    
    if (currentArray["map_item8"]) { $("#item8show").show(); $("#map_item8").html(currentArray["map_item8"]); }
    if (currentArray["map_item8_direct"]) { $("#map_item8_direct").html("<h3>" + currentArray["map_item8"] + "</h3>" + "<p>" + currentArray["map_item8_direct"] + "</p>"); }    
    if (currentArray["map_item9"]) { $("#item9show").show(); $("#map_item9").html(currentArray["map_item9"]); }
    if (currentArray["map_item9_direct"]) { $("#map_item9_direct").html("<h3>" + currentArray["map_item9"] + "</h3>" + "<p>" + currentArray["map_item9_direct"] + "</p>"); }    
    if (currentArray["map_item10"]) { $("#item10show").show(); $("#map_item10").html(currentArray["map_item10"]); }
    if (currentArray["map_item10_direct"]) { $("#map_item10_direct").html("<h3>" + currentArray["map_item10"] + "</h3>" + "<p>" + currentArray["map_item10_direct"] + "</p>"); }    
    

}

function changeLayoutToFloor(floor) {
    switch (floor) {
        case '1':
            $(".map-display").hide();
            $("#map_1stFloor").show();
            $("#btnFloor1").addClass("active");
            break;
        case '2':
            $(".map-display").hide();
            $("#map_2ndFloor").show();
            $("#btnFloor2").addClass("active");
            break;
        case '3':
            $(".map-display").hide();
            $("#map_3rdFloor").show();
            $("#btnFloor3").addClass("active");
            break;
        case 'b':
            $(".map-display").hide();
            $("#map_basement").show();
            $("#btnFloorB").addClass("active");
            break;
        default: 
            break;
    }
}

function switchFloor(floor) {
    var myParam = getParameterByName('lang');

    window.location.href = "?floor=" + floor + "&lang=" + myParam;
}

function openDirection(room, event) {
    if (event) {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    }
    $( "#dialog" + room ).dialog( "open" );

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
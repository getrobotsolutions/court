$(document).ready(function() {

    var myParam = getParameterByName('lang');
    
    if (myParam === "sp") {
        $("a").each(function() {
            var alink = $(this).attr("href");
            if (alink) { alink = alink.substring(0, alink.length-2); }
            $(this).attr("href", alink + "sp"); });
            $("#eng").removeClass("active");
            $("#spa").addClass("active");
    } else {
        $("a").each(function() {
            var alink = $(this).attr("href");
            if (alink) { alink = alink.substring(0, alink.length-2); }
            $(this).attr("href", alink + "en"); });
            $("#eng").addClass("active");
            $("#spa").removeClass("active");
    }

    translateText(myParam);


});

function translateText(param) {

    var sp_array = { "msg_judges_allsburg": "Honorable Jon A. Van Allsburg",
                    "msg_judges_allsburg_description": "<p> Se sirve el 1 de enero de 2005 hasta el presente </p> <p> Lugar: Palacio de Justicia del Condado de Ottawa, Sala 2A </p> <p> El juez Van Allsburg se graduó de West Ottawa High School y Central Michigan University, y es un honor Graduado de la Facultad de Derecho de MSU. Van Allsburg ejerció como abogado privado en Holanda durante más de veinte años, y ha enseñado derecho mercantil en Grand Valley State University y Hope College. </p> <p> En 2004, Van Allsburg se postuló para el juez de circuito del condado de Ottawa y Ganó el cuarto asiento de nueva creación en la pista de circuito. Actualmente es el equipo pro juez del Juez Jefe del tribunal, asignado a la División de Familia y al Tribunal de Negocios, y tiene asignados todos los recursos administrativos y recursos del Tribunal de Distrito. </p> <p> Van Allsburg ha servido en la Violencia Familiar Departamento del Consejo Nacional de Jueces de Tribunales de Menores y Familias, y actualmente es Tesorero de la Asociación de Jueces de Michigan. Sus pasatiempos incluyen leer, esquiar y destacar (alcanzando el punto más alto de cada uno de los 50 estados, ha completado 41). </p>",
                    "msg_judges_miedema": "Honorable Karen J. Miedema",
                    "msg_judges_miedema_description": "<p> Cumplido el 1 de enero de 2017 hasta el presente </p> <p> Lugar: Palacio de justicia del condado de Ottawa, sala de tribunal 3B </p> <p> La juez Miedema fue educada y educada en el condado de Ottawa; se graduó de la Universidad Estatal de Ferris. Después de recibir su licenciatura, asistió a la Facultad de Derecho de la Universidad Estatal de Wayne, donde recibió su Juris Doctor. </p> <p> Antes de convertirse en juez, Miedema fue fiscal adjunta en el condado de Oakland desde 1982 hasta 1986. Desde 1986 hasta 1989, Miedema un abogado asociado con Smith, Haughey, Ric & Roegge en Grand Rapids. En 1989, Miedema se convirtió en un fiscal auxiliar adjunto en el condado de Ottawa. </p> <p> Miedema fue electo a la 20ª Corte de Circuito - División de Primera Instancia en 2016 después de que el juez Edward Post anunció su retiro. </p>",
                    "msg_judges_hulsing": "Honorable Jon H. Hulsing",
                    "msg_judges_hulsing_description": "<p> Presentado desde el 27 de abril de 2006 hasta la fecha </p> <p> Lugar: Palacio de Justicia del Condado de Ottawa, Sala de Audiencias 3A </p> <p> El juez Hulsing se graduó de Western Michigan Christian High School. Recibió su licenciatura de la Universidad Estatal de Grand Valley en 1986, magna cum laud. Mientras asistía a GVSU, fue nombrado Estudiante del Año de Justicia Criminal. Durante sus años de licenciatura, se unió al Departamento del Sheriff del Condado de Ottawa como diputado. </p> <p> En 1985, Hulsing se convirtió en un oficial de patrulla de caminos en el Departamento de Policía de la Ciudad de Wyoming. Mientras trabajaba a tiempo completo como oficial de policía, Hulsing se graduó summa cum laude de Thomas M. Cooley de la Escuela de Derecho en 1991. </p>",                
                    "msg_judges_engle": "Honorable Kent D. Engle",
                    "msg_judges_engle_description": "<p> Se sirve el 1 de enero de 2011 hasta el presente </p> <p> Lugar: Palacio de Justicia del Condado de Ottawa, Sala de Justicia 2B Palacio de Justicia de Fillmore Complex, Sala de Justicia C </p> <p> El juez Engle se graduó de la Escuela Secundaria Zeeland y de la Universidad de Taylor. Después de la universidad, asistió a la Facultad de Derecho de la Universidad de Detroit. </p> <p> En 1988, el ex Fiscal Fiscal Wesley Nykamp y el Jefe de la Fiscalía Adjunta Ronald Frantz le ofrecieron un puesto como asistente fiscal y él aceptó. </p> <p> Engle prestó servicios en el Condado de Ottawa como fiscal asistente del fiscal desde 1988 hasta 2010. Manejando casos que van desde multas de tránsito hasta homicidios. </p> <p> En noviembre de 2010, Engle fue elegido para el tribunal del Tribunal de Circuito. Comenzó a servir como juez el 1 de enero de 2011. </p>",
                    "msg_judges_gelderloos": "Referee Patricia J. Gelderloos",
                    "msg_judges_gelderloos_description": "<p> Servido el 15 de abril de 2007 hasta el presente </p> <p> Lugar: Palacio de Justicia de Fillmore Complex </p> <p> La Árbitro Patricia J. Gelderloos recibió su Licenciatura en Economía de Negocios en Calvin College. Luego asistió a la Escuela de Derecho Thomas M. Cooley donde se graduó Magna Cum Laude. Mientras que en Thomas M. Cooley, el árbitro Gelderloos recibió certificados de mérito en escritura avanzada, resolución alternativa de disputas, organizaciones comerciales, procedimientos civiles I y II, Ley Constitucional II, impuestos, testamentos, sucesiones y fideicomisos, Torts II y Zonificación y uso de la tierra. </p> <p> Antes de comenzar con el Tribunal de Circuito 20 en 2007, el Árbitro Gelderloos fue un abogado previo a la audiencia en el Tribunal de Apelaciones de Michigan. Además, se desempeñó como instructora adjunta / asistente de enseñanza en la Escuela de Derecho Thomas M. Cooley. </p>",
                    "msg_judges_magley": "Referee Erin More Magley",
                    "msg_judges_magley_description": "<p> Servido el 6 de noviembre de 2000 hasta el presente </p> <p> Lugar: Palacio de Justicia del Condado de Ottawa, Sala de Audiencias 210 </p> <p> El árbitro Erin More Magley recibió su Bachillerato en Artes de la Universidad de Wittenberg en Springfield, Ohio con Especialidad en psicología y ciencias políticas, y menor en comunicaciones del habla. El árbitro Magley asistió a la Escuela de Derecho de Harvard, donde se graduó cum laude. Mientras estaba en la Facultad de Derecho de Harvard, participó en Proyectos de Derechos de los Niños y las Familias, el Programa Big Brother / Big Sisters y un Proyecto de Defensa de las Mujeres Líderes. </p> <p> Antes de comenzar con la Corte del 20º Circuito en 2000, la Árbitro Magley estaba en derecho privado. práctica. Ella también es una mediadora certificada. </p>",
                    "msg_judges_macias": "Referee David V. Macias",
                    "msg_judges_macias_description": "<p> Sirvió el 23 de abril de 2007 hasta el presente </p> <p> Lugar: Palacio de Justicia del Condado de Ottawa, Sala de Audiencias 305 </p> <p> El árbitro David Macias recibió su Bachillerato en Artes de Hope College y luego se graduó de Thomas M. Cooley Law School. El árbitro Macias es miembro de la Cámara de Comercio Hispana de Lansing, la Asociación de Negocios Hispanos del Área de Lansing, Latinoamericanos Unidos para el Progreso - Holanda y la Cámara de Comercio del Área de Holanda. </p> <p> El árbitro Macias ha impartido seminarios sobre temas de inmigración y Ley familiar. También está afiliado a la Comisión Mayor de Lansing Cesar F. Chaves en Lansing y la CASA en el Condado de Ottawa. El árbitro Macias es bilingüe y bicultural en español. Antes de comenzar con el Tribunal del 20º Circuito en 2007, el Árbitro Macias se desempeñó como abogado privado en Holland, Michigan. </p>" }; 

    var en_array = { "msg_judges_allsburg": "Honorable Jon A. Van Allsburg",
                     "msg_judges_allsburg_description": "<p>Served January 1, 2005 to present</p> <p>Location: Ottawa County Courthouse, Courtroom 2A</p> <p>Judge Van Allsburg graduated from West Ottawa High School and Central Michigan University, and is an honors graduate of the MSU College of Law. Van Allsburg was in a private law practice in Holland for more than twenty years, and has taught business law at both Grand Valley State University and Hope College.</p> <p>In 2004, Van Allsburg ran for Ottawa County Circuit Judge and won the newly created fourth seat on the circuit court. He is currently Chief Judge pro team of the court, assigned to the Family Division and to the Business Court, and is assigned all administrative appeals and appeals from the District Court.</p> <p>Van Allsburg has served in the Family Violence Department of the National Council of Juvenile and Family Court Judges, and is currently Treasurer of the Michigan Judges Association. His hobbies include reading, skiing, and highpointing (summiting the highest point of each of the 50 states- he has completed 41).</p>",
                     "msg_judges_miedema": "Honorable Karen J. Miedema",
                     "msg_judges_miedema_description": "<p>Served January 1, 2017 to present</p> <p>Location: Ottawa County Courthouse, Courtroom 3B</p> <p>Judge Miedema was raised and educated in Ottawa County, she graduated from Ferris State University. After receiving her bachelors she attended Wayne State University Law School where she received her Juris Doctor.</p> <p>Prior to becoming a judge, Miedema was an assistant prosecutor with Oakland County from 1982 - 1986. From 1986 - 1989 Miedema was an Associate Attorney with Smith, Haughey, Ric & Roegge in Grand Rapids. In 1989 Miedema became an Assistant Prosecuting Attorney with Ottawa County.</p> <p>Miedema was elected to the 20th Circuit Court - Trial Division in 2016 after Judge Edward Post announced his retirement.</p>",
                     "msg_judges_hulsing": "Honorable Jon H. Hulsing",
                     "msg_judges_hulsing_description": "<p>Served April 27, 2006 to present</p> <p>Location: Ottawa County Courthouse, Courtroom 3A</p> <p>Judge Hulsing graduated from Western Michigan Christian High School. He received his undergraduate degree from Grand Valley State University in 1986, magna cum laud. While attending GVSU, he was named the Criminal Justice Student of the Year. During his undergraduate years, he joined the Ottawa County Sheriff's Department as a deputy.</p> <p>In 1985 Hulsing became a road patrol officer with the City of Wyoming Police Department. While working full time as a police officer, Hulsing graduated summa cum laude from Thomas M. Cooley of Law School in 1991.</p>",                
                     "msg_judges_engle": "Honorable Kent D. Engle",
                     "msg_judges_engle_description": "<p>Served January 1, 2011 to present</p> <p>Location: Ottawa County Courthouse, Courtroom 2B Fillmore Complex Courthouse, Courtroom C</p> <p>Judge Engle graduated from Zeeland High School and Taylor University. After college he attended University of Detroit School of Law.</p> <p>In 1988, former Prosecuting Attorney Wesley Nykamp and Chief Assistant Prosecuting Attorney Ronald Frantz offered him a position as an assistant prosecuting attorney and he accepted.</p> <p>Engle served Ottawa County as an assistant prosecuting attorney from 1988 until 2010. Handling cases ranging from traffic citations to homicides.</p> <p>In November 2010, Engle was elected to the Circuit Court bench. He began serving as judge on January 1, 2011.</p>",
                     "msg_judges_gelderloos": "Referee Patricia J. Gelderloos",
                     "msg_judges_gelderloos_description": "<p>Served April 15, 2007 to present</p> <p>Location: Fillmore Complex Courthouse</p> <p>Referee Patricia J. Gelderloos received her Bachelor of Arts in Business Economics from Calvin College. She went on to attend Thomas M. Cooley Law School where she graduated Magna Cum Laude. While at Thomas M. Cooley Referee Gelderloos received certificates of merit in advanced writing, alternative dispute resolution, business organizations, civil procedures I and II, Constitutional Law II, Taxation, Wills, Estates & Trusts, Torts II, and Zoning & Land Use.</p> <p>Prior to starting with the 20th Circuit Court in 2007, Referee Gelderloos was a pre-hearing attorney at the Michigan Court of Appeals. Additionally she served as an adjunct instructor/teaching assistant at Thomas M. Cooley Law School.</p>",
                     "msg_judges_magley": "Referee Erin More Magley",
                     "msg_judges_magley_description": "<p>Served November 6, 2000 to present</p> <p>Location: Ottawa County Courthouse, Hearing Room 210</p> <p>Referee Erin More Magley received her Bachelors of Arts from Wittenberg University in Springfield, Ohio with major in psychology and political science and a minor in speech communications. Referee Magley went on to attend Harvard Law School where she graduated cum laude. While at Harvard Law School she participated in Children and Family Rights Projects, Big Brother/Big Sisters Program and a Batter Women's Advocacy Project.</p> <p>Prior to starting with 20th Circuit Court in 2000, Referee Magley was in private law practice. She is also a certified Mediator.</p>",
                     "msg_judges_macias": "Referee David V. Macias",
                     "msg_judges_macias_description": "<p>Served April 23, 2007 to present</p> <p>Location: Ottawa County Courthouse, Hearing Room 305</p> <p>Referee David Macias received his Bachelor of Arts from Hope College, then went on to graduate from Thomas M. Cooley Law School. Referee Macias is a member of the Lansing Hispanic Chamber of Commerce, Lansing Area Hispanic Business Association, Latin Americans United for Progress - Holland, and Holland Area Chamber of Commerce.</p> <p>Referee Macias has given seminars on Immigration Issues and Family Law. He is also affiliated with Greater Lansing Cesar F. Chaves Commission in Lansing and the CASA in Ottawa County. Referee Macias is bi-lingual and bi-cultural in Spanish. Prior to starting with the 20th Circuit Court in 2007, Referee Macias was in private law practice in Holland, Michigan.</p>" }; 
    var currentArray = [];

    if (param == "sp") {
        currentArray = sp_array;
    } else {
        currentArray = en_array;
    }

    $("#msg_judges_allsburg").html(currentArray["msg_judges_allsburg"]);
    $("#msg_judges_allsburg_description").html(currentArray["msg_judges_allsburg_description"]);
    $("#msg_judges_miedema").html(currentArray["msg_judges_miedema"]);
    $("#msg_judges_miedema_description").html(currentArray["msg_judges_miedema_description"]);
    $("#msg_judges_hulsing").html(currentArray["msg_judges_hulsing"]);
    $("#msg_judges_hulsing_description").html(currentArray["msg_judges_hulsing_description"]);
    $("#msg_judges_engle").html(currentArray["msg_judges_engle"]);
    $("#msg_judges_engle_description").html(currentArray["msg_judges_engle_description"]);
    $("#msg_judges_gelderloos").html(currentArray["msg_judges_gelderloos"]);
    $("#msg_judges_gelderloos_description").html(currentArray["msg_judges_gelderloos_description"]);
    $("#msg_judges_magley").html(currentArray["msg_judges_magley"]);
    $("#msg_judges_magley_description").html(currentArray["msg_judges_magley_description"]);
    $("#msg_judges_macias").html(currentArray["msg_judges_macias"]);
    $("#msg_judges_macias_description").html(currentArray["msg_judges_macias_description"]);
    
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
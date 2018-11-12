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

  $( "#accordion" ).accordion({ heightStyle: "content" });

});

function translateText(param) {


  var sp_array = { "msg_faqs_header": "HAGA CLIC EN UN SUJETO PARA OBTENER MÁS INFORMACIÓN",
      "msg_faqs_differences_question": "Diferencia entre el Distrito y el Tribunal de Circuito",
      "msg_faqs_differences_answer": "<p> En general, el Tribunal de Circuito 20 maneja todos los casos civiles con reclamos de más de $ 25,000 y todos los casos criminales por delitos graves (casos en los que el acusado, si es declarado culpable, podría ser enviado a prisión). La división familiar El Tribunal de Circuito se encarga de todos los casos relacionados con acciones de divorcio, paternidad y protección personal (PPO). Además, el Tribunal de Circuito atiende casos apelados ante otros tribunales de primera instancia o agencias administrativas. Hay cuatro jueces del Tribunal de Circuito en Grand Haven: Jueces <a href='/home/judges#allsburg?lang=en'> Jon Van Allsburg </a> y <a href='/home/judges#engle?lang=en'> Kent Engle </a>, con salas de audiencia en el segundo piso y jueces <a href='/home/judges#hulsing?lang=en'> Jon Hulsing </a> y <a href='/home/judges#miedema'> Karen Miedema </ a >, con salas de audiencia en el tercer piso. </p> <p> El Tribunal del Distrito 58 se encarga de la mayoría de las infracciones de tránsito, todos los casos civiles con Reclama hasta $ 25,000, los asuntos del arrendador-arrendatario, la mayoría de las multas de tráfico y todos los casos criminales de delitos menores (en general, los casos en que el acusado, si es declarado culpable, no puede ser condenado a más de un año de cárcel). [Para obtener más información, haga clic aquí.] Además, los casos de reclamos menores son atendidos por una división del Tribunal de Distrito. El juez Craig E. Bunce se desempeña como juez del Tribunal de Distrito en el Tribunal de Grand Haven, con una sala del tribunal en el 1er piso. </p> ",
      "msg_faqs_small_claims_question": "Tribunal de reclamos menores",
      "msg_faqs_small_claims_answer": "<p> Cuando está demandando a alguien por $ 6,000 o menos, su caso se puede conocer en la división de reclamos menores del Tribunal de Distrito. Su caso puede ser escuchado por un juez o un magistrado de abogados. </p> <p> En los casos de reclamos menores, las partes se representan a sí mismas. No puede tener un abogado que presente su caso. Además, la decisión del juez es definitiva y no puede ser apelada. Si cualquiera de las partes se opone a estas condiciones, el caso se transferirá al tribunal de distrito para una audiencia. Sin embargo, si el caso es atendido por un magistrado de abogados, la decisión puede ser apelada ante el juez de distrito para una nueva audiencia. </p> <p> El acusado puede solicitar que se elimine un caso de reclamos menores a la división civil regular. Si eso ocurre, todas las partes pueden tener abogados. El procesamiento del caso luego sigue el patrón de un caso civil regular y la decisión puede ser apelada ante el Tribunal de Circuito. </p> ",
      "msg_faqs_filing_question": "Filing",
      "msg_faqs_filing_answer": "<p> Si desea presentar documentos en un caso de la Corte de Circuito, puede hacerlo en la oficina de Registros de la Corte de Circuito del Secretario del Condado de Ottawa en el 3er piso. </p> <p> Si le gustaría presentar documentos en un caso del Tribunal de Distrito, puede hacerlo en las ventanas del Tribunal de Distrito en el primer piso. </p> <p> Por lo general, se considera que un documento está 'archivado' el día en que los recibe el Corte. </p> ",
      "msg_faqs_fines_question": "Multas y costos",
      "msg_faqs_fines_answer": "<p> Las multas, costos y otras obligaciones financieras impuestas por el tribunal deben pagarse al momento de la evaluación, excepto cuando el tribunal permita lo contrario, por una buena causa mostrada. RC 1.110. Las multas y costos del Tribunal de Circuito pueden se pagará en la oficina de Registros del Tribunal de Circuito del Condado de Ottawa en el tercer piso. Si desea establecer un acuerdo de pago, consulte a la División de Juicios en el tercer piso. </p> <p> Multas del Tribunal de Distrito , los costos y otras obligaciones financieras pueden pagarse en las ventanas del Tribunal de Distrito en el 1er piso. </p> ",
      "msg_faqs_legal_question": "Aviso legal",
      "msg_faqs_legal_answer": "<p> El personal del tribunal no puede ofrecer asesoría legal sobre ningún asunto. Las partes pueden solicitar orientación legal a un abogado con licencia. Las partes no representadas que buscan información legal, formularios de la corte e información general sobre los tribunales del Condado de Ottawa pueden discutir esas cuestiones con el el personal del Centro de autoayuda legal ubicado en el segundo piso. </p> ",
      "msg_faqs_friend_question": "Friend of the Court",
      "msg_faqs_friend_answer": "<p> La oficina de Friend of the Court es parte de la división de familia del Tribunal de Circuito y maneja los casos de relaciones domésticas en los que están involucrados niños menores de edad. Está ubicado en el segundo piso. </p>",
      "msg_faqs_childsupport_question": "Pagos de manutención infantil",
      "msg_faqs_childsupport_answer": "Puede pagar en efectivo o con tarjeta de crédito en el Friend of the Court en el segundo piso. Allí se encuentra un cajero automático. También puede pagar en línea en <a href = 'http: //www.GovPayNow.com 'target =' _ blank '> www.GovPayNow.com </a> o por teléfono al 1-888-604-7888. </p> <p> Puede enviar los pagos por correo a: </p> <div> Michigan State Unidad de Desembolso (MiSDU) </div> <div> PO Box 30351 </div> <div> Lansing, Michigan 48909-7851 </div> <div> www.misdu.com </div> <p> Por favor esté seguro para anotar su número de seguro social o número de caso y nombre en el pago. </p> ",
      "msg_faqs_childsupportmod_question": "Modificación de la manutención de los hijos",
      "msg_faqs_childsupportmod_answer": "<p> Es posible que tenga que presentar una moción para modificar la asistencia. Los formularios de la moción se pueden solicitar en el Friend of the Court en el segundo piso. </p>",
      "msg_faqs_parenting_question": "Tiempo de crianza",
      "msg_faqs_parenting_answer": "<p> Si no se cumple una cláusula de tiempo de crianza en su orden judicial, puede presentar una queja por tiempo de crianza. En el Friend of the Court, en el piso 2, se encuentra disponible un formulario de queja. no identifica el tiempo de crianza específico, es posible que deba presentar una moción para modificar el tiempo de crianza. Este formulario también está disponible en el Friend of the Court. </p> ",
      "msg_faqs_probate_question": "Tribunal de Sucesiones",
      "msg_faqs_probate_answer": "<p> El Tribunal de Sucesiones maneja testamentos, administra patrimonios y fideicomisos, designa tutores y curadores, y ordena tratamiento para personas con enfermedades mentales y discapacidades del desarrollo. El Honorable Mark Feyen es el juez del Tribunal de Sucesiones del Condado de Ottawa, que se encuentra en West Olive. </p> <p> Si se encuentra aquí para alguno de los siguientes, consulte a los empleados del Tribunal de Distrito 58 en el 1er piso: <ul> <li> Reclamos menores </li> <li > Civil general (menos de $ 25,000) </li> <li> Propietario / Inquilino </li> <li> Pagos de multas de tráfico </li> <li> Audiencias de multas de tráfico </li> <li> Embargos </li> <li> Arraignments </li> <li> Causas probables </li> <li> Exámenes preliminares </li> <li>Weddings</li></ul> </p> <p> Consulte 58th District Período de prueba en la corte en el nivel inferior del jardín para los siguientes servicios: <ul> <li> Servicio comunitario </li> <li> JAWS </li> <li> Presencia </li> <li> Sobriet y Corte </li> <li> Libertad condicional </li> <li> ISP </li> <li> Pruebas de detección de drogas </li> </ul> </p> <p> Consulte el Centro de servicios públicos del 1er piso para los siguientes servicios: <ul> <li> Solicite una licencia de matrimonio </li> <li> Ordene un registro vital </li> <li> Búsqueda de escrituras </li> <li> Información de la elección </li> < li> Registro de Doing Business As (DBA) </li> <li> Solicitudes de pasaporte </li> <li> Pagar impuestos a la propiedad </li> <li> Licencia de perro </li> </ul> </p> " ,
      "msg_faqs_prosecuting_question": "Fiscal de Procesamiento",
      "msg_faqs_prosecuting_answer": "<p> La oficina de Grand Haven de la Fiscalía se encuentra en el 1er piso. </p>",
      "msg_faqs_publicdefend_question": "Defensor público",
      "msg_faqs_publicdefend_answer": "<p> Si usted es un acusado en un caso penal y no puede pagarle a un abogado para que lo represente, puede solicitar la designación de un defensor público. Puede presentar su solicitud en el Tribunal de Distrito en la primera planta, o , si su caso ha sido vinculado a la Corte de Circuito, puede presentar su solicitud en la oficina de Registros de la Corte de Circuito en el 3er piso. </p> "};

  var en_array = { "msg_faqs_header": "CLICK ON A SUBJECT TO LEARN MORE",
    "msg_faqs_differences_question": "Difference  between  District  and  Circuit  Court",
    "msg_faqs_differences_answer": "<p>In general, the 20th Circuit Court handles all civil cases with claims of more than $25,000 and all felony criminal cases (cases where the accused, if found guilty, could be sent  to  prison). The  family  division  of  Circuit  Court  handles  all  cases  regarding  divorce,  paternity,  and  personal  protection  actions.    (PPOs).    In  addition,  the  Circuit  Court  hears  cases  appealed  from  the  other  trial  courts  or  from  administrative  agencies.    There  are  four  Circuit  Court  Judges  in  Grand  Haven:  Judges  <a href='/home/judges#allsburg?lang=en'>Jon  Van  Allsburg</a>  and  <a href='/home/judges#engle?lang=en'>Kent  Engle</a>,  with  courtrooms  on  the  2nd  Floor;  and  Judges  <a href='/home/judges#hulsing?lang=en'>Jon  Hulsing</a>  and  <a href='/home/judges#miedema'>Karen  Miedema</a>,  with  courtrooms  on  the  3rd  Floor. </p> <p>The  58th  District  Court  handles  most  traffic  violations,  all  civil  cases  with  claims  up  to  $25,000,  landlord-tenant  matters,  most  traffic  tickets,  and  all  misdemeanor  criminal  cases  (generally,  cases  where  the  accused,  if  found  guilty,  cannot  be  sentenced  to  more  than  one  year  in  jail).  [For  more  information,  click  here.]In  addition,  small  claims  cases  are  heard  by  a  division  of  the  District Court.  Judge Craig E. Bunce serves as the District Court judge at the Grand Haven Courthouse, with a courtroom on the 1st Floor.</p>",
    "msg_faqs_small_claims_question": "Small Claims Court",
    "msg_faqs_small_claims_answer": "<p>When  you  are  suing  someone  for  $6,000  or  less,  your  case  can  be  heard  in  the  small  claims  division  of  the  District  Court.  Your  case  may  be  heard  by  a  judge  or  an  attorney  magistrate.</p> <p>In  small  claims  cases,  the  parties  represent  themselves.  You  cannot  have  an  attorney  present  your  case.  In  addition,  the  judge's  decision  is  final  and  cannot  be  appealed.  If  either  party  objects  to  these  conditions,  the  case  will  be  transferred  to  the  district  court  for  a  hearing.  However,  if  the  case  is  heard  by  an  attorney  magistrate,  the  decision  may  be  appealed  to  the  district  judge  for  a  new  hearing.</p>  <p>The  defendant  can  request  that  a  small  claims  case  be  removed  to  the  regular  civil  division.  If  that  occurs,  all  parties  may  have  attorneys.  Processing  of  the  case  then  follows  the  pattern  of  a  regular  civil  case  and  the  decision  may  be  appealed  to  the  Circuit  Court.</p>",
    "msg_faqs_filing_question": "Filing",
    "msg_faqs_filing_answer": "<p>If youu  would  like  to  file  papers  in  a  Circuit  Court  case,  you  may  do  so  at  the  Ottawa  County  Clerk/Register’s  Circuit  Court  Records  office  on  the  3rd  floor.</p> <p>If  you  would  like  to  file  papers  in  a  District  Court  case,  you  may  do  so  at  the  District  Court  windows  on  the  1st  floor.</p>  <p>A  document  is  generally  considered  to  be  “filed”  on  the  day  they  are  received  by  the  Court.    </p>",
    "msg_faqs_fines_question": "Fines  and  Costs",
    "msg_faqs_fines_answer": "<p>Fines,  costs,  and  other  financial  obligations  imposed  by  the  court  must  be  paid  at  the  time  of  assessment,  except  when  the  court  allows  otherwise,  for  good  cause  shown.MCR  1.110.    Circuit  Court  fines  and  costs  may  be  paid  at  the  Ottawa  County  Clerk/Register’s  Circuit  Court  Records  office  on  the  3rd  floor.If  you  would  like  to  set  up  a  payment  arrangement,  please  inquire  at  the  Trial  Division  on  the  3rd  floor.</p>  <p>District  Court  fines,  costs  and  other  financial  obligations  may  be  paid  at  the  District  Court  windows  on  the  1st  Floor.     </p>",
    "msg_faqs_legal_question": "Legal  Advice",
    "msg_faqs_legal_answer": "<p>Court staff cannot offer legal advice on any matter.  Parties may seek legal guidance from a licensed attorney.  Unrepresented parties seeking legal information, court forms and general information about the Ottawa County courts may discuss those issues with the staff of the Legal Self-Help Center located on the 2nd Floor.</p>",
    "msg_faqs_friend_question": "Friend  of  the  Court  ",
    "msg_faqs_friend_answer": "<p>The Friend of the Court office is part of the family division of the Circuit Court and handles domestic relations cases where minor children are involved.  It is located on the 2nd Floor.</p>",
    "msg_faqs_childsupport_question": "Child  support  payments",
    "msg_faqs_childsupport_answer": "You can pay with cash or credit card at the Friend of the Court on the 2nd Floor.  An ATM is located there.  You can also pay online at <a href='http://www.GovPayNow.com' target='_blank'>www.GovPayNow.com</a> or by telephone at 1-888-604-7888.</p><p>You can mail payments to:</p> <div>Michigan State Disbursement Unit (MiSDU)</div> <div>P.O. Box 30351 </div><div>Lansing, Michigan 48909-7851</div><div>www.misdu.com</div> <p>Please be sure to note your social security number or case number and name on the payment.</p>",
    "msg_faqs_childsupportmod_question": "Child  support  modification  ",
    "msg_faqs_childsupportmod_answer": "<p>You may need to file a motion to modify support.  Motion forms may be requested at the Friend of the Court on the 2nd Floor. </p>",
    "msg_faqs_parenting_question": "Parenting  time",
    "msg_faqs_parenting_answer": "<p>If a parenting time provision in your court order is not being followed, you may file a parenting time complaint.  A complaint form is available at the Friend of the Court on the 2nd Floor.  If your court order does not identify specific parenting time, you may need to file a motion to modify parenting time.  That form is also available at the Friend of the Court.</p>",
    "msg_faqs_probate_question": "Probate  Court",
    "msg_faqs_probate_answer": "<p>The  Probate  Court  handles  wills,  administers  estates  and  trusts,  appoints  guardians  and  conservators,  and  orders  treatment  for  mentally  ill  and  developmentally  disabled  persons.    Hon.  Mark  Feyen  serves  as  the  judge  of  the  Ottawa  County  Probate  Court,  which  is  located  in  West  Olive.</p>  <p>If  you  are  here  for  any  of  the  following,  please  see  the  58th  District  Court  clerks  on  the  1st  Floor: <ul>   <li>Small  Claims</li>  <li>General  Civil  (less  than  $25,000)</li>  <li>Landlord/Tenant</li>  <li>Traffic  Ticket  Payments</li>  <li>Traffic  Ticket  Hearings</li>  <li>Garnishments</li>  <li>Arraignments</li>  <li>Probable  Cause  Conferences</li>  <li>Preliminary  Exams</li>  <li>Weddings</li></ul></p>  <p>Please  see  58th  District  Court  Probation  on  the  lower  garden  level  for  the  following  services: <ul> <li>Community  Service</li>  <li>JAWS</li>  <li>Presentence</li>    <li>Sobriety  Court</li>  <li>Probation</li>  <li>ISP</li>  <li>Drug  Testing</li></ul></p>  <p>Please  see  the  1st Floor  Public  Service  Center  for  the  following  services:      <ul><li>Apply  for  a  marriage  license</li>      <li>Order  a  vital  record</li>      <li>Deed  search</li>      <li>Election  information</li>      <li>Doing  Business  As  (DBA)  registration</li>      <li>Passport  applications</li>      <li>Pay  property  taxes</li>      <li>Dog  licensing</li></ul></p>",
    "msg_faqs_prosecuting_question": "Prosecuting  Attorney",
    "msg_faqs_prosecuting_answer": "<p>The  Prosecuting  Attorney’s  Grand  Haven  office  is  located  on  the  1st  Floor.</p>",
    "msg_faqs_publicdefend_question": "Public  Defender",
    "msg_faqs_publicdefend_answer": "<p>If  you  are  a  defendant  in  a  criminal  case  and  you  cannot  afford  an  attorney  to  represent  you,  you  may  apply  for  a  public  defender  to  be  appointed.    You  may  apply  at  the  District  Court  on  the  1stFloor,  or,  if  your  case  has  been  bound  over  to  Circuit  Court,  you  may  apply  at  the  Circuit  Court  Records  office  on  the  3rd  Floor.</p>"  };
  
  var currentArray = [];

  if (param == "sp") {
      currentArray = sp_array;
  } else {
      currentArray = en_array;
  }

  $("#msg_faqs_header").html(currentArray["msg_faqs_header"]);  
  $("#msg_faqs_differences_question").html(currentArray["msg_faqs_differences_question"]);
  $("#msg_faqs_differences_answer").html(currentArray["msg_faqs_differences_answer"]);
  $("#msg_faqs_small_claims_question").html(currentArray["msg_faqs_small_claims_question"]);
  $("#msg_faqs_small_claims_answer").html(currentArray["msg_faqs_small_claims_answer"]);
  $("#msg_faqs_filing_question").html(currentArray["msg_faqs_filing_question"]);
  $("#msg_faqs_filing_answer").html(currentArray["msg_faqs_filing_answer"]);
  $("#msg_faqs_fines_question").html(currentArray["msg_faqs_fines_question"]);
  $("#msg_faqs_fines_answer").html(currentArray["msg_faqs_fines_answer"]);
  $("#msg_faqs_legal_question").html(currentArray["msg_faqs_legal_question"]);
  $("#msg_faqs_legal_answer").html(currentArray["msg_faqs_legal_answer"]);
  $("#msg_faqs_friend_question").html(currentArray["msg_faqs_friend_question"]);
  $("#msg_faqs_friend_answer").html(currentArray["msg_faqs_friend_answer"]);
  $("#msg_faqs_childsupport_question").html(currentArray["msg_faqs_childsupport_question"]);
  $("#msg_faqs_childsupport_answer").html(currentArray["msg_faqs_childsupport_answer"]);
  $("#msg_faqs_childsupportmod_question").html(currentArray["msg_faqs_childsupportmod_question"]);
  $("#msg_faqs_childsupportmod_answer").html(currentArray["msg_faqs_childsupportmod_answer"]);
  $("#msg_faqs_parenting_question").html(currentArray["msg_faqs_parenting_question"]);
  $("#msg_faqs_parenting_answer").html(currentArray["msg_faqs_parenting_answer"]);
  $("#msg_faqs_probate_question").html(currentArray["msg_faqs_probate_question"]);
  $("#msg_faqs_probate_answer").html(currentArray["msg_faqs_probate_answer"]);
  $("#msg_faqs_prosecuting_question").html(currentArray["msg_faqs_prosecuting_question"]);
  $("#msg_faqs_prosecuting_answer").html(currentArray["msg_faqs_prosecuting_answer"]);
  $("#msg_faqs_publicdefend_question").html(currentArray["msg_faqs_publicdefend_question"]);
  $("#msg_faqs_publicdefend_answer").html(currentArray["msg_faqs_publicdefend_answer"]);
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
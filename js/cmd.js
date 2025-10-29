
/* ************************************************************************************************** */
/* add solicitud reg table*/
/* ************************************************************************************************** */ 
function addRegSolicitud(nombre, descripcion, dataInputSp){

    let tableBody = document.getElementById("tbody");

    for (var i = 0; i < dataInputSp.length; i++) {

        var tb_nombre = nombre[i];
        let tb_valor = dataInputSp[i];
        let tb_descripcion = descripcion[i];        
       
        let val0 = `<td class="table-td__0 ">${i} </td>`;
        let val1 = `<td class="table-td__1 ">${tb_nombre} </td>`;
        let val2 = `<td class="table-td__2 ">${tb_valor}</td>`;
        let val3 = `<td class="table-td__3 ">${tb_descripcion}</td>`;

        if (i==0){
            val0 = `<td class="table-td__0 c_caja-pinpad">${i} </td>`;
            val1 = `<td class="table-td__1 c_caja-pinpad">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_caja-pinpad">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_caja-pinpad">${tb_descripcion}</td>`;
        }else if ((i%2) == 0){
            val0 = `<td class="table-td__0 c_caja-pinpad_s">${i} </td>`;
            val1 = `<td class="table-td__1 c_caja-pinpad_s">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_caja-pinpad_s">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_caja-pinpad_s">${tb_descripcion}</td>`;
        }

        tableBody.innerHTML += `<tr>${val0 + val1 + val2 + val3}</tr>`; 
      }

}

/* ************************************************************************************************** */
/* add resp reg table*/
/* ************************************************************************************************** */ 
function addRegRespuesta(nombre, descripcion, dataInputSp){

    let tableBody = document.getElementById("tbody");

    for (var i = 0; i < dataInputSp.length; i++) {

        var tb_nombre = nombre[i];
        let tb_valor = dataInputSp[i];
        let tb_descripcion = descripcion[i];
       
        let val0 = `<td class="table-td__0 ">${i} </td>`;
        let val1 = `<td class="table-td__1 ">${tb_nombre} </td>`;
        let val2 = `<td class="table-td__2 ">${tb_valor}</td>`;
        let val3 = `<td class="table-td__3 ">${tb_descripcion}</td>`;

        if (i==0){
            val0 = `<td class="table-td__0 c_c_pinpad-caja">${i} </td>`;
            val1 = `<td class="table-td__1 c_pinpad-caja">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_pinpad-caja">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_pinpad-caja">${tb_descripcion}</td>`;
        }else if ((i%2) == 0){
            val0 = `<td class="table-td__0 c_pinpad-caja_r">${i} </td>`;
            val1 = `<td class="table-td__1 c_pinpad-caja_r">${tb_nombre} </td>`;
            val2 = `<td class="table-td__2 c_pinpad-caja_r">${tb_valor}</td>`;
            val3 = `<td class="table-td__3 c_pinpad-caja_r">${tb_descripcion}</td>`;
        }

        tableBody.innerHTML += `<tr>${val0 + val1 + val2 + val3}</tr>`; 
      }

}

/* ************************************************************************************************** */
/* Command Read Card*/
/* ************************************************************************************************** */ 
function desgReadCard(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Estado",
        "Monto",
        "Tipo de tarjeta",
        "Lista de montos vuelto",
        "Monto vuelto",
        "Monto propina/donación",
        "Flag permite cuotas",
        "Número mínimo de cuotas sin interés",
        "Número máximo de cuotas sin interés",
        "Número mínimo de cuotas con interés",
        "Número máximo de cuotas con interés",
        "Tipo de transacción",
        "Flag mostrar glosas",
        "Glosas",
        "Solicitud de PIN",
        "Código de moneda",
    ];

    let descripcion = ["comando inicio de venta, CAJA -> PINPAD",
        "<00> Con lectura de tarjeta. <01> Sin lectura de tarjeta (excepto cambio de monto para CTLS).NOTA: En el caso que el cliente tenga alguna promoción y el monto original cambió, este valor va en 00 para ctls, ya que debe volver a leer la tarjeta pasándole el nuevo monto. Para Banda y EMV Chip ese valor va en 01.",
        "Incluir dos decimales. Ej: $1.000.- se debe enviar “100000”",
        "“CR” Crédito “DB” Debito “NN” Tarjetas internacionales.“” o vacío para transacciones iniciales donde se desconoce el tipo de tarjeta.",
        "Separador “;” incluyendo el ultimo. Lista de montos de vuelto con decimales.Ej: “200000;500000;1000000;2000000;”",
        
        "Si ya fue seleccionado desde la caja con valor mayor o igual a cero, no debe mostrar opción de seleccionar vuelto en el Pinpad.Solo para debito:0 = sin vuelto.>0 = con vuelto ingresado en caja.Vacío = solicitar vuelto en el Pinpad.",
        
        "Si ya fue seleccionado desde la caja con valor mayor o igual a cero. De lo contrario, solicitar ingreso en el Pinpad.0 = sin propina>0 = con propina ingresado en caja.Vacío = solicitar propina en el Pinpad.",
        
        "“Y” debe solicitar número de cuotas en el Pinpad “N” no debe mostrar opción de numero de cuotas.Para el caso de tarjetas EMV internacionales no debe ofrecer cuotas.",

        "Ejemplo: “02”",
        "Ejemplo: “03”",
        "Ejemplo: “04”",
        "Ejemplo: “48”",
        "“00” Venta.“01” Anulación.",
        "“Y” Encendido se utiliza si desea confirmar monto/cuotas.“N” Apagado para solo lectura de tarjeta o solo ingresar pin.",
        "Enviar líneas con un separador, de esta manera tendremos solo un campo con múltiples líneas no limitadas a lo que permite un equipo en particular.|línea 1  ;  línea 2  ;  línea n;|",
        "“00” Siempre.“01” Permite CVM.“02” Nunca.",
        "“CL” Tipo moneda pesos chilenos. Utilizar por defecto.“US” Para montos tipo dólar."
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Response Read Card*/ 
/* ************************************************************************************************** */ 
function desgRespReadCard(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta",
        "4 últimos dígitos",        
        "Nombre Tarjeta Habiente",
        "Tipo captura",
        "Marca de la tarjeta",
        "Bin",
        "PAN",
        "PAN",
        "Track1",
        "Track2",
        "KSN PIN (cifrado)",
        "KSN PAN (cifrado)",
        "Pinblock (cifrado)",
        "Monto vuelto",
        "Monto propina/donación",
        "Numero de cuotas",
        "Criptograma",
        "Issuer Country Code",
        "Terminal Country Code",
        "Card Sequence Number",
        "CVM Result",
        "Código de servicio",
        "Serie del terminal",
        "Modelo terminal",
        "Versión de la app"
    ];


    let descripcion = ["Comando inicio de venta, CAJA <- PINPAD",
        "“00” comando procesado correctamente en el Pinpad.“99” comando terminó con error/cancelado/timeout.",

        "Siempre se entregarán los 4 últimos dígitos de la tarjeta.",

        "Obtenido del track1 o para EMV del Tag 50",

        "Los Posibles valores son:<br/>B=banda<br/>E=EMV contacto<br/>C=Contactless<br/>F=Fallback.",


        "“VISA”, “MASTERCARD”, “AMEX”, “DISCOVER”.",

        "Bin de la tarjeta",
        "SHA-1, este campo no es utilizado por la caja, se debe rellenar con 40 blancos de manera fija", 

        "(cifrado DUKPT)",
        "No usado",
        "En Claro, de acuerdo con definición de autorizador Evertec",

        "En Claro",
        "En Claro",
        "(cifrado DUKPT)",

        "Monto seleccionado en el Pinpad o se devuelve el mismo valor enviado desde la caja.",

        "Monto seleccionado en el Pinpad o se devuelve el mismo valor enviado desde la caja.",

        "Numero de cuotas seleccionadas en el Pinpad.",

        "Datos EMV en formato TLV",
        "Código de país de Tarjetahabiente. EMV Tag 5F28 <br/>Ejemplo: Chile = “0152”<br/>Solo para tarjetas EMV<br/>",
        "Código de país del Terminal. EMV Tag 9F1A<br/>Ejemplo: Chile = “0152”<br/>Solo para tarjetas EMV",
        "Número de secuencia. EMV Tag 5F34<br/>Solo para tarjetas EMV",
        "CVM entregado por la tarjeta. EMV Tag 9F34<br/>0 = no pin<br/>1 = firma<br/>2 = pin online<br/>3 = pin offline (este valor no aplica para CTLS)<br/>Solo para tarjetas EMV<br/>Para el caso de Wallet, se indica a la caja el Valor 3, indicando que ya fue validado el pin, por lo tanto, la caja no indica pedir pin nuevamente.",
        "Ejemplo: “206”",
        "XXX-XXX-XXX",
        "P200",
        "Versión de la aplicación"

    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Solicitud Sale Onus*/ 
/* ************************************************************************************************** */ 
function desgReqSaleOnus(dataInputSp){
    let nombre = [
        "Comando",
        "Estado",
        "Monto",
        "Tipo de tarjeta",
        "Lista de montos vuelto",
        "Monto Vuelto",
        "Working key PIN",
        "Working key TRACK",
        "Flag mostrar glosas",
        "Glosas",
        "Solicitud de PIN",
        "Código de moneda",
        "Campos Necesarios<br/>Para comando 610",
        "Adquirente" 

    ];

    let descripcion = [
        "comando Venta Onus, CAJA -> PINPAD",
        "“00” Con lectura de tarjeta.<br/>“01” Sin lectura de tarjeta (excepto cambio de monto para CTLS).<br/>NOTA: En el caso que el cliente tenga alguna promoción y el monto original cambió, este valor va en “00” pata ctls, ya que debe volver a leer la tarjeta pasándole el nuevo monto. Para banda y EMV Chip ese valor va en 01.",
        "Incluir dos decimales. Ej: $1.000.- se debe enviar “100000”",
        "“CR” Crédito<br/>“DB” Debito",
        "Separador “;” incluyendo el último. Lista de montos de vuelto con decimales.<br/>EJ: “200000;500000;1000000;2000000;”",
        "Si ya fue seleccionado desde la caja con valor mayor o igual a cero, no debe mostrar opción de seleccionar vuelto en el Pinpad.<br/>Solo para debito:<br/>0 = sin vuelto.<br/>> 0 = con vuelto ingresado en caja.<br/>Vacío = Solicitar vuelto en el Pinpad. ",
        "Llave 3DES  para pin",
        "Llave 3DES  para track",
        "“Y” Encendido se utiliza si desea confirmar monto/cuotas.<br/>“N” Apagado para solo lectura de tarjeta o solo ingresar pin.",
        "Enviar líneas con un separador, de esta manera tendremos solo un campo con múltiples líneas no limitadas a lo que permite un equipo en particular.<br/>|línea 1  ;  línea 2  ;  línea n;|<br/>",
        "“00” Siempre.<br/>“01” Permite CVM.<br/>“02” Nunca.",
        "“CL” Tipo moneda pesos chilenos. Utilizar por defecto.<br/>“US” Para montos tipo dólar",
        "Campo PAN:<br>0 = vacio<br/>1 = sha-1<br/>2 = sha-256<br/>Track2:<br/>0 = En Claro<br/>1 = Cifrado<br/>Ej: “10”, esto quiere decir que el PAN va en sha-1 y el track2 en claro<br/>",
        "Posibles valores para buscar llaves de cifrado:<br/>01: Wallmart<br/>02: Falabella<br/>03: Ripley<br/>04: Cencosud:<br/>05: Generico Getnet<br/>"
        
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Command venta Onus versión 2.8*/
/* ************************************************************************************************** */ 
function desgReqSaleOnus2_8(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = [
        "Comando",
        "Estado",
        "Monto",
        "Tipo de tarjeta",
        "Lista de montos vuelto",
        "Monto vuelto",
        "Flag mostrar glosas",
        "Glosas",
        "Solicitud de PIN",
        "Código de moneda",
        "Campos Necesarios Para comando 610",
        "Adquirente"        
        
       
    ];

    let descripcion = [
        "comando inicio de venta Onus, CAJA -> PINPAD",
        "<00> Con lectura de tarjeta. <01> Sin lectura de tarjeta (excepto cambio de monto para CTLS).NOTA: En el caso que el cliente tenga alguna promoción y el monto original cambió, este valor va en 00 para ctls, ya que debe volver a leer la tarjeta pasándole el nuevo monto. Para Banda y EMV Chip ese valor va en 01.",
        "Incluir dos decimales. Ej: $1.000.- se debe enviar “100000”",
        "“CR” Crédito “DB” Debito “NN” Tarjetas internacionales.“” o vacío para transacciones iniciales donde se desconoce el tipo de tarjeta.",
        "Separador “;” incluyendo el ultimo. Lista de montos de vuelto con decimales.Ej: “200000;500000;1000000;2000000;”",
        "Si ya fue seleccionado desde la caja con valor mayor o igual a cero, no debe mostrar opción de seleccionar vuelto en el Pinpad.Solo para debito:0 = sin vuelto.>0 = con vuelto ingresado en caja.Vacío = solicitar vuelto en el Pinpad.",
        "“Y” Encendido se utiliza si desea confirmar monto/cuotas.“N” Apagado para solo lectura de tarjeta o solo ingresar pin.",
        "Enviar líneas con un separador, de esta manera tendremos solo un campo con múltiples líneas no limitadas a lo que permite un equipo en particular.|línea 1  ;  línea 2  ;  línea n;|",
        "“00” Siempre.“01” Permite CVM.“02” Nunca.",
        "“CL” Tipo moneda pesos chilenos. Utilizar por defecto.“US” Para montos tipo dólar.",
        "Campo PAN:<br/>0 = vacio<br/>1 = sha-1<br/>2 = sha-256<br/>Track2:<br/>0 = En Claro<br/>1 = Cifrado<br/>Ej: “10”, esto quiere decir que el PAN va en sha-1 y el track2 en claro",
        "Posibles valores para buscar llaves de cifrado:<br/>01: Wallmart<br/>02: Falabella<br/>03: Ripley<br/>04: Cencosud<br/>05: Generico Getnet"     
        
        
        
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}

/* ************************************************************************************************** */
/* Response  command 0610*/ 
/* ************************************************************************************************** */ 
function desgRespSaleOnus(dataInputSp){
   
    let nombre = [
        "Comando",
        "Código de respuesta",
        "4 últimos dígitos",        
        "Nombre Tarjeta Habiente",
        "Tipo captura",
        "Marca de la tarjeta",
        "Bin",
        "PAN",
        "Track2",
        "Pinblock (cifrado)",
        "Monto vuelto",
        "Criptograma",
        "Serie del terminal",
        "Modelo terminal",
        "Versión de la app"

    ];


    let descripcion = [
        "Respuesta vta Onus, CAJA <- PINPAD",
        "“00” comando procesado correctamente en el Pinpad.<br/>“99” comando terminó con error/cancelado/timeout.",
        "Siempre se entregarán los 4 últimos dígitos de la tarjeta.",
        "Obtenido del track1 o para EMV del Tag 50",
        "Los Posibles valores son:<br/>B=banda<br/>E=EMV contacto<br/>C=Contactless<br/>F=Fallback",
        "“VISA”, “MASTERCARD”, “AMEX”, “DISCOVER”.",
        "Bin de la tarjeta",
        "0 = vacio<br/>1 = sha-1<br/>2 = sha-256",
        "0 = En Claro<br/>1 = Cifrado(Working key track)<br/>NOTA: Al dejar el Track2 en claro, no se estaría cumpliendo normativa PCI.",
        "Cifrado con la working key de pin",
        "Monto seleccionado en el Pinpad o se devuelve el mismo valor enviado desde la caja.",
        "Datos EMV en formato TLV",
        "Verifone XXX-XXX-XXX<br/>PAX o Ingénico XXXXXXXXXXXX",
        "P200<br/>DX6000<br/>A80<br/>A33<br/>",
        "Versión de la aplicación"
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);

}
function desgRespSaleOnus2_8(dataInputSp){
   
    let nombre = [
        "Comando",
        "Código de respuesta",
        "4 últimos dígitos",        
        "Nombre Tarjeta Habiente",
        "Tipo captura",
        "Marca de la tarjeta",
        "PAN",
        "tack2",
        "Bin",
        "PAN (cifrado)",
        "PINBLOCK (cifrado)",
        "KSN PIN",
        "KSN PAN",
        "Monto vuelto",
        "Criptograma",
        "Serie del terminal",
        "Modelo terminal",
        "Versión de la app"

    ];


    let descripcion = [
        "Respuesta vta Onus, CAJA <- PINPAD",
        "“00” comando procesado correctamente en el Pinpad.<br/>“99” comando terminó con error/cancelado/timeout.",
        "Siempre se entregarán los 4 últimos dígitos de la tarjeta.",
        "Obtenido del track1 o para EMV del Tag 50",
        "Los Posibles valores son:<br/>B=banda<br/>E=EMV contacto<br/>C=Contactless<br/>F=Fallback",
        "“VISA”, “MASTERCARD”, “AMEX”, “DISCOVER”.",
        "0 = vacio<br/>1 = sha-1<br/>2 = sha-256",
        "0 = En Claro<br/>1 = Cifrado(Working key track)<br/>NOTA: Al dejar el Track2 en claro, no se estaría cumpliendo normativa PCI.",
        "Bin de la tarjeta",
        "AES256 Dukpt (64)",
        "AES256 Dukpt (16)",
        "En claro 4 + KSN",
        "En claro",
        "Monto seleccionado en el Pinpad o se devuelve el mismo valor enviado desde la caja.",
        "Datos EMV en formato TLV",
        "Verifone XXX-XXX-XXX<br/>PAX o Ingénico XXXXXXXXXXXX",
        "P200<br/>DX6000<br/>A80<br/>A33<br/>",
        "Versión de la aplicación"
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);

}
/* ************************************************************************************************** */
/* Command Read Reverse*/
/* ************************************************************************************************** */ 
function desgReqReverse(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Indicador de contexto"
    ];

    let descripcion = ["comando Requerimiento de Reversa, CAJA -> PINPAD",
        "Id de la transacción que se quiere reversar"
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response Read Reverse*/ 
/* ************************************************************************************************** */ 
function desgRespReverse(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",        
        "Largo del mensaje",
        "Mensaje SPDH reversa"
    ];


    let descripcion = ["Comando requerimiento de reversa, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor Numérico",
        "Valor alfanumérico (máximo)",
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Command Req validate upgrade*/
/* ************************************************************************************************** */ 
function desgReqValUpgrade(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Indicador de contexto",
        "Largo del mensaje",
        "Mensaje SPDH (reversa si es 0500)",
        "(540) Nombre Comercio",
        "(540) Dirección Comercio",
        "(540) Comuna Comercio",
        "(540) Sin Nombre",
        ""
    ];

    let descripcion = ["comando Requerimiento de validación/actualización, CAJA -> PINPAD",
        "Valor alfanumérico Id entregado por el pinpad por cada transacción",
        "Valor Numérico",
        "(540) Valor alfanumérico (máximo)",
        "(540) Valor Alfanumérico Campo paramétrico en caja enviado al pinpad",
        "(540) Valor Alfanumérico Campo paramétrico en caja enviado al pinpad",
        "(540) Valor Alfanumérico",
        "(540) Campo paramétrico en caja enviado al pinpad Puede ser comuna o ciudad",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response validate upgrade Reverse*/ 
/* ************************************************************************************************** */ 
function desgRespValUpgrade(dataInputSp){
    let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Indicador de contexto",
        "Código de comercio",        
        "Terminal ID",
        "Número Ticket Boleta",
        "Empleado",
        "Código Autorización",
        "Monto",
        "Monto vuelto",
        "Numero de Cuotas",
        "Monto Cuota",
        "Últimos 4 Dígitos Tarjeta",
        "Número Operación",
        "Glosa Tipo de Tarjeta",
        "Fecha Contable",
        "Número de Cuenta",
        "Abreviación de la tarjeta",
        "Fecha Transacción",
        "Hora Transacción",
        "Campo Impresión",
        "Transacción premiada",
        "Tipo promoción",
        "Código promoción",
        "Nombre promoción",
        "Glosa vale premio",
        "Texto vale premio",
        "Flag permite cuotas",
        "Flag de gracia",
        "Flag C2C",

        "Flag C3C",
        "Flag NCuotas",
        "Flag máximo de cuotas",
        "Tipo de menú",
        "Indicador transacción con gracia",
        "Tipo cuotas",
        "Tasa aplicada",
        "Glosa tipo cuota",
        "Glosa tipo cuota 2",
        "Glosa promoción",
        "Id promoción",

        "Flag imprimir tasa",
        "Periodo diferido",

        "Diferido 1 periodo",
        "Diferido 1 valor tasa",
        "Diferido 1 valor cuota",
        "Diferido 2 periodo",
        "Diferido 2 valor tasa",
        "Diferido 2 valor cuota",
        "Diferido 3 periodo",
        "Diferido 3 valor tasa",
        "Diferido 3 valor cuota",

        "Número de secuencia transacción original",
        "Código respuesta Transbank",
        "Glosa respuesta Transbank",
        "Flag transacción con PIN",
        "Nombre tarjetahabiente",
        "Flag tipo voucher",
        "Flag modalidad cuotas",
        "Glosa transacción afecta a ahorro",
        "Número de secuencia",
        "Flag mensaje terminal",
        "Largo mensaje",
        "Mensaje SPDH Venta Reversa",
        "(550) Propina",
        "(550) Voucher de Rechazo",
        "(550) Voucher PEL",
        "(550) LABEL - EMV",
        "(550) RID - EMV",
        "(550) Modelo pinpad",
        "(550) Versión de pinpad",
        "(550) Saldo Prepago",
        ""
    ];


    let descripcion = ["Comando respuesta validación/actualización, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico Id entregado por el pinpad por cada transacción",
        "Valor numérico Código del comercio entregado por TBK y configurado en la caja, se imprime en voucher",
        "Valor Alfanumérico Dirección lógica entregada por TBK y configurada en la caja, se imprime en voucher",
        "Valor alfanumérico Campo opcional, si viene se imprime en voucher si no viene se omite el campo",
        "Valor alfanumérico Campo opcional, si viene se imprime en voucher si no viene se omite el campo",
        "Valor Alfanumérico (máximo) Código de autorización de la transacción enviado por TBK ejemplo: |AB 12 C3|Se imprime lo que viene en el voucher",
        "Valor numérico (máximo) Monto total autorizado (incluye el monto de la venta, propina, vuelto y donación según sea el caso) Se imprime en voucher",
        "Valor numérico (máximo) Vuelto seleccionado por cliente, solo aplica en debitoSe imprime en voucher",
        "Valor numérico Cantidad de cuotas de la transacción (para ventas sin cuotas se informa “00”) Se imprime en voucher",
        "Valor numérico Si el monto informado es vacío || o |0| caja debe omitir la línea completa en el voucher. Se imprime en voucher si viene el campo",
        "Valor Numérico No se imprime",
        "Correlativo de transacción del terminal También conocido como número de secuencia este campo se debe imprimir en voucher de venta y anulación.",
        "Valor alfanumérico (máximo) Valor de glosa en Tabla tipo de tarjeta",
        "Valor alfanumérico Se utiliza sólo si es transacción de Debito Caja no debe formatear (ej: DDAAMM), simplemente debe transferir elvalor al voucher (XX/XX/XX)",
        "Valor alfanumérico Número de tarjeta enmascarado para incluir en el voucher",
        "Valor alfanumérico Valor a imprimir en el voucher",
        "Formato AAMMDD Valor a imprimir en el voucher",
        "Formato HHMMSS Valor a imprimir en el voucher",
        "Campo depende si la caja requiere voucher formateado (máximo) En el comando 510 no se envía el voucherEn el comando 550 se envía voucher siempre",
        "Valor numérico |1|: transacción premiada En este caso caja debe imprimir voucher PEL además del de venta ||: transacción sin premio",
        "Valor numérico |1|: Entrega Pto. de Venta |2|: Entrega Diferida |3|: Devolución al Tarjeta Habiente",
        "Valor alfanumérico Valor a imprimir en el voucher premiado",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor alfanumérico Valor a imprimir en el voucher de premio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor numérico Campo informativo de configuración comercio",
        "Valor alfanumérico Indicador del tipo de menú por el cual se realizó la transacción |CR| : CRÉDITO |DB| : DÉBITO PREPAGO |NB| : NO BANCARIA Valor de tipo en Tabla tipo de tarjeta Una venta hecha como debito puede ser autorizada como prepago Nota: En el caso de Operación bajo flujo sin selección de menú, el pinpad retornara en este comando el tipo de tarjeta detectada.",
        "Valor numérico Indicador de modalidad de la transacción |0| transacción sin mes gracia |1| transacción con mes gracia",
        "Valor numérico |0| Sin cuotas |1| Cuotas normales |3| C3C o C2C |4| CIC o N-cuotas",
        "Valor numérico Solo se imprime en voucher si “Flag imprimir tasa = 1”",
        "Valor alfanumérico Glosa a imprimir en voucher Si el campo informado viene vacío “||” caja debe omitir la línea en el voucher.",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor alfanumérico Glosa que se despliega en pinpad",
        "Valor numérico || o |0| no imprime tasa aplicada |1| imprime tasa aplicada",
        "Valor numérico Periodo diferido seleccionado, valor a imprimir en voucher",

        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor numérico No utilizado",
        "Valor alfanumérico (máximo) También conocido como número de operación original de la venta, No se está usando este campo, no se imprime",
        "Valor numérico Código de respuesta una vez finalizada latransacción. Se debe desplegar en el punto de venta. EJ: RESPUESTA TRANSBANK - <XXX> : <GLOSA></GLOSA>",
        "Valor alfanumérico (máximo) Glosa que despliega el pinpad una vez finalizada la transacción. Se debe desplegar en el punto de venta. EJ: RESPUESTA TRANSBANK - <XXX> : <GLOSA></GLOSA>",

        "Valor alfanumérico Y: Transacción autentificada con PIN N: Transacción autentificada por firma",
        "Valor alfanumérico Sólo imprimir si “Flag tipo voucher = 1, 2 ó 3”",
        "Valor numérico Según el número recibido se debe imprimir voucher con o sin firma:|0| = Sin firma |1| o |2| o |3| = con firma Cabeceras de los voucher: Para ventas con crédito:“VENTA CREDITO” Para ventas con débito (siempre sin firma): “VENTA DEBITO” Para ventas con no bancaria: “VENTA NO BANCARIA” Para ventas con prepago (sin firma): “VENTA PREPAGO” Para anulaciones con crédito (sin firma): “ANULACION CREDITO” Para anulaciones con no bancaria (sin firma):“ANULACION NO BANCARIA”",
        "Valor alfanumérico 0: Modalidad 3.1 (No utilizado)1: Modalidad cuotas 4.0",
        "Valor alfanumérico (máximo) Se debe imprimir en el voucher cuando sea distinta de vacío Campo 9, subcampo D",
        "Valor numérico No se está usando este campo, este no se imprime También conocido como número de operación",
        "Valor alfanumérico Y: El mensaje es terminal y NO se debe enviar el mensaje SPDH de respuesta N: Se debe enviar el mensaje SPDH de respuesta",
        "Valor numérico",
        "Valor alfanumérico (máximo)",

        "(550) Valor numérico Monto Propina o Donación",
        "(550) Valor numérico Cuando transacción es declinada por EMV se debe imprimir un voucher especial. Si este campo viene vacío no se imprime, si viene con dato se imprime Este voucher se imprime solo, sin voucher de venta",
        "(550) Valor alfanumérico Voucher de PEL si viene la caja debe imprimirlo, solo una vez junto al voucher de venta No se debe imprimir en duplicado Este voucher se imprime junto al de venta",
        "(550) Valor alfanumérico Si el campo viene con datos caja debe incluirlo en el voucher en la posición indicada",
        "(550) Valor alfanumérico Si el campo viene con datos caja debe incluirlo en el voucher en la posición indicada",
        "(550) Valor numérico Caja debe incluirlo en el voucher ejemplo: VX805 Campo obligatorio",
        "(550) Valor numérico Caja debe incluirlo en el voucher ejemplo: 12.34A Campo obligatorio",
        "(550) Valor alfanumérico (máximo) Indica el saldo de una tarjeta de prepago la cual se debe imprimir en voucher cuando es venta de prepago y cuando viene el saldo.Nota: El Pinpad agrega esa glosa al voucher tal como viene en la mensajería.",
        ""
       
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}

/* ************************************************************************************************** */
/* Command actualización parámetros pinpad (cierre batch)*/
/* Solicitud comando actualización parámetros pinpad */ 
//0610
/* ************************************************************************************************** */ 
function desgReqActParamCierre(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Código de comercio",
        "Terminal ID",
        "Índice interno del comercio",
        ""
    ];

    let descripcion = ["comando actualización parámetros pinpad (cierre batch), CAJA -> PINPAD",
        "Valor Alfanumérico Dirección lógica entregada por TBK y configurada en la caja.",
        "Valor alfanumérico (máximo) Campo que puede ser utilizado por el comercio para agregar información que les sirva a sus procesos internos.",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response actualización parámetros pinpad (cierre batch)*/ 
/* Solicitud comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgRespActParamCierre(dataInputSp){
    
    let nombre = ["Comando",
        "Código de respuesta Pinpad",
        "Índice interno del comercio",        
        "Largo del mensaje",
        "Mensaje SPDH reversa"
    ];


    let descripcion = ["comando actualización parámetros pinpad (cierre batch), CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico (máximo) Campo que puede ser utilizado por el comercio para agregar información que le sirva a sus procesos internos.",
        "Valor Numérico",
        "Valor alfanumérico (máximo)",
        ""
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Command actualización parámetros pinpad (cierre batch)*/
/* Validación comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgReqValActParamCierre(dataInputSp){
    //let tableBody = document.getElementById("tbody");
    let nombre = ["Comando",
        "Largo del mensaje",
        "Mensaje SPDH Cierre Batch",
        ""
    ];

    let descripcion = ["Comando Validación actualización parámetros pinpad (cierre batch), CAJA -> PINPAD",
        "Valor Numérico.",
        "Valor alfanumérico (máximo).",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Response actualización parámetros pinpad (cierre batch)*/ 
/* Solicitud comando actualización parámetros pinpad */ 
/* ************************************************************************************************** */ 
function desgRespValActParamCierre(dataInputSp){
    
    let nombre = ["Comando",
        "Código respuesta",
        "Código respuesta Transbank",        
        "Glosa respuesta Transbank",
        "Cantidad transacciones venta",
        "Monto transacciones venta",
        "Cantidad transacciones anulación",
        "Monto transacciones anulación",
        ""
    ];


    let descripcion = ["Comando Validación actualización parámetros pinpad (cierre batch), CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor numérico Código de respuesta de TBK. Se debe desplegar en el punto de venta.",
        "Valor alfanumérico (máximo) Glosa que despliega el pinpad una vez finalizada la transacción. Se debe desplegar en el punto de venta.",
        "Valor numérico",
        "Valor numérico",
        "Valor numérico",
        "Valor numérico",
        ""
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* ************************************************************************************************** */
/* Solicitud Sale or void 0800*/ 
/* ************************************************************************************************** */ 
function desgReqSaleVoid0800(dataInputSp){
    let nombre = ["Comando",
        "Indicador de contexto comando",
        "Local comercio OnUs",
        "Working key track",
        "Working key PIN",
        "Monto",
        "Lista montos de vuelto",
        "Monto vuelto",
        "Flag solicita confirma monto",
        "Glosa 1 confirma monto",
        "Glosa 2 confirma monto",
        "Glosa 3 confirma monto",
        "Glosa 4 confirma monto",
        "Indicador solicitud de autentificación",
        ""
    ];

    let descripcion = ["comando Requerimiento Venta/Anulación, CAJA -> PINPAD",
        "Valor alfanumérico (opcional) Formato aaaammddhhmmssmm Es solo un ID, la fecha y hora en el pinpad puede estar desactualizada Si este comando proviene de otro y es parte de la misa transacción se debe mantener el ID",
        "Valor numérico (obligatorio) (00 -> 99)Cada local onus tiene su ID definido",
        "Valor alfanumérico (opcional) Contiene la llave 3DES utilizada para encriptar el TRACK (ø: no encripta)",
        "Valor alfanumérico (opcional) Contiene la llave 3DES utilizada para encriptar el TRACK (ø: no encripta)",
        "Valor numérico (obligatorio) (incluye dos decimales) Largo variable",
        "Valor alfanumérico (opcional) Campo no utilizado por el momento enviar vacío Largo variable",
        "Valor numérico (opcional) |0| Transacción sin vuelto Campo no utilizado por el momento enviar cero Largo variable",
        "Valor alfanumérico (obligatorio) |Y| Solicitar confirmar monto |N| No solicitar confirmar monto",
        "Valor alfanumérico (opcional) Sólo si “Solicita confirma monto = Y” Largo variable",
        "Valor alfanumérico (opcional) Sólo si “Solicita confirma monto = Y” Largo variable",
        "Valor alfanumérico (opcional) Sólo si “Solicita confirma monto = Y” Largo variable",
        "Valor alfanumérico (opcional) Sólo si “Solicita confirma monto = Y” Largo variable",
        "Valor numérico (obligatorio) |00| Pide PIN a todo evento |01| No pide PIN a menos que la tarjeta EMV lo indique |02| Pide PIN según código de servicio |03| Pide PIN según código de servicio, pero acepta pin nulo |04| No pide PIN nunca",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}

/* ************************************************************************************************** */
/* Response aComando requerimiento venta/anulación*/ 

/* ************************************************************************************************** */ 
function desgRespSaleVoid0810(dataInputSp){
    
    let nombre = ["Comando",
        "Código respuesta",
        "Indicador de contexto",
        "Tipo de captura",
        "TRACK I",        
        "TRACK II",
        "BIN",
        "4 últimos dígitos",
        "Nombre tarjetahabiente",
        "Nombre marca de la tarjeta",
        "Abreviación de la tarjeta",
        "Pinblock",
        "Criptograma",
        ""

    ];


    let descripcion = ["comando Requerimiento Venta/Anulación, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico Formato aaaammddhhmmssmm Es solo un ID, la fecha y hora en el pinpad puede estar desactualizada",
        "Valor Numérico |00| : B - Banda |01| : E . EMV c/contacto |02| : C - Contacless |03| : F - Fallback",
        "Valor alfanumérico Este campo es opcional, por lo tanto puede contener datos o estar vacío. Si existen datos y es necesario se rellena con blancos (0x20) a la derecha Con pan encriptado se entrega 160 caracteres alfanuméricos que corresponde a 80 HEXA - Si el pinpad no logra leer un track1, este campo irá vacío. - Si el pinpad lee datos erróneos en el track1, este campo irá vacío. - Si se excede el largo máximo, este campo irá vacío.",
        "Valor alfanumérico (máximo) El track2 es un valor requerido para cualquier venta, por lo tanto si no se logra leer o se lee errores, se entrega un error de lectura al comando. Si se obtiene correctamente el dato desde la tarjeta, se rellena con blancos (0x20) a la derecha si es necesario y se entrega. Con pan encriptado se entrega 80 caracteres alfanuméricos que corresponde a 40 HEXA",
        "Valor numérico Seis primeros dígitos de la tarjeta",
        "Valor numérico Cuatro últimos dígitos de la tarjeta",
        "Valor alfanumérico Este dato se obtiene desde el track1, por lo tanto si no existe el track1, no se entrega el nombre del tarjetahabiente Largo variable",
        "Valor alfanumérico De acuerdo a Tabla de marcas Largo variable",
        "Valor alfanumérico De acuerdo a Tabla de marcas",
        "Valor alfanumérico PIN ingresado por el cliente pero encriptado con las llaves proporcionadas por la caja",
        "Valor alfanumérico Formato TLV ISO Contiene TAG y criptograma requerido por el emisor para autorizar transacciones realizadas con tecnología y seguridad EMV Largo variable",
        ""
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}

/* ************************************************************************************************** */
/* Solicitud Sale or void 0900*/ 
/* ************************************************************************************************** */ 
function desgReqValAut0900(dataInputSp){
    let nombre = ["Comando",
        "Indicador de contexto comando",
        "Flag valida criptograma",
        "Glosa respuesta",
        "Valor alfanumérico (máximo) Sólo si “Flag valida criptograma = N” Ejemplo: Aprobado / Rechazado / Reintente",
        "Criptograma",
        ""
    ];

    let descripcion = ["Comando validación de respuesta autorizador, CAJA -> PINPAD",
        "Valor alfanumérico (opcional) Formato aaaammddhhmmssmm Es solo un ID, la fecha y hora en el pinpad puede estar desactualizada Si este comando proviene de otro y es parte de la misa transacción se debe mantener el ID",
        "Valor alfanumérico |Y| Validar criptograma |N| No validar criptograma Solo aplica para transacciones con chip con contacto",
        "Valor alfanumérico (máximo) Sólo si “Flag valida criptograma = N” Ejemplo: Aprobado / Rechazado / Reintente",
        "Formato TLV ISO Sólo si “Flag valida criptograma = Y” Este criptograma el pinpad entrega al chip de la tarjeta para validación. Podría resultar en una transacción declinada por la tarjeta para lo cual la caja debe solicitar reversa al autorizador ONUS",
        ""
    ];
    addRegSolicitud(nombre,descripcion,dataInputSp);

}

/* ************************************************************************************************** */
/* Response Comando validación de respuesta autorizador*/ 

/* ************************************************************************************************** */ 
function desgRespValAut0900(dataInputSp){
    
    let nombre = ["Comando",
        "Código respuesta",
        "Glosa respuesta",
        ""

    ];


    let descripcion = ["Comando validación de respuesta autorizador, CAJA <- PINPAD",
        "Valor numérico En caso de rechazo se debe desplegar en el punto de venta: RECHAZO PINPAD - <XX> : <GLOSA> De acuerdo a Tabla de códigos de respuesta decomandos",
        "Valor alfanumérico (máximo) De acuerdo a Tabla de códigos de respuesta de comandos. Sólo si “Flag valida criptograma = Y”",
        
    ];
    addRegRespuesta(nombre,descripcion,dataInputSp);
}
/* **************************************/

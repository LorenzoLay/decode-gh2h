/* *********************************************************************** */
/* *********************************************************************** */
/*          SPDH                                                           */
/* *********************************************************************** */
/* *********************************************************************** */
function descriptionSPH(nombre){
   
    const tableDescription = [
        ["A", "Carga remota HOST"],
        ["B", "Monto Total"],
        ["C", "Monto Vuelto"],
        ["D", "Tipo Cuenta"],
        ["E", "Número de cuenta"],
        ["F", "Código de autorización"],
        ["G", "Código MAC"],
        ["H", "Authentication Key"],
        ["I", "Data Encryption Key, cierre:Totales Transbank"],
        ["P", "Flag de captura"],
        ["Q", "Datos de contexto"],
        ["S", "Numero de Boleta, en ventas, Estadística de comunicaciones I, en cierre batch AO60"],
        ["T", "Numero de empleado, en ventas, Estadística de comunicaciones II, en cierre batch AO60"],
        ["W", "Cuotas"],
        ["a", "Datos Transbank"],
        ["b", "PIN block"],
        ["d", "Retail ID"],
        ["e", "Terminal Condition Code"],
        ["f", "venta:Largo del PIN, respuesta:Receipt Data"],
        ["g", "Glosa de Respuesta"],
        ["h", "Número de secuencia"],
        ["i", "Número De Secuencia Original"],
        ["q", "Track2"],
        ["r", "Tarjeta Supervisor"],
        ["t", "Datos del Terminal"],
        ["2", "Track1"],
        ["6", "Campo 6"],

        ["r", "Tarjeta Supervisor"],
        ["t", "Datos del Terminal"],
        ["2", "Track1"],
        ["6", "Campo 6"],
        ["9", "Campo 9"]      
    ];
    let descripcion = "";
    max = tableDescription.length;

    for (let i = 0; i < max; i++) {
        let fila = "";
        if (nombre == tableDescription[i][0]){
            descripcion = tableDescription[i][1];
            //alert(tableDescription[i][1])
            break;
        }
        
    }
    return descripcion;

   
}
function header(dataHeader){
    let index = dataHeader.indexOf(".");

    if (index == -1)
        return " ";
    let TPDU = "";
    if (index == 6){
        TPDU = "TPDU: " +  dataHeader.substring(0,5);
    }

   
    index = index - 1;
    let deviceType = "Device Type: " + dataHeader.substring(index,index + 2);
    index = index + 2;

    

    //alert("device type:" + deviceType);
    let transmisionNumber = "Trasmision number: " + dataHeader.substring(index, index + 2);
    index = index + 2;

    let terminalID = "Terminal id: " + dataHeader.substring(index, index + 16);
    index = index + 16;

    let employe= "Empleado: " + dataHeader.substring(index, index + 6);
    index = index + 6;

    let currentDate = "Fecha actual: " + dataHeader.substring(index, index + 6);
    index = index + 6;

    let currentTime = "Hora actual: " + dataHeader.substring(index, index + 6);
    index = index + 6;

    let messageType = "Message Type: " + dataHeader.substring(index, index + 1);
    index = index + 1;

    let messageSubType = "Message Subtype: " + dataHeader.substring(index, index + 1);
    index = index + 1;

    let transactionCode = "Transaction Code: " + dataHeader.substring(index, index + 2);
    index = index +2;

    let flags = "Flags: " + dataHeader.substring(index, index + 3);
    index = index + 3;

    let responseCode = "Response code: " + dataHeader.substring(index, index + 3);

    let header = TPDU + "<br>" +
                deviceType + "<br>" +
                transmisionNumber + "<br>" + 
                terminalID + "<br>" +
                employe + "<br>" +
                currentDate + "<br>" + 
                currentTime + "<br>" +
                messageType + "<br>" +
                messageSubType + "<br>" +
                transactionCode + "<br>" +
                flags + "<br>" +
                responseCode + "<br>";

    //alert(header);
    return (header);







}
/* SPDH*/ 
function desSPDH(dataInputHexSp){
    let tableBody = document.getElementById("tbody");
  

    for (var i = 0; i < dataInputHexSp.length; i++) {
        
        let tb_valor = convertFromHex(dataInputHexSp[i]);
        tb_valor = tb_valor.replaceAll("\x1e",";");
        tb_valor = tb_valor.replaceAll("\x1f",";");

        //alert(tb_valor);
        let descripcion = descriptionSPH(tb_valor.substring(0,1));
     
        let val0 = `<td class="table-td__0 ">${i} </td>`;
        let val1 = `<td class="table-td__1 ">${tb_valor.substring(0,1)} </td>`;
        let val2 = `<td class="table-td__2 ">${tb_valor.substring(1)}</td>`;
        let val3 = `<td class="table-td__3 ">${descripcion} </td>`;

        if (i==0){
            val0 = `<td class="table-td__0 c_spdh">${i} </td>`;
            val1 = `<td class="table-td__1 c_spdh">HEADER</td>`;
            val2 = `<td class="table-td__2 c_spdh">${tb_valor.substring(0)}</td>`;
            val3 = `<td class="table-td__3 c_spdh">${header(tb_valor.substring(0))}</td>`;
        }else if ((i%2) == 0 ){
         
            val0 = `<td class="table-td__0 celColor1">${i} </td>`;
            val1 = `<td class="table-td__1 celColor1">${tb_valor.substring(0,1)} </td>`;
            val2 = `<td class="table-td__2 celColor1">${tb_valor.substring(1)}</td>`;
            val3 = `<td class="table-td__3 celColor1">${descripcion} </td>`;
        }

        tableBody.innerHTML += `<tr>${val0 + val1 + val2 + val3}</tr>`; 
    }
}

console.log("index js vinculado");

window.onload = function(){
    document.getElementById("cmdDesCommand").addEventListener("click", ()=>desglosarComando());
    //document.getElementById("cmdDesSpdh").addEventListener("click", ()=>desglosarSpdh());
    document.getElementById("cmdClean").addEventListener("click", ()=>reload());
    
}
/* ************************************************************************************************** */
/* ************************************************************************************************** */ 
function desglosarComando(){
    
    const dataInput = document.getElementById("data").value;
     
    let dataInputAux = dataInput.replaceAll("\n", "");
    dataInputAux = dataInputAux.replaceAll("\x02", "");
    dataInputAux = dataInputAux.replaceAll("\x03", "");

    
    let dataInputSp = dataInputAux.split("|");
    //alert(dataInputSp[0]);

    if (dataInputSp[0] == "0300"){
        desgReadCard(dataInputSp);
        return true;
    }
    
    if (dataInputSp[0] == "0310"){
        desgRespReadCard(dataInputSp);
        return true;
    }
    if (dataInputSp[0] == "0600"){
        desgReqSaleOnus(dataInputSp);
        return true;
    }
    if (dataInputSp[0] == "0610"){
        desgRespSaleOnus(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0400"){
        desgReqReverse(dataInputSp);
        return true;
    }
    if (dataInputSp[0] == "0410"){
        desgRespReverse(dataInputSp);
        return true;
    }
    if ( (dataInputSp[0] == "0500") || (dataInputSp[0] == "0540") ){
        desgReqValUpgrade(dataInputSp);
        return true;
    }
    if ( (dataInputSp[0] == "0510") || (dataInputSp[0] == "0550")){
        desgRespValUpgrade(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0600"){
        desgReqActParamCierre(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0610"){
        desgRespActParamCierre(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0700"){
        desgReqValActParamCierre(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0710"){
        desgRespVActParamCierre(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0800"){
        desgReqSaleVoid0800(dataInputSp);
        return true;
    }
    if (dataInputSp[0] == "0810"){
        desgRespSaleVoid0810(dataInputSp);
        return true;
    }

    if (dataInputSp[0] == "0900"){
        desgReqValAut0900(dataInputSp);
        return true;
    }
    
    if (dataInputSp[0] == "0910"){
        desgRespValAut0900(dataInputSp);
        return true;
    }

    if (dataInputSp[0] != ""){
        alert("No es posible procesar el mensaje ingresado!!!!\nMensaje:\n" + dataInputSp[0]);
    }
    return true;
    
    
}
/* ************************************************************************************************** */ 
/* start SPDH*/
/* ************************************************************************************************** */ 
function desglosarSpdh(){
    const d1c = 28;
    const H1C = d1c.toString(16);

    const dataInput = document.getElementById("data").value;

    let index = dataInput.indexOf(".");
    if (index == -1){
        alert("No es posible procesar el mensaje ingresado!!!!\nMensaje:\n" + dataInput);
        return true;
    }

    let dataInputAux = dataInput.replace("\n", "");
    let dataInputHex = convertToHex(dataInputAux);
    let dataInputHexSp = dataInputHex.split(H1C);

    desSPDH(dataInputHexSp);

}
/* ************************************************************************************************** */ 
/* Reload*/
/* ************************************************************************************************** */ 
function reload(){
    location.reload();
}

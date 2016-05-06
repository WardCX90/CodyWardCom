function xmlToString(xmlData) { 

    var digitalGraphx;
    
    if (window.ActiveXObject){
        digitalGraphx = sample.xml;
    }else{
        digitalGraphx = (new XMLSerializer()).serializeToString(xmlData);
    }
    return digitalGraphx;
} 
import React from 'react'

function Icon({countIcon, typeIcon}) {
    var arrayIcon = [];
    for (var i = 0; i < countIcon; i++) {
        arrayIcon.push(<span className={typeIcon}></span>);
    }
    return arrayIcon;
 
}

export default Icon
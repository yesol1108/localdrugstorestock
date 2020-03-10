import React, { useState, useEffect } from 'react';
import useScript from './useScript';

export default function Map(props) {
    const [lng, setLng] = useState(props.lng);
    const [lat, setLat] = useState(props.lat);

    console.log("!!" + lat +","+ lng)

    if(props.lng !== lng || props.lat !== lat) {
        setLng(props.lng);
        setLat(props.lat);
    }
    
    useScript(
        {
            url: '//dapi.kakao.com/v2/maps/sdk.js?appkey=70302667d8e5c1ebddc9d4a821edfbe7&autoload=false',
            lat: lat,
            lng: lng,
        }
    );

    return (
        <div id="map" style={{width: '100%', height: '500px'}}></div>
    );
}

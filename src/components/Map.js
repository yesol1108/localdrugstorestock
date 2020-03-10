import React from 'react';
import useScript from './useScript';

export default function Map({lat = 0, lng = 0}) {
    useScript(
        {
            url: '//dapi.kakao.com/v2/maps/sdk.js?appkey=70302667d8e5c1ebddc9d4a821edfbe7&autoload=false',
            lat: lat,
            lng: lng,
        }
    );

    return (
        <div id="map" style={{width: '100%', height: '400px'}}></div>
    );
}
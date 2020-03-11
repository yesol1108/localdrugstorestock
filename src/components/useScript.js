/*global kakao*/
import {useEffect} from 'react';

const useScript = ({url, lat, lng}) => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
      script.type = 'text/javascript';

      document.head.appendChild(script);
  
      script.onload = () => {
          kakao.maps.load(() => {
              let el = document.getElementById('map');
              let markerPos = new kakao.maps.LatLng(lat, lng);
              // console.log(el);
              let map = new kakao.maps.Map(el, {
                center: new kakao.maps.LatLng(lat, lng),
                level: 3
              });
              let marker = new kakao.maps.Marker({
                position: markerPos
              });
              if(lat !== 33.450701 && lng !== 126.570667){
                if(lat > 0 || lng > 0) marker.setMap(map);
              }
              
              
          })
      }
    }, [url, lat, lng]);
  };
  
  export default useScript;
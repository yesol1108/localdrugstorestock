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
              console.log(el);
              new kakao.maps.Map(el, {
                center: new kakao.maps.LatLng(lat, lng),
                level: 3
              })
          })
      }
      return () => {
        document.body.removeChild(script);
      }
    }, [url, lat, lng]);
  };
  
  export default useScript;
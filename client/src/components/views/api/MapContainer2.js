const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('myMap');
  const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
  };
  const map = new kakao.maps.Map(container, options);

  // 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null); 

}
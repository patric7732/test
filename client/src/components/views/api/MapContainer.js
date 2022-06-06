// const { kakao } = window;

// export default function MapContainer() {
//     const container = document.getElementById('myMap');
//     const options = {
//         center: new kakao.maps.LatLng(33.450701, 126.570667),
//         level: 3
//     };
//     const map = new kakao.maps.Map(container, options);

// // 지도를 클릭한 위치에 표출할 마커입니다
// var marker = new kakao.maps.Marker({
//     // 지도 중심좌표에 마커를 생성합니다 
//     position: map.getCenter()
//   });
//   // 지도에 마커를 표시합니다
//   marker.setMap(map);


//   // 지도에 클릭 이벤트를 등록합니다
//   // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
//   kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

//     // 클릭한 위도, 경도 정보를 가져옵니다 
//     var latlng = mouseEvent.latLng;

//     // 마커 위치를 클릭한 위치로 옮깁니다
//     marker.setPosition(latlng);
//     var markerpath = marker.getPosition(latlng)
//     localStorage.setItem("marker", markerpath);

//     // console.log(markerpath);
//   });

// }
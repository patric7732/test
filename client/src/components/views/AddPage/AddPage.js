import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { company } from '../../../_actions/user.action';
import MapContainer from "../api/MapContainer";
// import { markerpath } from "../api/MapContainer";
// import * as markerpath from '../api/MapContainer';

function AddPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
    const [Username, setUsername] = useState("")
    const [Time, setTime] = useState("");
    const [Price, setPrice] = useState("")
    // const [Markerpath, setMarkerpath] = useState("")

    const onUsernameHandler = (event) => {
      setUsername(event.currentTarget.value)
  }

  const onTimeHandler = (event) => {
      setTime(event.currentTarget.value)
  }

  const onPriceHandler = (event) => {
      setPrice(event.currentTarget.value)
  }


  const onSubmitHandler = (event) => {
      event.preventDefault();

      let body = {
          username: Username,
          time: Time,
          price: Price,
          markerpath: localStorage.getItem("marker"),
      }
      
      dispatch(company(body))
          .then(response => {
              if (response.payload.success) {
                  navigate('/');
                  alert("등록 정보가 잘못되었습니다.")

              } else {
                  alert("등록 정보가 잘못되었습니다.")
              }
          })
  }
  
  const { kakao } = window;

  useEffect(() => {
    // MapContainer();
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다 
    position: map.getCenter()
  });
  // 지도에 마커를 표시합니다
  marker.setMap(map);


  // 지도에 클릭 이벤트를 등록합니다
  // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng;

    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    var markerpath = marker.getPosition(latlng)
    localStorage.setItem("marker", markerpath);
    console.log(latlng)
  });
  });

  return (
    <>

    <h2 style={{
      textAlign: "center",
      margin: "3%",
          }}>
      등록할 장소를 검색하거나 지도를 클릭해 등록해주세요.
    </h2>

    <div
      id="myMap"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        // position: "relative",
      }}
    >
    </div>

    <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>주차장 이름</label>
                <input type="username" value={Username} onChange={onUsernameHandler} />

                <label>주차시간</label>
                <input type="time" value={Time} onChange={onTimeHandler} />
                

                <label>1시간당 가격 </label>
                <input type="price" value={Price} onChange={onPriceHandler} />

                <br />
                <button type="submit">
                    주차 공간 등록
                </button>
            </form>
        </div>

    </>
  );
}

export default AddPage;
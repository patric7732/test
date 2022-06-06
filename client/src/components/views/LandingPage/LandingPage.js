import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import MapContainer2 from "../api/MapContainer2";
import { useSelector } from "react-redux";
import { company, getMarker } from "../../../_actions/user.action";
import { useDispatch } from 'react-redux';



function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [listOfMarker, setMarker] = useState([]);

  
  
  const { kakao } = window;
  
  
  useEffect(function () {
    
    
    var markerset
    dispatch(getMarker()).then(response => {

      // if (response.payload.markerSuccess === true) {
      //   markerset = response.payload.markers
      // }

// 마커를 배열화해서 등록 
      markerset = response.payload.markers

      //카카오맵
      const container = document.getElementById('myMap');
      const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
      };
      const map = new kakao.maps.Map(container, options);
  
      
      var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          position: markerPosition
      });

      marker.setMap();
  
      console.log(markerset);
    })
    
  //   var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
  //   mapOption = {
  //     center: new kakao.maps.LatLng(37.713419118500234, 126.89003458110093), // 지도의 중심좌표
  //     level: 11 // 지도의 확대 레벨
  //   };

  // var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      
  //     // var marker : any [] = [];
      
  //     // for (var i = 0; i < company.length; i++){
  //     //   var markerpath = company[i].markerpath;
  //     //   // markers.push(markerpath);
  //     //   this.markerpath1.push(markerpath);
  //     //   // var markerpathArr = JSON.parse("markerpathStr");
  //     //   // this.markerpath1=markers;
  //     //   var content = company[i];
  //     //   console.log(content);
        
  //     // }
  
      
  //     var string= this.markerpath1[0].replace("(" ,"").replace( ")","");
  //     // console.log(typeof(markers));
  //     // console.log( this.markerpath1[0].replace("(" ,"").replace( ")",""));
  //     const arr = string.split(',');
  //     // console.log(Number(arr[0]));

  //     for (var i = 0; i < this.markerpath1.length; i ++) {
  //       var string=this.markerpath1[i].replace("(" ,"").replace( ")","");
  //       const arr = string.split(',');
  //       console.log(arr);
        
  //         // 마커를 생성합니다
  //         var marker = new kakao.maps.Marker({
  //             map: map, // 마커를 표시할 지도
  //             position: new kakao.maps.LatLng(arr[0],arr[1])// 마커의 위치
  //         });
          
  //     }

    }
	);



  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <>
    <div
      id="myMap"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        // position: "relative",
      }}
    >

      <div
        id="contents"
        style={{
          zIndex: 2,
        }}> 

        <h2>시작 페이지 </h2>

        <button onClick={onClickHandler}>로그아웃</button>

        <Link to="/login">
          <button
            style={{
              margin: "5px",
            }}
          >
            로그인
          </button>
        </Link>

        <Link to="/register">
          <button>회원가입 {company.username} </button>
        </Link>

        <Link to="/add">
          <button>주차장 등록</button>
        </Link>
            
      </div>
    </div>

    <div>
      <h1>hi</h1>
      </div>
      

    </>
  );
}

export default LandingPage;
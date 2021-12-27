//jachigu
const mapDosim = document.querySelector(".district#dosim");
const mapDongnam = document.querySelector(".district#dongnam");
const mapSeonam = document.querySelector(".district#seonam");
const mapSeobook = document.querySelector(".district#seobook");
const mapDongbook = document.querySelector(".district#dongbook");
//detailgu
const detaildosim = document.querySelector(".a");
const detaildongnam = document.querySelector(".b");
const detailseonam = document.querySelector(".c");
const detailseobook = document.querySelector(".d");
const detaildongbook = document.querySelector(".e");


function toggleDosim() {
  detaildosim.style.display = (detaildosim.style.display === "none") ? "block" : "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleDongnam() {
  detaildongnam.style.display = (detaildongnam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleSeonam() {
  detailseonam.style.display = (detailseonam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleSeobook() {
  detailseobook.style.display = (detailseobook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleDongbook() {
  detaildongbook.style.display = (detaildongbook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
}

function toggleDosim() {
  detaildosim.style.display = (detaildosim.style.display === "none") ? "block" : "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleDongnam() {
  detaildongnam.style.display = (detaildongnam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleSeonam() {
  detailseonam.style.display = (detailseonam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseobook.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleSeobook() {
  detailseobook.style.display = (detailseobook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detaildongbook.style.display = "none";
}

function toggleDongbook() {
  detaildongbook.style.display = (detaildongbook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display = "none";
  detaildongnam.style.display = "none";
  detailseonam.style.display = "none";
  detailseobook.style.display = "none";
}

//click event

mapDosim.addEventListener("click", toggleDosim);
mapDongnam.addEventListener("click", toggleDongnam);
mapSeonam.addEventListener("click", toggleSeonam);
mapSeobook.addEventListener("click", toggleSeobook);
mapDongbook.addEventListener("click", toggleDongbook);

function showShop() {
  $('#list-box').empty() // 다른 지역을 누를때마다 기존 리스트 지우기
  let region = event.target.value // 현재 이벤트가 발생한 객체의 값을 가져오기
  $.ajax({
    type: "POST",
    url: "/data",
    data: {region: region},
    success: function (response) {
      let positions = []
      let center_lat;
      let center_lon;
      let test = JSON.parse(response)  // Json 문자열을 객체로 변환
      for (let i = 0; i < test.length; i++) {
        let name = test[i]['상호명'];
        let location = test[i]['도로명주소'];
        let latitude = test[i]['위도'];
        let longitude = test[i]['경도']
        let img = test[i]['이미지']
        let temp_html = `<div><a href="https://map.naver.com/v5/search/${name}" target="_blank">
                          <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
                          <p>상호명 : ${name}</p>
                          <p>도로명주소 : ${location}</p></a>
                          </div>`

        $('#list-box').append(temp_html)

        // for (let i = 0; i < test.length; i ++) {
        let contentvalue = {
            title: name,
            latlng: new kakao.maps.LatLng(latitude, longitude),
            content:
            '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            `            ${name}` + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            `                <img src="${img}" width="73" height="70">` +
            '           </div>' + 
            '            <div class="desc">' + 
            `                <div class="ellipsis">${location}</div>` + 
            `                <div class="link-box"><a href="https://map.naver.com/v5/search/${name}" class="link" target="_blank">자세히 보기</a></div>` +
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>'
            }
          positions.push(contentvalue)

        center_lat = test[i]['위도'];
        center_lon = test[i]['경도'];
      }

      let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(center_lat, center_lon), // 지도의 중심좌표
          level: 7 // 지도의 확대 레벨
        };

      // let selectOverlay; // 반복문 밖에 지정해줘야 작동을 함.
      //   function closeOverlay() {
      //       selectOverlay.setMap(null)
      //   };  

      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      for (var i = 0; i < positions.length; i++) {

        // 마커 이미지의 이미지 크기 입니다
        let imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          // title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
          clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });
        
        // 오버레이 정보표시
        var overlay = new kakao.maps.CustomOverlay({
          content: positions[i].content,
          map: map,
          position: marker.getPosition()       
        });
      }

     //마커 클릭시 클릭한마커에 커스텀오버레이 생성
      kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, overlay));
      
      // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
      function closeOverlay() {
        overlay.setMap(null);     
      }
    },
    error: function () {
      alert("POST 실패")
    },
  })
}

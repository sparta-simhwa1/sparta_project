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

function searchShop() {
    $('#search-box').empty()
    let search = $("#inputSearch").val();
    $.ajax({
        type: "POST",
        url: "/search",
        data: {search: search},
        success: function (response) {
            let test = JSON.parse(response)
            for (let i = 0; i < test.length; i++) {
                let name = test[i]['상호명'];
                let location = test[i]['도로명주소'];
                let latitude = test[i]['위도'];
                let longitude = test[i]['경도']
                let img = test[i]['이미지']
                let temp_html = `<div>
<a href="https://map.naver.com/v5/search/${name}" target="_blank">
  <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
  <p>상호명 : ${name}</p>
  <p>도로명주소 : ${location}</p>
</a>
</div>`
                $('#search-box').append(temp_html)
            }
        }
    })
}

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
                let temp_html = `<div>
<a href="https://map.naver.com/v5/search/${name}" target="_blank">
  <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
  <p>상호명 : ${name}</p>
  <p>도로명주소 : ${location}</p>
</a>
</div>`
                
                $('#list-box').append(temp_html)
                positions.push(
                  {
                      content: `<div class ="label"><span class="left"></span><span class="center">${name}</span><span class="right"></span></div>`,
                      title: name,
                      latlng: new kakao.maps.LatLng(latitude, longitude) //가져온 위 경도 값 넣어주기
                  },)
                center_lat = test[i]['위도'];
                center_lon = test[i]['경도'];
            }
            // for 문 종료
            let mapContainer = document.getElementById('map'), // 지도를 표시할 div
              mapOption = {
                  center: new kakao.maps.LatLng(center_lat, center_lon), // 지도의 중심좌표
                  level: 7 // 지도의 확대 레벨
              };
            
            let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
            for (var i = 0; i < positions.length; i++) {
                
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng // 마커의 위치
                });
                
                // 마커에 표시할 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: positions[i].content // 인포윈도우에 표시할 내용
                });
                
                // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                // 이벤트 리스너로는 클로저를 만들어 등록합니다
                // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
                
                // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
                function makeOverListener(map, marker, infowindow) {
                    return function () {
                        infowindow.open(map, marker);
                    };
                }
                
                function makeOutListener(infowindow) {
                    return function () {
                        infowindow.close();
                    };
                }
            }
            
            
        }
        ,
        error: function () {
            alert("POST 실패")
        }
        ,
    })
}

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
                let test = JSON.parse(response)  // Json 문자열을 객체로 변환
                for (let i = 0; i < test.length; i++) {
                    let name = test[i]['상호명'];
                    let location = test[i]['도로명주소'];
                    let temp_html = `<li>상호명 : ${name}</li>
<li>도로명주소 : ${location}</li>`
                    $('#list-box').append(temp_html)
                }
            },
            error: function () {
                alert("POST 실패")
            },
        }
    )
}

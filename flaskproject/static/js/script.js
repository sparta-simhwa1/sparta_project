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

//function
<<<<<<< HEAD
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

=======
function toggleDosim(){
  detaildosim.style.display = (detaildosim.style.display === "none") ? "block" : "none";
  detaildongnam.style.display="none";
  detailseonam.style.display="none";
  detailseobook.style.display="none";
  detaildongbook.style.display="none";}
function toggleDongnam() {
  detaildongnam.style.display = (detaildongnam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display="none";
  detailseonam.style.display="none";
  detailseobook.style.display="none";
  detaildongbook.style.display="none";}
function toggleSeonam() {
  detailseonam.style.display = (detailseonam.style.display === 'none') ? "block" : "none";
  detaildosim.style.display="none";
  detaildongnam.style.display="none";
  detailseobook.style.display="none";
  detaildongbook.style.display="none";}
function toggleSeobook() {
  detailseobook.style.display = (detailseobook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display="none";
  detaildongnam.style.display="none";
  detailseonam.style.display="none";
  detaildongbook.style.display="none";}
function toggleDongbook() {
  detaildongbook.style.display = (detaildongbook.style.display === 'none') ? "block" : "none";
  detaildosim.style.display="none";
  detaildongnam.style.display="none";
  detailseonam.style.display="none";
  detailseobook.style.display="none";}
>>>>>>> c149bfc96843a7469d194d79f5124fe226a31d96
//click event

mapDosim.addEventListener("click", toggleDosim);
mapDongnam.addEventListener("click", toggleDongnam);
mapSeonam.addEventListener("click", toggleSeonam);
mapSeobook.addEventListener("click", toggleSeobook);
mapDongbook.addEventListener("click", toggleDongbook);
// $(document).ready(function () {
//     showList();
// });

function showShop() {
    $('#list-box').empty()

    let region = event.target.value

    $.ajax({
            type: "POST",
            url: "/data",
            data: {region: region},
            success: function (response) {
                let test = JSON.parse(response)
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

//
// function showList() {
//     $.ajax({
//             type: "GET",
//             url: "/data",
//             data: {},
//             success: function (response) {
//                 console.log('test')
//                 console.log(response)
//             },
//             error: function () {
//                 alert('GET 실패')
//             },
//         }
//     )
// }
function searchShop() {
  $('#search-box').empty();
  let search = $('#inputSearch').val();
  $.ajax({
    type: 'POST',
    url: '/search',
    data: { search: search },
    success: function (response) {
      let test = JSON.parse(response);
      for (let i = 0; i < test.length; i++) {
        let name = test[i]['상호명'];
        let location = test[i]['도로명주소'];
        let latitude = test[i]['위도'];
        let longitude = test[i]['경도'];
        let img = test[i]['이미지'];
        let temp_html = `<div>
<a href="https://map.naver.com/v5/search/${name}" target="_blank">
  <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
  <p>상호명 : ${name}</p>
  <p>도로명주소 : ${location}</p>
</a>
</div>`;
        $('#search-box').append(temp_html);
      }
    },
  });
}

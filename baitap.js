var arr = [];
function Save() {
    var a = {
        name: document.getElementById('name').value,
        image: document.getElementById('image').files[0],
        price: document.getElementById('price').value,
    };
    console.log(a);
    arr.push(a);
}

function Show() {
  var html = '';
  for (let i = 0; i < arr.length; i++) {
      var html = '<div class="col-3">';
      html += '<div class="card" style="width: 18rem;margin-bottom: 20px;">';
      var img = new Image();
      if (arr[i].image) {
          img.src = window.URL.createObjectURL(arr[i].image)
          img.classList.add("card-img-top");
          img.style.height = "300px";
          html += '<div>';
          html += img.outerHTML;
          html += '</div>';
      }
      html += '<div class="card-body">';
      html += '<div class="card-title">'+arr[i].name + '</h5>';
      html += "<p class='card-text'>" + arr[i].price + " vnđ</p>";
      html += '<a href="#" class="btn btn-danger" onclick="order()">Đặt mua</a>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
  }
  document.getElementById('thoitrang').innerHTML += html;
}

function Reset() {
    document.getElementById('name').value = '';
    document.getElementById('image').files[0] = '';
    document.getElementById('price').value = '';
}

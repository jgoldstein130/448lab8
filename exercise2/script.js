let num = 1;

function left(){
  num -= 1;
  if(num == 0){
    num += 5;
  }
  update();
}

function right(){
  num += 1;
  if(num == 6){
    num -= 5;
  }
  update();
}

function update(){
  if(num == 1){
    document.getElementById("img").src="https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=";
  }
  else if (num == 2){
    document.getElementById("img").src="https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg";
  }
  else if (num == 3){
    document.getElementById("img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&usqp=CAU";
  }
  else if (num == 4){
    document.getElementById("img").src="https://s.cornershopapp.com/product-images/2547665.jpg?versionId=rISm.GmAY7udI6lJsFulIE_hPlr9SMJq";
  }
  else if (num == 5){
    document.getElementById("img").src="https://m.media-amazon.com/images/I/71+qAJehpkL._SL1500_.jpg";
  }
}

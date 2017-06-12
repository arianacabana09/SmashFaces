$(()=>{
  const i = 0;
  const j=0;
  const images= $('#coder');
  console.log("hola");

  $('select').on('change', (e)=>{
    e.preventDefault();
    const opt = $('#sede').val();

    if(opt =='lima'){
      $('.box-img').toggleClass('none');

      let imgSrcp = "assets/img/peru/" + peru[i].image;
      let imgName = peru[i].name;
      images.attr("src", imgSrcp);
    } else {
      $('.box-img').toggleClass('none');

      let imgSrcm = "assets/img/mexico/" + mexico[i].image;

      images.attr("src", imgSrcm);
    }

  });

})

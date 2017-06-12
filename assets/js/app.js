$(()=>{
  const i = 0;
  const images= $('#coder');
  console.log("hola");

  $('select').on('change', (e)=>{
    e.preventDefault();
    const opt = $('#sede').val();

    if(opt =='lima'){
      $('.box-img').toggleClass('none');
    }

    let imgSrc = "assets/img/peru/" + peru[i].image;
    let imgName = peru[i].name;
    images.attr("src", imgSrc)
  });

})

$(document).ready(function() {
// creating an array to push the keyword into.
  let keyWordArr = [];
  //////////////////////////
  function Images (pic) { //constructor
    this.title = pic.title;
    this.image_url = pic.image_url;
    this.keyword = pic.keyword;
    this.horns = pic.horns;
    this.description = pic.discription;
  }
  ///////////////////////////////////////////////
  $('#form').on('change', function(){
    var selectImage = this.value;
    for (let index = 0; index < keyWordArr.length; index++) {
      if (Images[index].keyword === selectImage) {
        keyWordArr.push(Images[index]);

      }

    }
    // renderKey();
  });
  // function renderKey(){
  //   $('#photo-template').empty();
  //   keyWordArr.forEach(pic)=>{
  //     let container = $('<div></div>');
  //     $('#photo-template').append(container);
  //     let imgName = $('<h2></h2>').text(pic.title);
  //     container.append(imgName);
  //     let img = $('<img></img>').attr('src', pic.image_url);
  //     container.append(img);
  //     let para = $('<p></p>').text(pic.description);
  //     container.append(para);
  //   }
  // }
  ///////////////////////////////////////////////
  Images.prototype.render = function() {
    let $picClone = $('#photo-template').clone();
    $picClone.find('h2').text(this.title);
    $picClone.find('img').attr('src',this.image_url);
    $picClone.find('p#p1').text(this.discription);
    $picClone.find('p#p2').text(`horns: ${this.horns}`);

    $picClone.removeAttr('id');
    $picClone.attr('id', this.title);
    $('main').append($picClone);
  };
  //////////////////////////////////////////////////
  const readJson = () => {
    $.ajax('Data/page-1.json', {method: 'GET', dataType: 'JSON'})
      .then(data => {
        data.forEach(pics =>{
          let pic = new Images(pics);
          pic.render();
        });
      });
  };
  readJson();
});



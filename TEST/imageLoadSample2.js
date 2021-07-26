$(function(){

    // ../Images/57270914.jpg
    $('body').on('click',function () {
        var imgPath = $("#sampleImage").attr('src');
        $('#sample-image').attr('src',imgPath);
      });


});
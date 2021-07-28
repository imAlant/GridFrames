$(function () {

    var imagePath;
    var width;
    var height;
    var size;
    const sliderVal= {};

    $('#img-upload').on('change', function (event) {

        for (var i = 0; i < this.files.length; i++) {

            var images = [];
            var path = URL.createObjectURL(event.target.files[i]);
            var imageUniqueId = path.split('/')[3];
            images.push(imageUniqueId);
            sliderVal[imageUniqueId] = {'sliderValue':0};
            console.log(sliderVal[imageUniqueId].sliderValue);

            $('<div class="flex-fill me-2 mb-3 inner-image-container">' +
                '<img id=' + imageUniqueId + ' src=' + path + ' alt="no image"  width="100%" height="100%">' +
                '<div class="settings">' +
                '<i class="fas fa-crop crop" data-bs-toggle="modal" data-bs-target="#imageModal"></i>' +
                '<i class="fas fa-trash delete"></i>' +
                '</div></div>').insertBefore('.input-control');
        }
    });

    // Add image to the modal

    $("body").on('click', '.crop', function () {
        imagePath = $(this).parent().siblings('img').attr('src');
        modalImgId = $(this).parent().siblings('img').attr('id');
        $('.modal-contents img').attr('src', imagePath);
        $('.modal-contents img').attr('class', modalImgId);
        $('.modal-contents img').width('100%');
        $('.modal-contents img').height('100%');

        $('#size-slider').val(sliderVal[modalImgId].sliderValue);

    });

    // Show modal

    $('#imageModal').on('show.bs.modal', function () {
        setTimeout(function () {
            width = $('.modal-contents img').width();
            height = $('.modal-contents img').height();
            // console.log(height,width);
        }, 500);

    });

    //  Drag and move the image inside the modal.

    $('.modal-contents').mousedown(function () {
        $('.modal-contents').mousemove(function (e) {
            // values: e.clientX, e.clientY, e.pageX, e.pageY
            // console.log('x: '+e.clientX, 'y: '+e.clientY)
            initX = e.clientX;
            initY = e.clientY;

        });
    });

    // Size controll slider

    $('#size-slider').on('input', function () {
        size = $('#size-slider').val();
        // console.log(modalImgId);
        // $('#size-slider').parent().siblings('.modal-contents').children('#' + modalImgId).height((parseInt(height) + parseInt(size * 2)) + 'px');
        // $('#size-slider').parent().siblings('.modal-contents').children('#' + modalImgId).width((parseInt(width) + parseInt(size * 2)) + 'px');
        $('.'+modalImgId).height((height+(size*2))+'px');
        $('.'+modalImgId).width((width+(size*2))+'px');
    });

    // save button

    $('#save-changes').on('click', function () {
        sliderVal[modalImgId] = {'sliderValue':$('#size-slider').val()};
    });

});
$(function () {

    var imagePath;
    var width;
    var height;


    $('#img-upload').on('change', function (event) {

        for (var i = 0; i < this.files.length; i++) {

            var images = [];
            var path = URL.createObjectURL(event.target.files[i]);
            images.push(path);
            $('<div class="flex-fill me-2 mb-3 inner-image-container">' +
                '<img src=' + path + ' alt="no image"  width="100%" height="100%">' +
                '<div class="settings" id = ' + path + '>' +
                '<i class="fas fa-crop crop" data-bs-toggle="modal" data-bs-target="#imageModal"></i>' +
                '<i class="fas fa-trash delete"></i>' +
                '</div></div>').insertBefore('.input-control');
        }
    });

    // Add image to the modal

    $("body").on('click', '.crop', function () {
        imagePath = $(this).parent().attr('id');
        modalImgId = imagePath.split('/')[3];
        $('.modal-contents img').attr('src', imagePath);
        $('.modal-contents img').attr('id',modalImgId);
        $('.modal-contents img').width('100%');
        $('.modal-contents img').height('100%');

    });

    // Show modal

    $('#imageModal').on('show.bs.modal', function () {
        setTimeout(function () {
        //     // $('#size-slider').val(90);
        //     var size = $('#size-slider').val();
        //     // alert(size);
        //     // console.log('width: ' + (parseInt(width) + parseInt(size)) + '  height: ' + (parseInt(height) + parseInt(size)));
        //     $('#size-slider').parent().siblings('.modal-contents').children('#'+modalImgId).height((parseInt(height) + parseInt(size * 2)) + 'px');
        //     $('#size-slider').parent().siblings('.modal-contents').children('#'+modalImgId).width((parseInt(width) + parseInt(size * 2)) + 'px');
            width = $('.modal-contents img').width();
            height = $('.modal-contents img').height();
        }, 500);

    });

    //  Drag and move the image inside the modal.

    $('.modal-contents').mousedown(function () {
        // console.log('mouse down')
        $('.modal-contents').mousemove(function (e) {
            // values: e.clientX, e.clientY, e.pageX, e.pageY
            // console.log('x: '+e.clientX, 'y: '+e.clientY)
            initX = e.clientX;
            initY = e.clientY;

        });
    });

    // Size controll slider

    $('#size-slider').on('input', function () {
        var size = $('#size-slider').val();
        // console.log('width: ' + (parseInt(width) + parseInt(size)) + '  height: ' + (parseInt(height) + parseInt(size)));
        $('#size-slider').parent().siblings('.modal-contents').children('#'+modalImgId).height((parseInt(height) + parseInt(size * 2)) + 'px');
        $('#size-slider').parent().siblings('.modal-contents').children('#'+modalImgId).width((parseInt(width) + parseInt(size * 2)) + 'px');
        // modalSliderValueDict[modalImgId]=size.toString();
        // console.log(modalSliderValueDict.modalImgId);
    });

});
$(function () {

    $('#img-upload').on('change', function (event) {

        for(var i =0 ;  i<this.files.length ; i++){

            var images = [];
            var path = URL.createObjectURL(event.target.files[i]);
            images.push(path);
            $('<div class="flex-fill me-2 mb-3 inner-image-container">'+
            '<img src='+path+' alt="no image">'+
            '<div class="settings" id = '+path+'>'+
                '<i class="fas fa-crop crop" data-bs-toggle="modal" data-bs-target="#imageModal"></i>'+
                '<i class="fas fa-trash delete"></i>'+
            '</div></div>').insertBefore('.input-control');
        }
    });

    // Add image to the modal

   $("body").on('click','.crop',function (event) {
       var imagePath = $(this).parent().attr('id');
       $('.modal-contents img').attr('src',imagePath);
     });

    //  Drag and move the image inside the modal.

    $('.modal-contents').mousedown(function () { 
        $('.modal-contents').mousemove(function (e) { 
            // values: e.clientX, e.clientY, e.pageX, e.pageY
            console.log('x: '+e.clientX, 'y: '+e.clientY)
        });
    });

});

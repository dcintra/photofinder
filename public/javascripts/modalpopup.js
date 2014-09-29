 $(document).ready(function(){
           $('li img').on('click',function(){
                var srclong = $(this).attr('src');
                var src = (srclong.substring(0, srclong.length - 6))+".jpg";
                var img = '<img src="' + src + '"/>';
                // var img = '<img src="' + src + '" class="img-responsive"/>';
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })
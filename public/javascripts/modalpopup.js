 $(document).ready(function(){
           $('li img').on('click',function(){
                
                // Get appropriate links for images, owner and photo
                var srclong = $(this).attr('src');
                var src = (srclong.substring(0, srclong.length - 6))+".jpg";
                var img = '<img src="' + src + '"/>';
                
                var owner = $(this).attr('data-owner');
                var id = $(this).attr('data-id');
                
                var owner_link = "https://www.flickr.com/people/"+owner+"/";
                var photo_link = "https://www.flickr.com/photos/"+owner+"/"+id;

                //activate modal 
                $('#myModal').modal();
                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                    console.log("photo link is: "+photo_link);
                    $('.photopagelink').attr('href',photo_link);
                    $('.ownerlink').attr('href',owner_link);
                });
                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });
           });  
        })
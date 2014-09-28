
document.getElementById('searchbutton').onclick = function()
{
    var query = document.getElementById('photoSearchQuery').value;
    alert(query)
};

document.getElementById('photoSearchQuery').onkeydown=function(){
    if(window.event.keyCode=='13'){
         var query = document.getElementById('photoSearchQuery').value;
         location.href="http://localhost:3000/photos?"+encodeURI(query);
    }
}
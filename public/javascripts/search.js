
// Perform Search when Search button clicked
document.getElementById('searchbutton').onclick = function()
{

    var query = document.getElementById('photoSearchQuery').value;
    console.log("search button clicked query: "+query); 

    var dateAfter = document.getElementById('datepicker-after').value;
    var unixDateAfter = Math.round(new Date(dateAfter).getTime()/1000);
    if(isNaN(unixDateAfter)){
    	unixDateAfter = '';
    }

    var dateBefore = document.getElementById('datepicker-before').value;
    var unixDateBefore = Math.round(new Date(dateBefore).getTime()/1000);

    if(isNaN(unixDateBefore)){
    	unixDateBefore = '';
    }

    var userName = document.getElementById('inputUsername').value;

    location.href="http://localhost:3000/photos/term="+encodeURI(query)+"min_date="+unixDateAfter+"max_date="+unixDateBefore+"usernm="+userName+"page=1";
};

// Perform Search when Search when hitting enter in search bar 
document.getElementById('photoSearchQuery').onkeydown=function(){
    if(window.event.keyCode=='13'){
         var query = document.getElementById('photoSearchQuery').value;
         
         var dateAfter = document.getElementById('datepicker-after').value;
		 var unixDateAfter = Math.round(new Date(dateAfter).getTime()/1000);
		    
		 var dateBefore = document.getElementById('datepicker-before').value;
		 var unixDateBefore = Math.round(new Date(dateBefore).getTime()/1000);

		 var userName = document.getElementById('inputUsername').value;

		 console.log("date after: "+dateAfter+" and before: "+dateBefore);
		 location.href="http://localhost:3000/photos/term="+encodeURI(query)+"min_date="+unixDateAfter+"max_date="+unixDateBefore+"usernm="+userName+"page=1";
    }
}


document.getElementById('inputUsername').onkeydown=function(){
    if(window.event.keyCode=='13'){
         var query = document.getElementById('photoSearchQuery').value;
         
         var dateAfter = document.getElementById('datepicker-after').value;
		 var unixDateAfter = Math.round(new Date(dateAfter).getTime()/1000);
		    
		 var dateBefore = document.getElementById('datepicker-before').value;
		 var unixDateBefore = Math.round(new Date(dateBefore).getTime()/1000);

		 var userName = document.getElementById('inputUsername').value;

		 console.log("date after: "+dateAfter+" and before: "+dateBefore);
		 location.href="http://localhost:3000/photos/term="+encodeURI(query)+"min_date="+unixDateAfter+"max_date="+unixDateBefore+"usernm="+userName+"page=1";
    }
}




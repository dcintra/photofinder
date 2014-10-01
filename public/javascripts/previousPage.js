	function previousPage(query, min_date, max_date, username, page) {
	    
	    var previouspage = page-1; 
		

	    if(query=='undefined'){
	    	query = ''
	    }

	    if(min_date=='undefined' || 'NaN'){
	    	min_date = ''
	    }

	    if(max_date=='undefined' || 'NaN'){
	    	max_date = ''
	    }

	    if(username=='undefined'){
	    	console.log("username: "+username);
	    	username = ''
	    }
	    

	    location.href="http://localhost:3000/photos/term="+encodeURI(query)+"min_date="+min_date+"max_date="+max_date+"usernm="+username+"page="+previouspage;
	}


function expand() {
	  var x = document.getElementById("topnav");
	  if (x.className === "nav navbar-nav") {
	    x.className += "responsive";
	  } else {
	    x.className = "nav navbar-nav";
	  }
}
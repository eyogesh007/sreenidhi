var navLinks=document.getElementById('navLinks')

function showMenu(){
    navLinks.style.right='0';
}

function hideMenu(){
    navLinks.style.right='-200px';
}

function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function detailssubmit() {
    alert("Your details were Submitted");
}

var preloader = document.getElementById("loading");

		function myFunction(){
            setTimeout(()=>{preloader.style.display = 'none';},2000)
			
		};

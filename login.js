const correctEmail = "jwd@gmail.com";
const correctPassword = "1234";

const massageContainer = document.getElementById("massage-container");

function cekLogin() {
	const userEmail = document.getElementById('fEmail').value;
	const userPassword = document.getElementById('fPassword').value;
	
	if((userEmail != correctEmail) || (userPassword !=correctPassword)){
		massageContainer.innerHTML = "<p class='error-massage'>Login Gagal, Email atau Password salah !</p>";
	}	else{
		massageContainer.innerHTML ="<p class='success-massage'>Login Berhasil . . .</p>";
		
	}
}
function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
	
function makeUser() {
	document.getElementById('userName').innerHTML = document.getElementById('name').value;
	document.getElementById('nameData').innerHTML = document.getElementById('name').value;
	document.getElementById('ttlData').innerHTML = document.getElementById('ttl').value;
	document.getElementById('msgData').innerHTML = document.getElementById('msg').value;
}

function date() {
	
}
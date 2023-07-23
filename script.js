function spacechang() {
	var possx = Math.floor(Math.random() * (600 - 100) + 100);
	var ValpxX = possx.toString() + 'px';
	var cssNo = document.getElementById('nao'); 

	var possY = Math.floor(Math.random() * (300 - 10) + 10);
	var valpxY = possY.toString() +'px' ; 
	cssNo.style.margin = valpxY;
	cssNo.style.marginLeft = ValpxX;

}
function yes() {
	var texto = document.getElementsByClassName('titulo');
	var buttS = document.getElementById('sim');
	var buttN = document.getElementById('nao');
	texto[0].innerHTML = null;
	texto[1].innerHTML = 'Eu sabia que você não diria não';
	buttN.remove();
	buttS.remove();
	var alegria = document.getElementById('imagem');
	alegria.src = "img/gatos-felizes.gif"
}
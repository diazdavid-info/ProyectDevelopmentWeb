<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Películas</title>
	<link rel="stylesheet" type="text/css" href="style/style.css" />
	<link rel="stylesheet" type="text/css" href="style/fullcalendar.css" />
	<link rel="stylesheet" type="text/css" href="style/fullcalendar.print.css"  media='print' />
	
	<script type="text/javascript" src="js/Utils/moment.min.js"></script>
	<script type="text/javascript" src="js/Utils/jquery.min.js"></script>
	<script type="text/javascript" src="js/Utils/fullcalendar.min.js"></script>
	<script type="text/javascript" src="js/Utils/lang-all.js"></script>
	
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	<script type="text/javascript" src="js/Utils/mapFilm.js"></script>
	
	<script type="text/javascript" src="js/Classes/Classes.js"></script>
	<script type="text/javascript" src="js/Utils/Utils.js"></script>
	<script type="text/javascript" src="js/Function/Style.js"></script>
	<script type="text/javascript" src="js/Function/FunctionFilms.js"></script>
</head>
<body>
	<div id="test"></div>
	<div id="popup"><img id="imagen-popup" src="http://cinemania.es/wp-content/uploads/2015/02/261182-248x370.jpg" alt="popup" /></div>
	<header>
		<nav>
			<img alt="futbol" src="img/pelicula.jpg" />
			<div id="botton-menu">
				<a href="#" >
					<span>Menú</span>
					<img alt="icono-menu" src="img/icono-menu-a.png">
				</a>
			</div>
			<div id="desple-menu">
				<div id="botton-close">
					<a href="#">
						<span>Cerrar</span>
						<img alt="botton-closer" src="img/icono-closer.png">
					</a>
				</div>
				<div class="limpieza"></div>
				<ul>
					<li><a href="index.php">Futbol</a></li>
					<li><a href="films.php">Películas</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<div id="wraper">
		<aside>
			<div id="controller">
				<div id="head-controller">
					
				</div>
			</div>
			<div id="filter">
				<div id="head-filter">
					<div class="button-aside select" data-type="filter">
						<h3 id="button-filters">FILTROS</h3>
					</div>
					<div class="button-aside" data-type="controller">
						<h3 id="button-controllers">CONTROLES</h3>
					</div>
				</div>
				<div id="body-controller">
					<div class="group">
						<h4>Zoom:</h4>
						<button id="button-zoom-more" class="button-zoom">Acercarse</button>
						<button id="button-zoom-less" class="button-zoom">Alejarse</button>
						<input id="control-zoom" type="range" min="0"  max="21" />
						<div id="buttons-controls">
							<button id="button-top" class="button-control top-bottom"><img alt="flecha" src="img/arrow-top.png" /></button>
							<button id="button-left" class="button-control left-right"><img alt="flecha" src="img/arrow-left.png" /></button>
							<button id="button-right" class="button-control left-right"><img alt="flecha" src="img/arrow-right.png" /></button>
							<button id="button-bottom" class="button-control top-bottom"><img alt="flecha" src="img/arrow-bottom.png" /></button>
						</div>
						
					</div>
				</div>
				<div id="body-filter">
					<div class="group">
						<h4>País:</h4>
						<select id="select-country">
							<option id="allTeam" value="0">Todos</option>
						</select>
					</div>
					<div class="group">
						<h4>Tiempo:</h4>
						<select id="select-time">
						</select>
					</div>
				</div>
			</div>
		</aside>
		<article>
			<section>
				<div id="map" style="width:100%;height:700px;"></div>
			</section>
		</article>	
		<div class="limpieza"></div>
		<footer>
			<div id="colum1" class="colum">
				<h2>Resumen</h2>
				<p id="cantidad">Cantidad de marcadores <span id="num-cantidad"></span></p>
				<p>Tipo de marcadores círculos</p>
			</div>
			<div id="colum2" class="colum">
				<h2>Redes sociales</h2>
				<p><a target="_blank" href="http://twitter.com/share?url=http://localhost/git/ProyectDevelopmentWeb/ProyectDevelopmentWeb/Client/index.php&amp;text=Web%20de%20Fútbol">Twitter</a></p>
				<p><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://localhost/git/ProyectDevelopmentWeb/ProyectDevelopmentWeb/Client/index.php">Facebook</a></p>
			</div>
			<div id="colum3" class="colum">
				<h2>Sobre mi</h2>
				<p>Autor: David Díaz García</p>
				<p>Centro: I.E.S. Clara del rey</p>
			</div>
			<div id="colum4" class="colum">
				<h2>Sobre mi</h2>
				<p>Autor: David Díaz García</p>
			</div>
			<div class="limpieza"></div>
		</footer>
	</div>
</body>
</html>
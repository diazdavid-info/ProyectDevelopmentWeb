<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style/style.css" />
	
	<script type="text/javascript" src="js/Classes/Classes.js"></script>
	<script type="text/javascript" src="js/Utils/Utils.js"></script>
	<script type="text/javascript" src="js/Function/Function.js"></script>
</head>
<body>
	<div id="test"></div>
	<header>
		<nav>
			<img alt="futbol" src="img/futbol.jpg" />
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
					<li>Futbol</li>
					<li>Televisión</li>
					<li>Películas</li>
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
							<button id="button-top" class="button-control top-bottom"><img src="img/arrow-top.png" /></button>
							<button id="button-left" class="button-control left-right"><img src="img/arrow-left.png" /></button>
							<button id="button-right" class="button-control left-right"><img src="img/arrow-right.png" /></button>
							<button id="button-bottom" class="button-control top-bottom"><img src="img/arrow-bottom.png" /></button>
						</div>
						
					</div>
				</div>
				<div id="body-filter">
					<div class="group">
						<h4>Liga:</h4>
						<select id="select-liga">
							
						</select>
					</div>
					<div class="group">
						<h4>Equipo:</h4>
						<select id="select-team">
							<option id="allTeam" value="0">Todos</option>
							
						</select>
					</div>
					<div class="group">
						<h4>Jornada:</h4>
						<select id="select-matchDay">
							
						</select>
					</div>
					<div class="group">
						<h4>Calendario:</h4>
						<div id="calendar"></div>
					</div>
					
				</div>
			</div>
		</aside>
		<article>
			<section>
				<div id="map" style="width:100%;height:380px;"></div>
				<h1>Hola</h1>
			</section>
		</article>	
		<div class="limpieza"></div>
	</div>
</body>
</html>
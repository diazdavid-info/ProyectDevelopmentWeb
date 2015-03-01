<?php
require_once("Rest.php");
class Api extends Rest {
	
	private $_metodo;
	
	private $_argumentos;
	
	public function receiveRequest() {
		if (isset($_REQUEST['q'])) {
			$url = explode('/', trim($_REQUEST['q']));
			$url = array_filter($url);
			$this->_metodo = strtolower(array_shift($url));
			$this->_argumentos = $url;
			$func = $this->_metodo;
			if (method_exists($this, $func)) {
				call_user_func(array($this, $this->_metodo));
			}else{
				$this->sendResponse($this->convertirJson($this->devolverError(0)), 404);
			}
		}
		$this->sendResponse($this->convertirJson($this->devolverError(0)), 404);
	}
	
	private function getLeague(){
		$argLeague = League::all();
		$this->sendResponse(json_encode($argLeague), 200);
	}
	
	private function getTeam(){
		$argTeam = Team::where(array("liga_id"), $this->_argumentos);
		$this->sendResponse(json_encode($argTeam), 200);
	}
	
	private function getMatch(){
		$argMatch = Match::where(array("liga_id"), $this->_argumentos);
		$this->sendResponse(json_encode($argMatch), 200);
	}
	
	private function getMatchLeagueDay(){
		$argMatch = Match::where(array("liga_id","jornada"), $this->_argumentos);
		$this->sendResponse(json_encode($argMatch), 200);
	}
	
	private function getAllMatchLeague(){
		$argMatch = Match::where(array("liga_id"), $this->_argumentos);
		$this->sendResponse(json_encode($argMatch), 200);
	}
	
	private function getProvincia() {
		$provincias = Provincia::find(1);
		$this->sendResponse(json_encode($provincias), 200);
	}
	
	private function getAllCountry(){
		$countries = Country::all();
		$countries2 = array();
		foreach ($countries as $country){
			$films = Film::whereDate(array("pais_id","fecha"), array($country->id, $this->_argumentos[0]));
			$country->setFilm($films);
			if($films != null){
				$countries2[] = $country;
			}
			
		}
		$this->sendResponse(json_encode($countries2), 200);
	}
}
$api = new Api();
$api->receiveRequest();
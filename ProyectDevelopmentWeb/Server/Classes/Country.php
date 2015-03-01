<?php

/**
 * @version 0.1
 * @author David Díaz
 * @date 2015-01-19
 * Clase de Ligas.
 *
 */

require_once ('../ORM/ORM.php');

class Country extends ORM{

	public $id, $nombre, $lat, $lng;
	public $film;
	protected static $table = "pais";

	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}

	public function populateFromRow($data){
		$this->id = isset($data['id']) ? intval($data['id']) : null;
		$this->nombre = isset($data['nombre']) ? $data['nombre'] : null;
		$this->lat = isset($data['lat']) ? $data['lat'] : null;
		$this->lng = isset($data['lng']) ? $data['lng'] : null;
		//$this->films = isset($data['film']) ? $data['film'] : Film::where(array("pais_id"), array($this->id));
	}
	
	public function setFilm($films){
		$this->film = $films;
	}

}
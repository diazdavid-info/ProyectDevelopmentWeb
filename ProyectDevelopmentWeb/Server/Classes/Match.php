<?php
/**
 * @version 0.1
* @author David Díaz
* @date 2015-01-19
* Clase de partidos
*
*/

require_once ('../ORM/ORM.php');

class Match extends ORM{
	
	public $jornada, $fecha, $liga_id, $equipo_local, $equipo_visitante, $goles_local, $goles_visitante;
	protected static $table = "partidos";
	
	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}
	
	public function populateFromRow($data){
		$this->jornada = isset($data['jornada']) ? intval($data['jornada']) : null;
		$this->fecha = isset($data['fecha']) ? $data['fecha'] : null;
		$this->liga_id = isset($data['liga_id']) ? intval($data['liga_id']) : null;
		$this->equipo_local = isset($data['equipo_local']) ? $data['equipo_local'] : null;
		$this->equipo_visitante = isset($data['equpipo_visitante']) ? $data['equipo_visitante'] : null;
		$this->goles_local = isset($data['goles_local']) ? $data['goles_local'] : null;
		$this->goles_visitante = isset($data['goles_visitante']) ? $data['goles_visitante'] : null;
	}

}
<?php
/**
 * @version 0.1
 * @author David Díaz
 * @date 2015-01-19
 * Clase de equipos
 *
 */

require_once ('../ORM/ORM.php');

class Team extends ORM{
	
	public $nombre, $liga_id, $lat, $lng, $imagen;
	protected static $table = "equipos";
	
	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}
	
	public function populateFromRow($data){
		$this->nombre = isset($data['nombre']) ? $data['nombre'] : null;
		//$this->liga_id = isset($data['liga_id']) ? intval($data['liga_id']) : null;
		$this->liga_id = is_object($data['liga_id']) ? $data['liga_id'] : League::find(array($data['liga_id']));
		$this->lat = isset($data['lat']) ? $data['lat'] : null;
		$this->lng = isset($data['lng']) ? $data['lng'] : null;
		$this->imagen = isset($data['imagen']) ? $data['imagen'] : null;
	}
}
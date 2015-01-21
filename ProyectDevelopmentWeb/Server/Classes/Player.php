<?php
/**
 * @version 0.1
 * @author David Díaz
 * @date 2015-01-19
 * Clase de jugadores
 *
 */

require_once ('../ORM/ORM.php');

class Player extends ORM{
	
	public $dorsal, $equipo_nombre, $liga_id, $nombre, $imagen;
	protected static $table = "jugadores";
	
	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}
	
	public function populateFromRow($data){
		$this->dorsal = isset($data['dorsal']) ? intval($data['dorsal']) : null;
		$this->equipo_nombre = isset($data['equipo_nombre']) ? $data['equipo_nombre'] : null;
		$this->liga_id = isset($data['liga_id']) ? intval($data['liga_id']) : null;
		$this->nombre = isset($data['nombre']) ? $data['nombre'] : null;
		$this->imagen = isset($data['imagen']) ? $data['imagen'] : null;
	}
	
}
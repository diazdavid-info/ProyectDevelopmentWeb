<?php

/**
 * @version 0.1
* @author David Díaz
* @date 2015-01-19
* Clase de Ligas.
*
*/

require_once ('../ORM/ORM.php');

class Film extends ORM{

	public $id, $nombre, $imagen, $fecha;
	protected static $table = "pelicula";

	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}

	public function populateFromRow($data){
		$this->id = isset($data['id']) ? intval($data['id']) : null;
		$this->nombre = isset($data['nombre']) ? $data['nombre'] : null;
		$this->imagen = isset($data['imagen']) ? $data['imagen'] : null;
		$this->fecha = isset($data['fecha']) ? $data['fecha'] : null;
	}

}
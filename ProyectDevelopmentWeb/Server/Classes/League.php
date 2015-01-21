<?php
/**
 * @version 0.1
 * @author David Díaz
 * @date 2015-01-19
 * Clase de Ligas.
 *
 */

require_once ('../ORM/ORM.php');

class League extends ORM{
	
	public $id, $nombre, $ayno_inicio, $ayno_fin;
	protected static $table = "liga";
	
	public function __construct($data){
		parent::__construct();
		if($data && sizeof($data)){
			$this->populateFromRow($data);
		}
	}
	
	public function populateFromRow($data){
		$this->id = isset($data['id']) ? intval($data['id']) : null;
		$this->nombre = isset($data['nombre']) ? $data['nombre'] : null;
		$this->ayno_inicio = isset($data['ayno_inicio']) ? intval($data['ayno_inicio']) : null;
		$this->ayno_fin = isset($data['ayno_fin']) ? intval($data['ayno_fin']) : null;
	}
	
}
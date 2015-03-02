<?php
require_once ('../Classes/LinkClasses.php');
class Rest{
	public $typeResponse = "application/json";
	public $dataRequest = array();
	private $codState = 200;
	
	
	public function sendResponse($data, $state) {
		$this->codState = ($state) ? $state : 200;
		$this->setHeader();
		echo $data;
		exit;
	}
	
	private function getCodState() {
		$state = array(
				200 => 'OK',
				201 => 'Created',
				202 => 'Accepted',
				204 => 'No Content',
				301 => 'Moved Permanently',
				302 => 'Found',
				303 => 'See Other',
				304 => 'Not Modified',
				400 => 'Bad Request',
				401 => 'Unauthorized',
				403 => 'Forbidden',
				404 => 'Not Found',
				405 => 'Method Not Allowed',
				500 => 'Internal Server Error');
		$response = ($state[$this->codState]) ? $state[$this->codState] : $state[500];
		return $response;
	}
	
	private function setHeader() {
		header("HTTP/1.1 " . $this->codState . " " . $this->getCodState());
		header("Content-Type:" . $this->typeResponse . ';charset=utf-8');
	}
	
	private function limpiarEntrada($data) {
		$entrada = array();
		if (is_array($data)) {
			foreach ($data as $key => $value) {
				$entrada[$key] = $this->limpiarEntrada($value);
			}
		} else {
			if (get_magic_quotes_gpc()) {
				$data = trim(stripslashes($data));
			}
			$data = strip_tags($data);
			$data = htmlentities($data);
			$entrada = trim($data);
		}
		return $entrada;
	}
	private function tratarEntrada() {
		$metodo = $_SERVER['REQUEST_METHOD'];
		switch ($metodo) {
			case "GET":
				$this->datosPeticion = $this->limpiarEntrada($_GET);
				break;
			case "POST":
				$this->datosPeticion = $this->limpiarEntrada($_POST);
				break;
			case "DELETE":
			case "PUT":
				parse_str(file_get_contents("php://input"), $this->datosPeticion);
				$this->datosPeticion = $this->limpiarEntrada($this->datosPeticion);
				break;
			default:
				$this->response('', 404);
				break;
		}
	}
	
	
}
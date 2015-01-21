/**
 * 
 */


function League(id, nombre, ayno_inicio, ayno_fin) {
	this.id = id;
	this.nombre = nombre;
	this.ayno_inicio = ayno_inicio;
	this.ayno_fin = ayno_fin;
	
	this.getId = function() {
		return this.id;
	}
	
	this.getNombre = function() {
		return this.nombre;
	}
	
	this.getAyno_inicio = function() {
		return this.anyo_inicio;
	}
	
	this.getAyno_fin = function() {
		return this.anyo_fin;
	}
	
}
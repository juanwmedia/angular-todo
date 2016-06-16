function TodoController() {
    this.tareas = [
        { nombre: 'Hacer la cama', completado: false },
        { nombre: 'Comprar café', completado: true },
        { nombre: 'Limpiar el coche', completado: false },
        { nombre: 'Aprender Angular', completado: true },
        { nombre: 'Conectar con Firebase', completado: false },
        { nombre: 'Preparar la comida', completado: true },
    ];
}

angular
    .module('TodoApp')
    .controller('TodoController', TodoController);
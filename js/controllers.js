function TodoController() {
    var vm = this;
    vm.nuevaTarea = '';
    vm.agregarTarea = function() {
        vm.tareas.unshift({
            nombre: vm.nuevaTarea,
            completado: false
        });
        vm.nuevaTarea = '';
    };
    vm.editarTarea = function(nombre, indice) {
        if (!nombre) return;
        vm.tareas[indice].nombre = nombre;
    };
    vm.eliminarTarea = function(indice) {
        vm.tareas.splice(indice, 1);
    };
    vm.tareas = [
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
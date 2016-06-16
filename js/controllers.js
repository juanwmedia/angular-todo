function TodoController(TodoService) {
    var vm = this;
    vm.nuevaTarea = '';
    vm.tareas = [];
    vm.obtenerTareas = function () {
        TodoService
            .obtenerTareas()
            .then(function (respuesta) {
                vm.tareas = respuesta;
            });
    }
    vm.agregarTarea = function () {
        TodoService
            .agregarTarea({
                title: vm.nuevaTarea,
                completed: false
            })
            .then(function (respuesta) {
                vm.tareas.unshift(respuesta);
                vm.nuevaTarea = '';
            });
    };
    vm.editarTarea = function (tarea) {
        TodoService
            .editarTarea(tarea);
    };
    vm.eliminarTarea = function (tarea, indice) {
        TodoService
            .eliminarTarea(tarea)
            .then(function (respuesta) {
                vm.tareas.splice(indice, 1);
            });
    };
    vm.obtenerTareas();
}

angular
    .module('TodoApp')
    .controller('TodoController', TodoController);
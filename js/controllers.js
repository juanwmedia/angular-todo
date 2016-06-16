function TodoController(TodoService) {
    var vm = this;
    vm.nuevaTarea = '';
    vm.tareas = [];
    vm.tareasCompletadas = [];
    vm.obtenerTareasCompletadas = function() {
        vm.tareasCompletadas = vm.tareas.filter(function(tarea){
            return tarea.completed;
        });
    };
    vm.obtenerTareas = function () {
        TodoService
            .obtenerTareas()
            .then(function (respuesta) {
                vm.tareas = respuesta;
                vm.obtenerTareasCompletadas();
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
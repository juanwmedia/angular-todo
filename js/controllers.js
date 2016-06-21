function TodoController(APIRestService, LocalService) {
    var vm = this,
        servicio = LocalService;
    vm.nuevaTarea = '';
    vm.tareas = [];
    vm.tareasCompletadas = [];

    vm.obtenerTareasCompletadas = function () {
        vm.tareasCompletadas = vm.tareas.filter(function (tarea) {
            return tarea.completed;
        });
    };
    vm.obtenerTareas = function () {
        servicio
            .obtenerTareas()
            .then(function (respuesta) {
                vm.tareas = respuesta;
                vm.obtenerTareasCompletadas();
            })
            .catch(function (error)  {
                console.error(error);
            });
    }
    vm.agregarTarea = function () {
        servicio
            .agregarTarea({
                title: vm.nuevaTarea,
                completed: false
            })
            .then(function (respuesta) {
                vm.tareas.unshift(respuesta);
                vm.nuevaTarea = '';
            });
    };
    vm.editarTarea = function (tarea, indice) {
        servicio
            .editarTarea(tarea, indice);
    };
    vm.eliminarTarea = function (tarea, indice) {
        servicio
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
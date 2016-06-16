function TodoService($http) {
    var API = '//jsonplaceholder.typicode.com/todos/';

    function obtenerTareas() {
        return $http
            .get(API)
            .then(function (respuesta) {
                return respuesta.data.splice(0, 10);
            })
    }

    function editarTarea(tarea) {
        return $http
            .put(API + tarea.id)
            .then(function (respuesta) {
                return respuesta.data;
            });
    }

    function agregarTarea(tarea) {
        return $http
            .post(API, tarea)
            .then(function (respuesta) {
                return respuesta.data;
            });
    }

    function eliminarTarea(tarea) {
        return $http
            .delete(API + tarea.id)
            .then(function (respuesta) {
                return respuesta.data;
            });
    }

    return {
        obtenerTareas: obtenerTareas,
        editarTarea: editarTarea,
        agregarTarea: agregarTarea,
        eliminarTarea: eliminarTarea
    }
}

angular
    .module('TodoApp')
    .factory('TodoService', TodoService);
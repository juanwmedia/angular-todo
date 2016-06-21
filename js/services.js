// Conexión a API externa
function APIRestService($http) {
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

// Usando almacenamiento local
function LocalService($q) {
    var key = 'tareas';

    function obtenerTareas() {
        var deferred = $q.defer(),
            tareas = angular.fromJson(window.localStorage[key]);
        if (tareas) {
            deferred.resolve(tareas);
        } else {
            deferred.reject('No hay tareas en el almacenaiento local');
        }
        return deferred.promise;
    }

    function agregarTarea(tarea) {
        var deferred = $q.defer();
            tareas = angular.fromJson(window.localStorage[key]);
        tareas = tareas || [];
        tareas.unshift(tarea);
        window.localStorage[key] = angular.toJson(tareas);
        deferred.resolve(tarea);
        return deferred.promise;
    }

    function editarTarea(tarea, indice) {
        var deferred = $q.defer();
            tareas = angular.fromJson(window.localStorage[key]);
        tareas[indice] = tarea;
        window.localStorage[key] = angular.toJson(tareas);
        deferred.resolve(tarea);
        return deferred.promise;
    }

    function eliminarTarea(tarea, indice) {
        var deferred = $q.defer();
            tareas = angular.fromJson(window.localStorage[key]);
        tareas.splice(indice, 1);
        window.localStorage[key] = angular.toJson(tareas);
        deferred.resolve(tarea);
        return deferred.promise;
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
    .factory('APIRestService', APIRestService)
    .factory('LocalService', LocalService);
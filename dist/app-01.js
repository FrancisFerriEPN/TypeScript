"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// DECORADORES
/* function Entidad(target: any) {
    console.log("Entidad", target);
} */
function Entidad(config) {
    console.log("Entidad", config);
    return function (target) {
        // Dinamicamente asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('Target', target);
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
//@Entidad()
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = "";
    }
    //@enumerable(true)
    Curso.prototype.getPrueba = function () {
        return this.prueba;
    };
    Curso.prototype.lectura = function () {
        // algun algoritmo
    };
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        enumerable(false) // no aparece como propiedad
    ], Curso.prototype, "getPrueba", null);
    __decorate([
        readonly
    ], Curso.prototype, "lectura", null);
    Curso = __decorate([
        Entidad({
            clave: "CURSO"
        })
    ], Curso);
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital() {
    }
    EscuelaDigital = __decorate([
        Entidad({
            clave: "ESCUELA DIGITAL"
        })
    ], EscuelaDigital);
    return EscuelaDigital;
}());
function analizarClase(clase) {
    console.log("Clave", clase.clave);
}
function mostarPropiedades(clase) {
    for (var prop in clase.prototype) {
        console.log("Propiedad", prop);
    }
}
var typeScript = new Curso(1, "TypeScript");
analizarClase(Curso);
// Sobreescritura de la funcion
// Se vuelve una propiedad de solo lectura
//typeScript.lectura = function() {};
var esciela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostarPropiedades(Curso);

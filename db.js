const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyA-eIEgoyS6_XCwlxaSHx9LAvtwrrqRTwY",
    authDomain: "devstore-39403.firebaseapp.com",
    projectId: "devstore-39403",    
});

var db = firebase.firestore();

var cursos = [
    {
        "id": 1,
        "categoria": "lenguajes",
        "titulo": "html 5",
        "descripcion": "En este curso aprenderas la última versión de HTML. El término representa dos conceptos diferentes: 1- Se trata de una nueva versión de HTML, con nuevos elementos, atributos y comportamientos. 2- Contiene un conjunto más amplio de tecnologías que permite a los sitios Web y a las aplicaciones ser más diversas y de gran alcance. A este conjunto se le llama HTML5 y amigos, a menudo reducido a HTML5.",
        "img": "1.svg",
        "duracion": 30,
        "precio": 550,
        "cupo": 10,
        "destacado": true
    },
    {
        "id": 2,
        "categoria": "lenguajes",
        "titulo": "css 3",
        "descripcion": "En este curso aprenderas las nuevas características de las especificaciones de Hojas de Estilo en Cascada nivel 3, CSS3, para definir el aspecto de las páginas web de una manera más avanzada.",
        "img": "2.svg",
        "duracion": 20,
        "precio": 650,
        "cupo": 8,
        "destacado": true
    },
    {
        "id": 3,
        "categoria": "lenguajes",
        "titulo": "javascript",
        "descripcion": "En este curso aprenderas las últimas novedades de JS: un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,2​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
        "img": "3.svg",
        "duracion": 40,
        "precio": 850,
        "cupo": 6,
        "destacado": true
    },
    {
        "id": 4,
        "categoria": "lenguajes",
        "titulo": "swift",
        "descripcion": "En este curso aprenderas este lenguaje de programación multiparadigma creado por Apple enfocado en el desarrollo de aplicaciones para iOS y macOS. Fue presentado en la WWDC 20147​ y está diseñado para integrarse con los Frameworks Cocoa y Cocoa Touch; puede usar cualquier biblioteca programada en Objective-C y llamar a funciones de C.",
        "img": "4.svg",
        "duracion": 40,
        "precio": 950,
        "cupo": 4,
        "destacado": false
    },
    {
        "id": 5,
        "categoria": "librerias",
        "titulo": "chart js",
        "descripcion": "En este curso aprenderas esta biblioteca JavaScript gratuita de código abierto para la visualización de datos, que admite 8 tipos de gráficos: barra, línea, área, circular, burbuja, radar, polar y dispersión.",
        "img": "5.svg",
        "duracion": 50,
        "precio": 990,
        "cupo": 2,
        "destacado": false
    },
    {
        "id": 6,
        "categoria": "librerias",
        "titulo": "lodash",
        "descripcion": "En este curso aprenderas esta biblioteca de JavaScript que proporciona funciones de utilidad para tareas de programación comunes utilizando el paradigma de programación funcional.",
        "img": "6.svg",
        "duracion": 40,
        "precio": 750,
        "cupo": 3,
        "destacado": false
    },
    {
        "id": 7,
        "categoria": "librerias",
        "titulo": "moment",
        "descripcion": "En este curso aprenderas esta librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo.",
        "img": "7.png",
        "duracion": 30,
        "precio": 690,
        "cupo": 5,
        "destacado": false
    },
    {
        "id": 8,
        "categoria": "librerias",
        "titulo": "anime",
        "descripcion": "En este curso aprenderas esta ligera librería de animación basada en JavaScript. Puedes usarla para animar diferentes propiedades CSS, SVG o atributos DOM en una página web.",
        "img": "8.jpg",
        "duracion": 40,
        "precio": 590,
        "cupo": 7,
        "destacado": false
    },
    {
        "id": 9,
        "categoria": "frameworks",
        "titulo": "react",
        "descripcion": "En este curso aprenderas este framework Javascript de código abierto diseñado para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.",
        "img": "9.svg",
        "duracion": 50,
        "precio": 890,
        "cupo": 9,
        "destacado": true
    },
    {
        "id": 10,
        "categoria": "frameworks",
        "titulo": "node js",
        "descripcion": "En este curso aprenderas este entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.",
        "img": "10.svg",
        "duracion": 50,
        "precio": 990,
        "cupo": 11,
        "destacado": false
    },
    {
        "id": 11,
        "categoria": "frameworks",
        "titulo": "ember js",
        "descripcion": "En este curso aprenderas este framework JavaScript de código abierto que utiliza un patrón de servicio de componentes.",
        "img": "11.svg",
        "duracion": 30,
        "precio": 650,
        "cupo": 3,
        "destacado": false
    },
    {
        "id": 12,
        "categoria": "herramientas",
        "titulo": "git",
        "descripcion": "En este curso aprenderas este software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.",
        "img": "12.svg",
        "duracion": 50,
        "precio": 850,
        "cupo": 6,
        "destacado": false
    },
    {
        "id": 13,
        "categoria": "herramientas",
        "titulo": "vsc",
        "descripcion": "En este curso aprenderas este editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.",
        "img": "13.svg",
        "duracion": 20,
        "precio": 150,
        "cupo": 6,
        "destacado": false
    },
    {
        "id": 14,
        "categoria": "herramientas",
        "titulo": "terminal",
        "descripcion": "En este curso aprenderas a dominar el terminal o consola para tener una mayor eficiencia a la hora de desarrollar tus proyectos.",
        "img": "14.webp",
        "duracion": 20,
        "precio": 250,
        "cupo": 10,
        "destacado": false
    }
];

cursos.forEach((obj) => {
    db.collection("cursos")
        .add({  
            id: obj.id,
            categoria: obj.categoria,
            titulo: obj.titulo,
            descripcion: obj.descripcion,
            img: obj.img,
            duracion: obj.duracion,
            precio: obj.precio,
            cupo: obj.cupo,
            destacado: obj.destacado,
        })
        .then((docRef) => {
            console.log("Producto registrado con ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error al agregar un documento: ", error);
        });
});
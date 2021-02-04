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
        "descripcion": "En este curso aprenderas...",
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
        "descripcion": "En este curso aprenderas...",
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
        "descripcion": "En este curso aprenderas...",
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
        "descripcion": "En este curso aprenderas...",
        "img": "4.webp",
        "duracion": 40,
        "precio": 950,
        "cupo": 4,
        "destacado": false
    },
    {
        "id": 5,
        "categoria": "librerias",
        "titulo": "chart js",
        "descripcion": "En este curso aprenderas...",
        "img": "5.webp",
        "duracion": 50,
        "precio": 990,
        "cupo": 2,
        "destacado": false
    },
    {
        "id": 6,
        "categoria": "librerias",
        "titulo": "lodash",
        "descripcion": "En este curso aprenderas...",
        "img": "6.webp",
        "duracion": 40,
        "precio": 750,
        "cupo": 3,
        "destacado": false
    },
    {
        "id": 7,
        "categoria": "librerias",
        "titulo": "moment",
        "descripcion": "En este curso aprenderas...",
        "img": "7.webp",
        "duracion": 30,
        "precio": 690,
        "cupo": 5,
        "destacado": false
    },
    {
        "id": 8,
        "categoria": "librerias",
        "titulo": "anime",
        "descripcion": "En este curso aprenderas...",
        "img": "8.webp",
        "duracion": 40,
        "precio": 590,
        "cupo": 7,
        "destacado": false
    },
    {
        "id": 9,
        "categoria": "frameworks",
        "titulo": "react",
        "descripcion": "En este curso aprenderas...",
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
        "descripcion": "En este curso aprenderas...",
        "img": "10.webp",
        "duracion": 50,
        "precio": 990,
        "cupo": 11,
        "destacado": false
    },
    {
        "id": 11,
        "categoria": "frameworks",
        "titulo": "ember js",
        "descripcion": "En este curso aprenderas...",
        "img": "11.webp",
        "duracion": 30,
        "precio": 650,
        "cupo": 3,
        "destacado": false
    },
    {
        "id": 12,
        "categoria": "herramientas",
        "titulo": "git",
        "descripcion": "En este curso aprenderas...",
        "img": "12.webp",
        "duracion": 50,
        "precio": 850,
        "cupo": 6,
        "destacado": false
    },
    {
        "id": 13,
        "categoria": "herramientas",
        "titulo": "vsc",
        "descripcion": "En este curso aprenderas...",
        "img": "13.webp",
        "duracion": 20,
        "precio": 150,
        "cupo": 6,
        "destacado": false
    },
    {
        "id": 14,
        "categoria": "herramientas",
        "titulo": "terminal",
        "descripcion": "En este curso aprenderas...",
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
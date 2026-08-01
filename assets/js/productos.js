const productos = [

    {
        id: 1,
        nombre: "Aretes",
        precio: 39.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Aretes.jpg",
        descripcion: "Hermosos aretes artesanales elaborados a mano con acabados tradicionales peruanos. Perfectos para complementar cualquier estilo.",
        stock: 18,
        rating: 4.8,
        opiniones: 125,
        nuevo: true,
        favorito: false
    },

    {
        id: 2,
        nombre: "Armadillo",
        precio: 69.90,
        categoria: "Artesanías",
        region: "Selva",
        imagen: "assets/productos/Armadillo.jpg",
        descripcion: "Figura artesanal de armadillo elaborada por artesanos peruanos con detalles únicos y acabados de alta calidad.",
        stock: 12,
        rating: 4.7,
        opiniones: 84,
        nuevo: false,
        favorito: false
    },

    {
        id: 3,
        nombre: "Atrapasueños",
        precio: 45.90,
        categoria: "Decoración",
        region: "Sierra",
        imagen: "assets/productos/Atrapasueños.jpg",
        descripcion: "Atrapasueños tejido a mano con diseños inspirados en la cultura andina. Ideal para decorar cualquier ambiente.",
        stock: 20,
        rating: 4.9,
        opiniones: 167,
        nuevo: true,
        favorito: false
    },

    {
        id: 4,
        nombre: "Balsa",
        precio: 89.90,
        categoria: "Decoración",
        region: "Selva",
        imagen: "assets/productos/Balsa.jpg",
        descripcion: "Balsa artesanal inspirada en las tradicionales embarcaciones amazónicas, elaborada cuidadosamente por artesanos peruanos. Ideal como pieza decorativa o de colección.",
        stock: 10,
        rating: 4.8,
        opiniones: 73,
        nuevo: false,
        favorito: false
    },

    {
        id: 5,
        nombre: "Bufanda",
        precio: 59.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Bufanda.jpg",
        descripcion: "Bufanda tejida a mano con fibras de alta calidad y diseños inspirados en los Andes peruanos. Brinda abrigo y un estilo tradicional.",
        stock: 22,
        rating: 4.9,
        opiniones: 158,
        nuevo: true,
        favorito: false
    },

    {
        id: 6,
        nombre: "Caballito",
        precio: 49.90,
        categoria: "Artesanías",
        region: "Costa",
        imagen: "assets/productos/Caballito.jpg",
        descripcion: "Figura artesanal inspirada en los tradicionales caballitos de totora utilizados por los pescadores peruanos. Un símbolo de la cultura costera.",
        stock: 16,
        rating: 4.7,
        opiniones: 92,
        nuevo: false,
        favorito: false
    },

    {
        id: 7,
        nombre: "Cabeza",
        precio: 54.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Cabeza.jpeg",
        descripcion: "Escultura artesanal tallada con finos detalles que representa el talento y la tradición de los artesanos peruanos.",
        stock: 11,
        rating: 4.8,
        opiniones: 78,
        nuevo: false,
        favorito: false
    },

    {
        id: 8,
        nombre: "Capivara",
        precio: 64.90,
        categoria: "Artesanías",
        region: "Selva",
        imagen: "assets/productos/Capivara.jpg",
        descripcion: "Figura decorativa de capivara elaborada artesanalmente e inspirada en la fauna amazónica. Ideal para decorar cualquier espacio.",
        stock: 13,
        rating: 4.9,
        opiniones: 105,
        nuevo: true,
        favorito: false
    },

    {
        id: 9,
        nombre: "Chaleco",
        precio: 119.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Chaleco.jpg",
        descripcion: "Chaleco artesanal tejido con diseños tradicionales andinos, cómodo, cálido y perfecto para complementar cualquier atuendo.",
        stock: 9,
        rating: 4.8,
        opiniones: 67,
        nuevo:true,
        favorito: false
    },

    {
        id: 10,
        nombre: "Chullo",
        precio: 49.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Chullo.jpg",
        descripcion: "Chullo peruano tejido a mano con orejeras y coloridos patrones tradicionales. Ideal para proteger del frío con un estilo auténtico.",
        stock: 24,
        rating: 5.0,
        opiniones: 183,
        nuevo: true,
        favorito: false
    },

    {
        id: 11,
        nombre: "Collar",
        precio: 44.90,
        categoria: "Joyería",
        region: "Sierra",
        imagen: "assets/productos/Collar.jpg",
        descripcion: "Collar artesanal elaborado a mano con materiales tradicionales y detalles que resaltan la identidad cultural peruana.",
        stock: 19,
        rating: 4.8,
        opiniones: 141,
        nuevo: true,
        favorito: false
    },

    {
        id: 12,
        nombre: "Cuadro",
        precio: 129.90,
        categoria: "Decoración",
        region: "Costa",
        imagen: "assets/productos/Cuadro.jpg",
        descripcion: "Cuadro decorativo elaborado por artistas peruanos con diseños inspirados en la riqueza cultural y natural del país.",
        stock: 7,
        rating: 4.9,
        opiniones: 53,
        nuevo: true,
        favorito: false
    },

    {
        id: 13,
        nombre: "Cucharas",
        precio: 39.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Cucharas.jpg",
        descripcion: "Juego de cucharas talladas artesanalmente con acabados tradicionales. Perfectas para decorar o coleccionar.",
        stock: 21,
        rating: 4.7,
        opiniones: 74,
        nuevo: false,
        favorito: false
    },

    {
        id: 14,
        nombre: "Dije",
        precio: 29.90,
        categoria: "Joyería",
        region: "Sierra",
        imagen: "assets/productos/Dije.jpg",
        descripcion: "Dije artesanal cuidadosamente elaborado con diseños inspirados en los símbolos ancestrales del Perú.",
        stock: 28,
        rating: 4.8,
        opiniones: 163,
        nuevo: true,
        favorito: false
    },

    {
        id: 15,
        nombre: "Ekeko",
        precio: 79.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Ekeko.jpg",
        descripcion: "Figura tradicional del Ekeko, símbolo andino de abundancia, prosperidad y buena fortuna. Elaborada completamente a mano.",
        stock: 12,
        rating: 5.0,
        opiniones: 119,
        nuevo: false,
        favorito: false
    },

    {
        id: 16,
        nombre: "Gorro",
        precio: 44.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Gorro.jpg",
        descripcion: "Gorro tejido artesanalmente con fibras de excelente calidad, ideal para proteger del frío con un toque tradicional.",
        stock: 23,
        rating: 4.9,
        opiniones: 148,
        nuevo: true,
        favorito: false
    },

    {
        id: 17,
        nombre: "Guantes",
        precio: 39.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Guantes.jpg",
        descripcion: "Guantes tejidos a mano con diseños andinos y materiales suaves que brindan comodidad y abrigo.",
        stock: 18,
        rating: 4.8,
        opiniones: 91,
        nuevo: false,
        favorito: false
    },

    {
        id: 18,
        nombre: "Jaguar",
        precio: 69.90,
        categoria: "Artesanías",
        region: "Selva",
        imagen: "assets/productos/Jaguar.jpg",
        descripcion: "Figura artesanal inspirada en el jaguar amazónico, símbolo de fuerza y naturaleza. Ideal para decorar o coleccionar.",
        stock: 11,
        rating: 4.9,
        opiniones: 82,
        nuevo: true,
        favorito: false
    },

    {
        id: 19,
        nombre: "Jarrón",
        precio: 79.90,
        categoria: "Decoración",
        region: "Costa",
        imagen: "assets/productos/Jarron.jpg",
        descripcion: "Jarrón artesanal elaborado y decorado a mano con acabados tradicionales que aportan elegancia y un toque peruano a cualquier espacio.",
        stock: 10,
        rating: 4.8,
        opiniones: 71,
        nuevo: false,
        favorito: false
    },

    {
        id: 20,
        nombre: "Loros",
        precio: 64.90,
        categoria: "Artesanías",
        region: "Selva",
        imagen: "assets/productos/Loros.jpg",
        descripcion: "Figura artesanal de loros inspirada en la biodiversidad de la Amazonía peruana, ideal para decorar el hogar.",
        stock: 13,
        rating: 4.9,
        opiniones: 97,
        nuevo: true,
        favorito: false
    },

    {
        id: 21,
        nombre: "Manopla",
        precio: 34.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Manopla.jpg",
        descripcion: "Manopla tejida artesanalmente con suaves fibras, perfecta para proteger las manos del frío manteniendo un estilo tradicional.",
        stock: 24,
        rating: 4.7,
        opiniones: 59,
        nuevo: false,
        favorito: false
    },

    {
        id: 22,
        nombre: "Manto",
        precio: 99.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Manto.jpg",
        descripcion: "Manto andino confeccionado artesanalmente con coloridos diseños tradicionales que representan la riqueza cultural del Perú.",
        stock: 9,
        rating: 5.0,
        opiniones: 145,
        nuevo: true,
        favorito: false
    },

    {
        id: 23,
        nombre: "Mitones",
        precio: 39.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Mitones.jpg",
        descripcion: "Mitones tejidos a mano que brindan abrigo y comodidad, ideales para el uso diario durante temporadas de frío.",
        stock: 20,
        rating: 4.8,
        opiniones: 88,
        nuevo: true,
        favorito: false
    },

    {
        id: 24,
        nombre: "Mochila",
        precio: 129.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Mochila.jpg",
        descripcion: "Mochila artesanal confeccionada con tejidos tradicionales peruanos, resistente, espaciosa y perfecta para el uso diario.",
        stock: 12,
        rating: 4.9,
        opiniones: 164,
        nuevo: true,
        favorito: false
    },

    {
        id: 25,
        nombre: "Muñeca",
        precio: 49.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Muñeca.jpg",
        descripcion: "Muñeca artesanal confeccionada a mano con vestimenta típica peruana, ideal para coleccionistas y como recuerdo cultural.",
        stock: 17,
        rating: 4.8,
        opiniones: 103,
        nuevo: false,
        favorito: false
    },

    {
        id: 26,
        nombre: "Muñequeras",
        precio: 29.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Muñequeras.jpg",
        descripcion: "Muñequeras tejidas artesanalmente con diseños andinos que ofrecen comodidad y un estilo auténticamente peruano.",
        stock: 30,
        rating: 4.7,
        opiniones: 76,
        nuevo: false,
        favorito: false
    },

    {
        id: 27,
        nombre: "Peluche",
        precio: 59.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Peluche.jpg",
        descripcion: "Peluche artesanal confeccionado con materiales suaves y acabados de excelente calidad, perfecto para regalar o decorar.",
        stock: 18,
        rating: 4.9,
        opiniones: 132,
        nuevo: true,
        favorito: false
    },

    {
        id: 28,
        nombre: "Plato",
        precio: 44.90,
        categoria: "Decoración",
        region: "Costa",
        imagen: "assets/productos/Plato.jpg",
        descripcion: "Plato decorativo elaborado artesanalmente con diseños inspirados en el arte tradicional peruano, ideal para exhibición.",
        stock: 16,
        rating: 4.8,
        opiniones: 84,
        nuevo: false,
        favorito: false
    },

    {
        id: 29,
        nombre: "Pulseras",
        precio: 34.90,
        categoria: "Joyería",
        region: "Sierra",
        imagen: "assets/productos/Pulseras.jpg",
        descripcion: "Juego de pulseras artesanales elaboradas a mano con diseños inspirados en la cultura peruana. Ideales para complementar cualquier atuendo.",
        stock: 27,
        rating: 4.9,
        opiniones: 154,
        nuevo: true,
        favorito: false
    },

    {
        id: 30,
        nombre: "Quena",
        precio: 79.90,
        categoria: "Instrumentos",
        region: "Sierra",
        imagen: "assets/productos/Quena.jpg",
        descripcion: "Quena artesanal fabricada en madera y cuidadosamente trabajada por artesanos peruanos. Produce un sonido cálido y tradicional.",
        stock: 14,
        rating: 4.8,
        opiniones: 91,
        nuevo: false,
        favorito: false
    },

    {
        id: 31,
        nombre: "Retablo",
        precio: 129.90,
        categoria: "Artesanías",
        region: "Sierra",
        imagen: "assets/productos/Retablo.jpg",
        descripcion: "Retablo ayacuchano elaborado a mano con coloridas escenas costumbristas que representan la riqueza cultural del Perú.",
        stock: 8,
        rating: 5.0,
        opiniones: 176,
        nuevo: true,
        favorito: false
    },

    {
        id: 32,
        nombre: "Sombrero",
        precio: 69.90,
        categoria: "Textiles",
        region: "Sierra",
        imagen: "assets/productos/Sombrero.jpg",
        descripcion: "Sombrero artesanal confeccionado con materiales de alta calidad y acabados tradicionales, ideal para protegerse del sol con estilo.",
        stock: 18,
        rating: 4.9,
        opiniones: 117,
        nuevo: true,
        favorito: false
    },

    {
        id: 33,
        nombre: "Tazas",
        precio: 39.90,
        categoria: "Cerámica",
        region: "Costa",
        imagen: "assets/productos/Tazas.jpg",
        descripcion: "Taza artesanal de cerámica decorada con diseños peruanos, perfecta para disfrutar bebidas calientes con un toque tradicional.",
        stock: 25,
        rating: 4.8,
        opiniones: 103,
        nuevo: false,
        favorito: false
    },

    {
        id: 34,
        nombre: "Tetera",
        precio: 74.90,
        categoria: "Cerámica",
        region: "Costa",
        imagen: "assets/productos/Tetera.jpg",
        descripcion: "Tetera artesanal elaborada en cerámica con acabados decorativos que combinan funcionalidad y tradición peruana.",
        stock: 12,
        rating: 4.9,
        opiniones: 81,
        nuevo: true,
        favorito: false
    },

    {
        id: 35,
        nombre: "Tinaja",
        precio: 94.90,
        categoria: "Cerámica",
        region: "Costa",
        imagen: "assets/productos/Tinaja.jpg",
        descripcion: "Tinaja artesanal de cerámica elaborada con técnicas tradicionales, ideal para decorar interiores con un estilo rústico y elegante.",
        stock: 9,
        rating: 4.8,
        opiniones: 72,
        nuevo: false,
        favorito: false
    },

    {
        id: 36,
        nombre: "Tumi",
        precio: 99.90,
        categoria: "Artesanías",
        region: "Costa",
        imagen: "assets/productos/Tumi.jpg",
        descripcion: "Réplica artesanal del tradicional Tumi peruano, símbolo histórico de la cultura preincaica y una excelente pieza de colección.",
        stock: 13,
        rating: 5.0,
        opiniones: 169,
        nuevo: true,
        favorito: false
    },

    {
        id: 37,
        nombre: "Zampoña",
        precio: 40,
        categoria: "Instrumentos",
        region: "Sierra",
        imagen: "assets/productos/Zampoña.jpg",
        descripcion: "Instrumento musical andino de viento compuesto por tubos a modo de flautas.",
        stock: 15,
        rating: 5.0,
        opiniones: 100,
        nuevo: true,
        favorito: false
    },

    {
        id: 38,
        nombre: "Pututu",
        precio: 50,
        categoria: "Instrumentos",
        region: "Costa",
        imagen: "assets/productos/Pututu.jpg",
        descripcion: "Instrumento musical de viento andino tradicionalmente hecho con una gran caracola marina o un cuerno.",
        stock: 15,
        rating: 5.0,
        opiniones: 100,
        nuevo: true,
        favorito: false
    },

    {
        id: 39,
        nombre: "Charango",
        precio: 60,
        categoria: "Instrumentos",
        region: "Sierra",
        imagen: "assets/productos/Charango.jpg",
        descripcion: "Instrumento musical de cuerda andino derivado de la guitarra española durante el Virreinato.",
        stock: 15,
        rating: 5.0,
        opiniones: 200,
        nuevo: true,
        favorito: false
    },

    ];
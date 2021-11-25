
const items=[
     
    {"id": 1,
    "categoria":'Aires Acondicionados',
    'tarea': 'Mantenimiento',
    'nombre': 'Mantenimiento Unidad Interna',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid1.jpg',
    'descripcion': 'Limpieza de filtros y turbina de la unidad interna, para mejorar el flujo de aire y optimizar el intercambio térmico.',
    'precio': 2000 
    },
    {"id": 2,
    "categoria":'Aires Acondicionados',
    'tarea': 'Mantenimiento',
    'nombre': 'Mantenimiento Integral',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid2.jpg',
    'descripcion': 'Limpieza de filtros y turbina de la unidad interna, junto al hidrolavado del radiador de la unidad externa. Mejora de flujo de aire en ambas unidades para optimizar el intercambio térmico.',
    'precio': 2000 
    },
    {"id": 3 ,
    "categoria":'Aires Acondicionados',
    'tarea':'Reparación',
    'nombre': 'Carga de Gas',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid3.jpg',
    'descripcion': 'Recarga de gas en el equipo, teniendo en cuenta y reparando posibles puntos de fuga.',
    'precio':  5000
    },
    {"id": 4,
    "categoria":'Aires Acondicionados',
    'tarea': 'Reparación',
    'nombre': 'Cambio de capacitor',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid4.jpg',
    'descripcion': 'Cambio de capacitores defectuosos que impiden el arranque del compresor en la unidad externa, e imposibilitan el intercambio térmico',
    'precio':  4000
    },
    {"id": 5,
    "categoria":'Aires Acondicionados',
    'tarea': 'Reparación',
    'nombre': 'Cambio de placa',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid5.jpg',
    'descripcion': 'Procedimiento para cambiar la placa de la unidad interna, en caso de falla, permite continuar con la vida útil del equipo',
    'precio':  7000
    },
    {"id": 6,
    "categoria":'Aires Acondicionados',
    'tarea': 'Reparacion',
    'nombre': 'Cambio de compresor',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid6.png',
    'descripcion': 'Cambio de compresores quemados, para prolongar la vida útil del equipo. El precio publicado es solo por la mano de obra del procedimiento.',
    'precio':  10000
    },
    {"id": 7,
    "categoria":'Aires Acondicionados',
    'tarea': 'Reparacion',
    'nombre': 'Visita Técnica',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid7.jpg',
    'descripcion': 'Sino reconoce el servicio de reparación que precisa su equipo, solicite la visita técnica para enviarle un profesional a presupuestar y buscar soluciones para su equipo.',
    'precio':  0
    },
    {"id": 8,
    "categoria":'Aires Acondicionados',
    'tarea': 'Instalación',
    'nombre': 'Instalación Split entre 2300 y 4500 frigorias',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid8.jpg',
    'descripcion': 'Solicite la instalación de su equipo nuevo o usado. Instalaciones con garantía y en cumplimiento de las tareaes técnicas para el correcto funcionamiento del equipo.',
    'precio': 6000
    },
    {"id": 9,
    "categoria":'Aires Acondicionados',
    'tarea': 'Instalación',
    'nombre': 'Instalación de equipo mayores a 4500 frigorias',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid9.jpg',
    'descripcion': 'Solicite el presupuesto para la instalación de un equipo mayor a 4500 frigorias',
    'precio':  0
    },
    {"id": 10,
    "categoria":'Iluminación',
    'tarea': 'Remodelación',
    'nombre': 'Instalación de luminarias de reemplazo',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid10.jpg',
    'descripcion': 'Reemplazo de luminarias anticuadas o en mal estado',
    'precio': 1500
    },
    {"id": 11,
    "categoria":'Iluminación',
    'tarea': 'Remodelación',
    'nombre': 'Instalación de luminarias en sitios nuevos',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid11.jpg',
    'descripcion': 'Instalación de luminarias en sitios sin luminarias previas, que requieren cableados específicos',
    'precio':  2500
    },
    {"id": 12,
    "categoria":'Iluminación',
    'tarea': 'Reparación',
    'nombre': 'Reparación y restauración de luminarias',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid12.jpg',
    'descripcion': 'Realizamos la reparación y restauración de luminarias en uso, para dejarlas en perfecto estado y buen funcionamiento',
    'precio':  1000
    },
    {"id": 13,
    "categoria":'Electricidad',
    'tarea': 'Modernización',
    'nombre': 'Cableado de reemplazo',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid13.jpg',
    'descripcion': 'Realizamos el reemplazo de cableados antiguos, con el correspondiente cableado según norma actual',
    'precio': '100 x metro'  
    },
    {"id": 14,
    "categoria":'Electricidad',
    'tarea': 'Modernización',
    'nombre': 'Cambio de enchufes y llaves de encendido',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid14.jpg',
    'descripcion': 'Cambio de enchufes y llaves de encendido, antiguas y en mal estado, por las más modernas del mercado que cumplen con la normativa vigente',
    'precio':  800
    },
    {"id": 15,
    "categoria":'Electricidad',
    'tarea': 'Seguridad',
    'nombre': 'Instalación llaves térmmicas, disyuntores y protectores de tensión',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid15.jpg',
    'descripcion': 'Asesoramos sobre seguridad eléctrica y realizamos la instalación de los diversos elementos de protección, como llaves térmicas, disyuntores o protectores de tensión',
    'precio': 2000  
    },
    {"id": 16,
    "categoria":'Electricidad',
    'tarea': 'Reparación',
    'nombre': 'Visita técnica solución de problemas eléctricos',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid16.jpg',
    'descripcion':'Solicite la visita técnica para la solución de los problemas electricos en su vivienda o comercio. Nuestros profesionales evaluarán y solucionarán el problema.' ,
    'precio': 0
    },
    {"id": 17,
    "categoria":'Electrodomésticos',
    'tarea': 'Lavarropa',
    'nombre': 'Instalación de lavarropa',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid17.jpg',
    'descripcion': 'Instalación de lavarropas usados o nuevos.',
    'precio': 2000  
    },
    {"id": 18 ,
    "categoria":'Electrodomésticos',
    'tarea': 'Ventilador' ,
    'nombre': 'Instalación de ventilador' ,
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid18.jpg',
    'descripcion': 'Instalación de ventiladores de techo',
    'precio': 3000
    },
    {"id": 19,
    "categoria":'Electrodomésticos',
    'tarea':'Campana' ,
    'nombre': 'Instalación de campana de cocina',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid19.jpg',
    'descripcion': 'Instalación de campanas de cocina',
    'precio': 2500   
    },
    {"id": 20 ,
    "categoria":'Pintura',
    'tarea': 'Pintura Pared' ,
    'nombre': 'Pintura de pared',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid20.jpg',
    'descripcion': 'Acondicionamiento de la pared y pintura de superficie. Solicite su presupuesto.' ,
    'precio': '500 x m2'
    },
    {"id": 21,
    "categoria":'Pintura',
    'tarea': 'Pintura metálica' ,
    'nombre': 'Pintura de superficies metálicas',
    'imagen': 'https://hostimage22.000webhostapp.com/imagenes/imageid21.jpg',
    'descripcion': 'Acondicionamiento y de superficies metálicas, puertas, rejas, barandas, etc. Solicite su presupuesto.' ,
    'precio': '650 x m2'   
    },   
]

const getProducts = new Promise ((resolve, reject)=>{
   
   
   
    resolve(items)
   reject('Error');
})



export default getProducts;

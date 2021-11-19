
const items=[
    {id: '1',nombre: 'Shampoo', descripcion: 'Shampoo con extractos de algas, brinda frescura y previene la caída del cabello.',marca:'Plusbelle', precio:120, imagen:'https://jumboargentina.vteximg.com.br/arquivos/ids/640121-1000-1000/Shampoo-Plusbelle-Frescura-1-870908.jpg?v=637553922106000000'}, 
        {id: '2',nombre: 'Jabón',descripcion: 'Jabón con efecto humectante, evita el resecamiento de la piel. ', marca:'Dove', precio:90, imagen:'https://farmaciaspreviley.com.ar/wp-content/uploads/2020/10/7891150075382-768x768.jpg'}, 
        {id: '3',nombre: 'Desodorante',descripcion: 'Desodorante con con una fragancia de 48 hs de duracion, no irrita la piel.', marca:'Axe', precio:140, imagen: 'https://granjaus.com/wp-content/uploads/2020/04/axe.jpg'},
        {id: '4',nombre: 'Dentrifico',descripcion: 'Pasta de dientes para la prevención de caries y el blanqueamiento dental', marca:'Colgate', precio:170, imagen: 'https://www.vassallo.com.ar/9180-large_default/colgate-cr-natur-extr-carb-x90.jpg'}

]

const getProducts = new Promise ((resolve, reject)=>{
    resolve(items);
   reject('Error')
})



export default getProducts;

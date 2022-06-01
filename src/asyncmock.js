const products = [
     {
          id: '1',
          nombre: 'Gibson Les Paul',
          año: '2007',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Instrumentos',
          precio: 350000,
          descripcion: 'La guitarra Les Paul o guitarra Gibson Les Paul, que es su nombre oficial, es una guitarra Gibson de gama alta, que comenzó a fabricarse en la década de 1950. Su principal característica que las diferencia de otras Gibson es que su forma es inconfundible, con su mástil corto, sus dos pastillas y sus cuatro botones. ',
          img: 'https://http2.mlstatic.com/D_NQ_NP_723782-MLA46353231078_062021-W.webp'
     },
     {
          id: '2',
          nombre: 'Fender Stratocaster',
          categoria: 'Instrumentos',
          precio: 238000,
          descripcion: 'Hecho en MEX',
          img: 'https://http2.mlstatic.com/D_NQ_NP_999829-MLA47694610953_092021-W.webp'
     },
     {
          id: '3',
          nombre: 'Squier Stratocaster',
          categoria: 'Instrumentos',
          precio: 65000,
          descripcion: 'Hecho en China',
          img: 'https://http2.mlstatic.com/D_NQ_NP_888965-MLA46351892143_062021-W.webp'
     },
     {
          id: '4',
          nombre: 'Cort Action V 5',
          categoria: 'Instrumentos',
          precio: 57000,
          descripcion: 'Hecho en China',
          img: 'https://http2.mlstatic.com/D_NQ_NP_619458-MLA49877417926_052022-V.webp'
     }
]

export const getProducts = () => {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve(products)
          }, 2000)
     })
}

export const getProduct = (id) => {
     return new Promise (resolve => {
          setTimeout(() => {
               resolve(products.find(prod => prod.id === id))
          }, 2000)
     })
}

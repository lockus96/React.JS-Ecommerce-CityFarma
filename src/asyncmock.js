const products = [
     {
          id: '1',
          nombre: 'Gibson Les Paul',
          año: '2007',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Instrumentos',
          precio: 350000,
          descripcion: 'Made in USA',
          img: 'https://http2.mlstatic.com/D_NQ_NP_723782-MLA46353231078_062021-W.webp'
     },
     {
          id: '2',
          nombre: 'Fender Stratocaster',
          año: '2009',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Instrumentos',
          precio: 238000,
          descripcion: 'Hecho en MEX',
          img: 'https://http2.mlstatic.com/D_NQ_NP_999829-MLA47694610953_092021-W.webp'
     },
     {
          id: '3',
          nombre: 'Squier Stratocaster',
          año: '2012',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Instrumentos',
          precio: 65000,
          descripcion: 'Hecho en China',
          img: 'https://http2.mlstatic.com/D_NQ_NP_888965-MLA46351892143_062021-W.webp'
     },
     {
          id: '4',
          nombre: 'Cort Action V 5',
          año: '2021',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Instrumentos',
          precio: 57000,
          descripcion: 'Hecho en China',
          img: 'https://http2.mlstatic.com/D_NQ_NP_619458-MLA49877417926_052022-V.webp'
     },
     {
          id: '5',
          nombre: 'Cubase 12 Pro',
          año: '2020',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'DAW',
          precio: 1300,
          descripcion: 'Hecho en EEUU',
          img: 'https://http2.mlstatic.com/D_NQ_NP_872045-MLA49519767431_032022-W.webp'
     },
     {
          id: '6',
          nombre: 'Audio-Technica ATH-M40x',
          año: '2022',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Accesorios',
          precio: 28999,
          descripcion: 'Hecho en Japón',
          img: 'https://http2.mlstatic.com/D_NQ_NP_822527-MLA47583335665_092021-V.webp'
     },
     {
          id: '7',
          nombre: 'Pro Tools 12.5 HD',
          año: '2021',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'DAW',
          precio: 1300,
          descripcion: 'Hecho en EEUU',
          img: 'https://http2.mlstatic.com/D_NQ_NP_882126-MLA49581118613_042022-V.webp'
     },
     {
          id: '8',
          nombre: 'Cable Canon/Canon Stagg',
          año: '2021',
          estado: 'Nuevo',
          envioflash: 'disponible',
          categoria: 'Electronica',
          precio: 1500,
          descripcion: '6 metros',
          img: 'https://http2.mlstatic.com/D_NQ_NP_607188-MLA32782398485_112019-V.webp'
     },
     
]

export const getProducts = () => {
     return new Promise((resolve) => {
          setTimeout(() => {
               resolve(products)
          }, 500)
     })
}

export const getProduct = (id) => {
     return new Promise (resolve => {
          setTimeout(() => {
               resolve(products.find(prod => prod.id === id))
          }, 500)
     })
}

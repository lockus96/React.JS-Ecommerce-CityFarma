import '../styles/Articles.css'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import Articles from './Articles';
import CartContext from '../../Context/CartContext';
import LoadingScreen from '../Loading Screen/LoadingScreen';




const ArticlesContainer = () =>{

     const { articulosIniciales, articulosRecibido } = useContext(CartContext)

     const [ articles, setArticles ] = useState([]);
     const {articleId} = useParams()

     articulosRecibido(articles)
  

     useEffect(() => {

          const collectionRef = articleId 
          ? query (collection(db, 'articles'), where('categoria', '==', articleId))
          : collection(db, 'articles')
         
          getDocs(collectionRef).then(data => {
               const articles = data.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                    
               })
               setArticles(articles)
          }).catch(err => {
               console.log(err)
          })

     }, [articleId])

     console.log(articles)

  return (
     <div>
          {// eslint-disable-next-line 
               articulosIniciales == 0 ? <LoadingScreen /> : <Articles article={articles}/>
          }
          
     </div>
     )
}

export default ArticlesContainer
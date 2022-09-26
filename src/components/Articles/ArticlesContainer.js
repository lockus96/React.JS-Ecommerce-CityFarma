import '../styles/Articles.css'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Articles from './Articles';






const ArticlesContainer = () =>{


     const [ articles, setArticles ] = useState([]);
     const {articleId} = useParams()

  

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
          <Articles article={articles}/> 
     </div>
     )
}

export default ArticlesContainer
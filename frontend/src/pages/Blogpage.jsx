// import { Link } from 'react-router-dom'
import '../App.css'
import Header from '../components/ui/Header'
import Navbar from '../components/Navbar'

export default function BlogPage() {
  // this function is meant to map through an array of blog posts 
  // then linking to the blog description of the blog post
  // const array = []
  // in the jsx {
      // Array.map(
      //   (id) => (
      //     <Link key={id.id} to={`/blog/${id.name}`}>
      //       image: {id.image}
      //       name: {id.post}
      //     </Link>
      //   )
      // )
  // }
  //
  return (
    <>
      <Header />
      <Navbar />
    </>
  )
}
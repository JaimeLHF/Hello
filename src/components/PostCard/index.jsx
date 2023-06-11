import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'
import React from 'react'
import { animateScroll as scroll } from "react-scroll";

export default function PostCard({ post }) {

 
    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: 500, // Duração da animação em milissegundos
        smooth: "easeInOutQuart" // Efeito de animação (opcional)
      });
    };


  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='Imagem Capa Post' />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer} onClick={scrollToTop}>Ler</button>
      </div>
    </Link>
  )
}

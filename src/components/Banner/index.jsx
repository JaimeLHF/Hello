import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

import React from 'react'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Hello World!</h1>
                <p className={styles.paragrafo}>Hey Guys! I'm Jaime Filho, and I'm learning about Routs in React</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto Jaime Filho' />
            </div>
        </div>
    )
}

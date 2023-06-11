import styles from './Footer.module.css'
import { ReactComponent as Marca } from 'assets/marca_registrada.svg'

import React from 'react'

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <Marca />
            Desenvolvido por Alura && Jaime Hansen
        </footer>
    )
}

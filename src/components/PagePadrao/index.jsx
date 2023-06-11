import Banner from 'components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PagePadrao() {
    return (
        <main>
            <Banner />
            
            <Outlet />
        </main>
    )
}

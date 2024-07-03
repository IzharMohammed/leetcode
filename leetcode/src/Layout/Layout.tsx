import { ReactNode } from 'react'
import Navbar from '../Components/Navbar'

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>

    )
}

export default Layout
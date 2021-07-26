import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Nav } from '../components/Navigation/Nav'

const Layout: React.FC = ({children}) => {
    return (
        <>
            <Nav/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;

// const Layout: React.FC = ({children}) => {
//     return(
//     <>
//         <Header />
//         {children}
//         <Footer />
//     </>)
// }
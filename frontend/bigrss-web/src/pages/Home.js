import React from 'react'
import './Home.css';
import Search from '../components/Search';
import { Container } from "@material-ui/core";
import Footer from '../components/Footer'

function Home() {
    return (
        <Container>
            <Search />
            <Footer />
        </Container>
    )
}

export default Home

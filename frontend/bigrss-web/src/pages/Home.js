import React from 'react'
import './Home.css';
import Search from '../components/Search';
import { Container } from "@material-ui/core";

function Home() {
    return (
        <Container>
            <Search />
        </Container>
    )
}

export default Home

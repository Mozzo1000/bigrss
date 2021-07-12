import React from 'react'
import './Home.css';
import Search from '../components/Search';
import { Container, Box } from "@material-ui/core";
import Navigation from '../components/Navigation'

function Home() {
    return (
        <Container>
            <Navigation />
            <Box display="flex" direction="column" justifyContent="center" alignItems="center" minHeight="80vh">
                <Search />
            </Box>
        </Container>
    )
}

export default Home

import React from 'react'
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LockIcon from '@material-ui/icons/Lock';
import SearchIcon from '@material-ui/icons/Search';
import FeatureCard from '../components/FeatureCard';

function AboutPage() {
    return (
        <div>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About BigRSS
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A search engine that allows you to find articles and resources from RSS based websites from around the world.
            </Typography>
            <Divider />
          </Container>
          <Container maxWidth="md">
          <Grid container direction="row" spacing={4} style={{paddingTop: 50}}>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard 
                    title="Open-source" 
                    content="You can find the full source-code for BigRSS on Github" 
                    logo={<GitHubIcon fontSize="large"/>}
                    showButton={true}
                    buttonText="Source code"
                    buttonLink="https://github.com/Mozzo1000/bigrss"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard 
                    title="Transparency" 
                    content="" 
                    logo={<SearchIcon fontSize="large"/>}    
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FeatureCard 
                    title="Privacy" 
                    content="We do not track or store any of your searches or private information." 
                    logo={<LockIcon fontSize="large"/>} 
                    showButton={true}
                    buttonText="Privacy Policy"
                    buttonLink="/"
                />
              </Grid>
          </Grid>
        </Container>
        </div>
    )
}

export default AboutPage

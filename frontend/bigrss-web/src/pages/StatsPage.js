import React from 'react'
import { Grid, Container, Card, CardContent, Typography, CircularProgress } from "@material-ui/core";
import Navigation from '../components/Navigation'
import useStats from "../useStats"

function StatsPage() {
    const {data} = useStats();

    return (
        <Container>
            <Navigation />
            <h1 style={{textAlign: 'center'}}>Statistics</h1>
            {data ? (
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" color="textPrimary" align="center">Feeds</Typography>
                            <Typography variant="body1" color="textSecondary" align="center">{data?.feeds}</Typography>                                               
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" color="textPrimary" align="center">Entries</Typography>
                            <Typography variant="body1" color="textSecondary" align="center">{data?.entries}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            ) : (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                </div>
            )};
        </Container>
    )
}

export default StatsPage

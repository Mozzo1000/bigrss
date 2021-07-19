import React from 'react'
import { Grid, Container, Card, CardContent, Typography, CircularProgress } from "@material-ui/core";
import useStats from "../useStats"

function StatsPage() {
    const {data} = useStats();

    return (
        <Container maxWidth="md">
            <h1 style={{textAlign: 'center'}}>Statistics</h1>
            {data ? (
            <Grid container direction="row" spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" color="textPrimary" align="center">Feeds</Typography>
                            <Typography variant="body1" color="textSecondary" align="center">{data?.feeds}</Typography>                                               
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
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
            )}
        </Container>
    )
}

export default StatsPage

import React from 'react'
import { Typography, Button, Card, CardContent, CardActions } from "@material-ui/core";
import './FeatureCard.css';

function FeatureCard(props) {
    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom align="center">{props.logo}</Typography>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography>
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                {props.showButton && (
                <Button size="small" color="primary" href={props.buttonLink} variant="outlined">
                    {props.buttonText}
                </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default FeatureCard

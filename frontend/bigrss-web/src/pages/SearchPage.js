import React from 'react'
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useSearch from "../useSearch"
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { Grid, Container, Card, CardContent, Typography, Hidden } from "@material-ui/core";

function SearchPage() {
    // eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue();
    const {data} = useSearch(term);

    return (
        <div>
            <div className="search-page-header">
            <Grid container spacing={3} direction="row" justifyContent="center" alignItems="baseline">
                <Hidden smDown>
                    <Grid item>
                        <Link to="/"><h2>BigRSS</h2></Link>
                    </Grid>
                </Hidden>
                <Grid item>
                    <Search minimize />
                </Grid>
            </Grid>
            </div>
            {!term && (
                <Typography align="center">There doesn't seem to be anything here.. try using the search bar above!</Typography>
            )}
            { term && (
                <Container>
                    <Card style={{ border: "none", boxShadow: "none" }}>
                        <CardContent>
                            <Typography variant="subtitle2" component="p">
                                About {data?.length} results for{" "} <strong>{term}</strong>
                            </Typography>
                    </CardContent>
                    </Card>
                    {data?.map((item) =>(
                        <Card style={{ border: "none", boxShadow: "none" }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    <a className="search-page-result-link" href={item.url}>
                                        {new URL(item.url).hostname}
                                    </a>
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    <a href={item.url}>
                                        {item.title}
                                    </a>
                                </Typography>
                                <Typography color="textSecondary">
                                    {String(item.published).split("T")[0]}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {String(item.description).substring(0, 240)}...
                                </Typography>
                            </CardContent>
                        </Card>

                        
                    ))}
                </Container>
            )}
        </div>
    )
}

export default SearchPage

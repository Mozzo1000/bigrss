import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import Navigation from '../components/Navigation'
import '../components/Search.css';

function AddFeedPage() {
    const [feed, setFeed] = useState("");
    const [feedMessage, setFeedMessage] = useState("")
    

    const postData = async (feed_url) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({url: feed_url})
        };
        fetch(
          `/v1/feed`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setFeedMessage(result);
          });
      };

    const AddFeed = (e) => {
        e.preventDefault();
        postData(feed);
    }

    return (
        <Container>
            <Navigation />
            <form className="search">
                <div className="search-input">
                    <input value={feed} onChange={(e) => setFeed(e.target.value)}/>
                </div>
                <div className="search-buttons">
                    <Button variant="outlined" type="submit" onClick={AddFeed}>Add feed</Button>
                </div>
            </form>
            <p>{feedMessage}</p>
        </Container>
    )
}

export default AddFeedPage

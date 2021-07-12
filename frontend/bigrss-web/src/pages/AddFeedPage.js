import React, { useState } from "react";
import { Container, Button, Snackbar } from "@material-ui/core";
import Navigation from '../components/Navigation'
import '../components/Search.css';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
function AddFeedPage() {
    const [feed, setFeed] = useState("");
    const [feedMessage, setFeedMessage] = useState("")
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
    };

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
        setOpenSnackbar(true);
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
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    {feedMessage}
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default AddFeedPage

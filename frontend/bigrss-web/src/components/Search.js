import React, { useState } from "react";
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function Search({ minimize = false }) {
    // eslint-disable-next-line
    const [{}, dispatch] = useStateValue();
    const history = useHistory();
    const [term, setTerm] = useState("");

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });
      
        history.push('/search')
    }


    return (
        <form className="search">
            {!minimize && (
                <h1 style={{textAlign: 'center'}}>BigRSS</h1>
            )}
            <div className="search-input">
                <SearchIcon className="search-input-icon" />
                <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            </div>
            {!minimize ? (
                <div className="search-buttons">
                    <Button variant="outlined" type="submit" onClick={search}>Search</Button>
                </div>
            ) : (
                <div className="search-buttons">
                    <Button className="search-buttons-hidden" variant="outlined" type="submit" onClick={search}>Search</Button>
                </div>
            )}
        </form>
    )
}

export default Search

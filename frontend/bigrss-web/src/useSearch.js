import { useState, useEffect } from "react";

const useSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `/v1/search/${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};
export default useSearch;

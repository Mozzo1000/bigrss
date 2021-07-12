import { useState, useEffect } from "react";

const useStats = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `/v1/stats`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  });

  return { data };
};
export default useStats;

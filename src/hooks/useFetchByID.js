import { useState, useEffect } from "react";

export const useFetchByID = (id) => {
  const [buildingID, setBuildingID] = useState(null);
  const [isPending, setIsPedending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPedending(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/building/${id}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsPedending(false);
        setBuildingID(json.building);
        setError(null);      
      } catch (error) {
        setError(error);
        setIsPedending(false);
      }
    };
    fetchData();
  }, [id]);

  return {
    buildingID,
    isPending,
    error,
  };
};

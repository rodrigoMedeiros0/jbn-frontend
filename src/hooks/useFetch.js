import { useState, useEffect } from "react";

export const useFetch = () => {
  const [allBuildings, setAllBuildings] = useState(null);
  const [isPending, setIsPedending] = useState(false);
  const [error, setError] = useState(null);

  const [allBuildingReady, setAllBuildingReady] = useState(null);
  const [allBuildingConstruction, setAllBuildingConstruction] = useState(null);
  const [allBuildingRunning, setAllBuildingRunning] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPedending(true);

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/building/`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsPedending(false);
        setAllBuildings(json);
        setError(null);

        setAllBuildingReady(
          json.filter((element) => element.status === "Concluído")
        );

        setAllBuildingConstruction(
          json.filter((element) => element.status === "Em construção")
        );

        setAllBuildingRunning(
          json.filter((element) => element.status === "Em execução")
        );

      } catch (error) {
        setError(error);
        setIsPedending(false);
      }
    };
    fetchData();
  }, []);

  return {
    allBuildings,
    isPending,
    error,
    allBuildingReady,
    allBuildingConstruction,
    allBuildingRunning,
  };
};

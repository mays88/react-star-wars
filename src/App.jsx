import { useEffect, useState } from "react";
import "./App.css";
import { getAllStarShips } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard/StarShipCard";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllStarShips();
                console.log(result);
                setData(result.results);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }
    // console.log(data);
    return (
        <>
            <h1>STAR WARS STARSHIPS</h1>
            <div className="container">
                {data.map((starship) => {
                    return (
                        <StarShipCard key={Math.random() * 100 + 1}>
                            {starship.name}
                        </StarShipCard>
                    );
                })}
            </div>
        </>
    );
}

export default App;

import axios from "axios";

export async function getAllStarShips() {
    try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        console.log(response.data);

        // const data = await response.json();
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

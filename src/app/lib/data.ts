import axios from 'axios';

export async function fetchData () {
    try {
        const response = await axios.get('http://localhost:3000/api');
        const data = response.data;
        console.log("🚀 ~ file: data.ts:7 ~ fetchData ~ data:", data)
        return data

      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

fetchData()
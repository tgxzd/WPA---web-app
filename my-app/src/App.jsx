import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/data`;
    console.log("Fetching data from:", url);

    fetch(url)
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  

  return (
    <div>
      <h1>{data.message}</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
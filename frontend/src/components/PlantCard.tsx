import { useEffect, useState } from 'react';
import { Result } from '../types/result';

const PlantCard = () => {
  const [plant, setPlant] = useState<Result | null>(null);
  const [error, setError] = useState<string>('');

  const fetchRandomPlant = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/random');
      if (!response.ok) {
        throw new Error('Failed to fetch plant');
      }
      const data = await response.json();
      setPlant(data);
    } catch (err) {
      setError('Failed to load plant data');
      console.error('Error fetching plant:', err);
    }
  };

  useEffect(() => {
    // Fetch initial plant
    fetchRandomPlant();
    // Set up interval for fetching new plants
    const interval = setInterval(fetchRandomPlant, 6000);
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (error || !plant) {
    return (
      <div className="rounded-sm border bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <p className="text-red-500">Valami rosszul sült el...</p>
      </div>
    );
  }

  return (
    <div className="rounded-sm border bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <img
        src={plant.img_url ? plant.img_url : ''}
        alt={plant.name}
        className="w-full h-48 object-cover rounded-sm mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{plant.name}</h2>
      <p className="mb-4">Tudományos név: {plant.sci_name}</p>
      <a
        href={`/plants/${plant._id}`}
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        Kattints ide, hogy többet megtudj róla!
      </a>
    </div>
  );
};

export default PlantCard;

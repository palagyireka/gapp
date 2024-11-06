import React, { ReactNode } from 'react';

interface PlantCardProps {
  name: string;
  origin: string;
  img_src: string;
  id: string;
  children?: ReactNode;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, origin, img_src, id }) => {
  return (
    <div className="rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <img src={img_src} alt={name} />
      <h2>{name}</h2>
      <p>Származási hely: {origin}</p>
      <a href={`/plants/${id}`}>Kattints ide, hogy többet megtudj róla!</a>
    </div>
  );
};

export default PlantCard;

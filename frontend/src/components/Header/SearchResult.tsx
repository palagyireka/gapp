import React from 'react';
import { Result } from '../../types/result';
interface PlantCardProps {
  data: Result;
}

const PlantCard: React.FC<PlantCardProps> = ({ data }) => {
  return (
    <div className="rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <img src="" alt="" />
      <h3>{data.name}</h3>
      <h4>
        <a href={data.url}>Wiki</a>
      </h4>
      <p>Tudományos név: {data.sci_name}</p>
      <a href={`/plants/`}>Kattints ide, hogy többet megtudj róla!</a>
    </div>
  );
};

export default PlantCard;

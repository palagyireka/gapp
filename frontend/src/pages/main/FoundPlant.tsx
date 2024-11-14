import React from 'react';
import { useLocation } from 'react-router-dom';

const FoundPlant: React.FC = () => {
  const location = useLocation();
  const plantData = location.state.plantData ?? null;
  return (
    <>
      <div className="text-lg rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-9">
        <h3>{plantData.name}</h3>
        <h2>{plantData.sci_name}</h2>
        <div>
          {plantData.img_src_array.map((img: string) => {
            return (
              <>
                <img src={img} alt={plantData.name} />
              </>
            );
          })}
        </div>
        <p>{plantData.desc}</p>
        <p>
          <a href={plantData.url}>Forrás</a>
        </p>
      </div>
    </>
  );
};

export default FoundPlant;

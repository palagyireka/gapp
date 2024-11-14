import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../types/result';

interface SearchResultProps {
  data: Result;
  restoreSearch: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ data, restoreSearch }) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    restoreSearch(event);
    navigate('/found-plant', { state: { plantData: data } });
  };
  return (
    <div className="rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <img src={data.img_src_array[0]} alt={data.name} />
      <h3>{data.name}</h3>
      <h4>
        <a href={data.url}>Forrás</a>
      </h4>
      <p>Tudományos név: {data.sci_name}</p>
      <a href={`/found-plant`} onClick={handleClick}>
        Kattints ide, hogy többet megtudj róla!
      </a>
    </div>
  );
};

export default SearchResult;

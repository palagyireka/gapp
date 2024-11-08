import Filter from '../Forms/SelectGroup/Filter';

const SearchFilters = () => {
  return (
    <>
      <div className="text-lg rounded-sm border  bg-white py-3 px-4 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <p>Keresés szűrők</p>
        <div className="flex justify-around">
          <p>Típus</p>
          <p>Alkategória</p>
          <p></p>
        </div>
        <div className="flex">
          <Filter
            options={['Zöldség', 'Gyümölcs', 'Szobanövény', 'Haszonnövény']}
          />
          <Filter options={['kar', 'lab', 'arm']} />
          <Filter options={['kar', 'lab', 'arm']} />
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

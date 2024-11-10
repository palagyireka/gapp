import Filter from '../Forms/SelectGroup/Filter';

interface SearchFiltersProps {
  onFilterChange: (filter: string) => void;
  hide: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchFilters = ({ onFilterChange, hide }) => {
  return (
    <>
      <div className="text-lg rounded-sm border  bg-white py-3 px-4 shadow-default dark:border-strokedark dark:bg-boxdark ">
        <p>Keresés szűrők</p>
        <div className="flex">
          <Filter
            options={[
              ['Zöldség', 'veggie'],
              ['Gyümölcs', 'fruit'],
              ['Szobanövény', 'room'],
              ['Haszonnövény', 'useful'],
            ]}
            onSelectionChange={onFilterChange}
          />
          <button
            onClick={hide}
            className="ml-30 w-65 relative inline-flex items-center justify-center p-0.5 mb-5.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from bg-meta-4 group-hover:bg-meta-4 dark:text-white dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            <span className=" relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-boxdark rounded-md group-hover:bg-opacity-0">
              Keresés visszaállítása
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import SearchFilters from './SearchFilters';
import LogoIcon from '../../images/logo/logo-icon.svg';
import { Result } from '../../types/result';

interface HeaderProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  onFetchedSearch: (results: Result[]) => void;
  restoreSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = ({
  sidebarOpen,
  setSidebarOpen,
  onFetchedSearch,
  restoreSearch,
}) => {
  const [filterValue, setFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  // const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    console.log('Selected filter:', filter);
  };

  const searchIntro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowFilters(e.target.value.length > 0);
  };
  const handleSearchClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Make the API request with the search query
      const response = await fetch(
        `http://localhost:4000/api/search?q=${searchTerm}&f=${filterValue}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json(); // Parse the JSON response
      console.log(
        'Visszajött a json válasz, onFetchedSearch függvény beállítja a választ az értékének.',
      );
      onFetchedSearch(data);
    } catch (error) {
      console.error('Error fetching search data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none h-fit">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* Logó és hambimenü mobilra */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN for mobile --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block flex-grow basis-[60%] mr-10">
          <form>
            <div className="relative  shadow-default border dark:border-strokedark dark:bg-boxdark p-2">
              <input
                type="text"
                placeholder="Keress rá bármilyen növényre..."
                className="text-lg w-full bg-transparent pl-1 pr-4 text-black focus:outline-none dark:text-white xl:w-125 mb-2 "
                onChange={searchIntro}
                value={searchTerm}
              />

              {/* Search button */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 flex"
                type="submit"
                onClick={handleSearchClick}
              >
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary mr-3"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </form>
          {showFilters && (
            <div className="mt-2 w-full">
              <SearchFilters
                hide={(e) => {
                  setSearchTerm('');
                  setShowFilters(false);
                  restoreSearch(e);
                }}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}
        </div>

        <div className="flex items-start">
          <ul className="flex items-start">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

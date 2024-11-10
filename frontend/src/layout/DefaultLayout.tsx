import React, { useState, ReactNode } from 'react';
import Header from '../components/Header/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchResult from '../components/Header/SearchResult';
import { Result } from '../types/result';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchResults, setResults] = useState<any[]>();
  const clearResultsPage = () => {
    setResults([]); // Clears searchResults in the parent component
  };
  const loadResults = (results: Result[]) => {
    console.log('DefaultLayout triggerelődött, betöltenek az eredmények.');
    setResults(results);
  };
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onMenuItemClick={clearResultsPage}
        />
        {/* <!-- ===== Sidebar End ===== --> */}
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            onFetchedSearch={loadResults}
            restoreSearch={() => {
              setResults([]);
            }}
          />
          {/* <!-- ===== Header End ===== --> */}
          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {searchResults && searchResults.length > 0 ? (
                <div>
                  <h2>Search Results</h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                    {searchResults.map((result) => (
                      <SearchResult data={result} />
                    ))}
                  </div>
                </div>
              ) : (
                children // This will render About.tsx or any other default content
              )}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;

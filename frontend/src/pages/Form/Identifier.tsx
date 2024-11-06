import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="Növényhatározó" />
      <div className="text-lg rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-9">
        <p>
          Az alábbi oldalon kép alapján a GAPP segít meghatározni, hogy milyen
          növényt találtál, néztél ki magadnak, vagy esetleg kaptál valakitől.
        </p>
        <p>
          Ezen kívül számos preferenciát, plusz információt is beállíthatsz.
          Minden opciónak van egy alapértelmezett beállítása, de ajánlott kézzel
          beállítani őket a hatékonyabb azonosítás érdekében.
        </p>
      </div>
      <form action="" method="post">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          {/* <!-- File upload --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="text-lg font-medium text-black dark:text-white">
                Kép feltöltése
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Lehetőleg minél jobb felbontású, jó fényviszonyok közt készült
                  képet/képeket tölts fel! Háromnál többet feltölteni nem
                  ajánlott.
                </label>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  multiple
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          {/* <!-- Toggle switch input --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="text-lg font-medium text-black dark:text-white">
                Azonosítást segítő beállítások
              </h3>
            </div>
            <div className="flex flex-row gap-20 p-6.5">
              <div>
                <CheckboxTwo id="evergreen" label="Örökzöld" checked={false} />
                <CheckboxTwo
                  id="houseplant"
                  label="Szobanövény"
                  checked={false}
                />
                <CheckboxTwo
                  id="gardenplant"
                  label="Kerti növény"
                  checked={false}
                />
                <CheckboxTwo
                  id="aquaticplant"
                  label="Vizi növény"
                  checked={false}
                />
              </div>
              <div>
                <CheckboxTwo id="herb" label="Fűszernövény" checked={false} />
                <CheckboxTwo id="tree" label="Fa" checked={false} />
                <CheckboxTwo id="fruit" label="Gyümölcs" checked={false} />
                <CheckboxTwo id="vegetable" label="Zöldség" checked={false} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            {/* <!-- Time and date --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Mikor fotóztad a növényt?
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                Főleg az évszakok váltakozása miatt számít.
                <DatePickerOne />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            {/* <!-- Select input --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Hol fotóztad pontosan?
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <SelectGroupTwo />
              </div>
            </div>
          </div>
          <div className="flex gap-9 ">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from bg-meta-4 group-hover:bg-meta-4 dark:text-white dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              type="submit"
            >
              <span className="text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-boxdark rounded-md group-hover:bg-opacity-0">
                Azonosítás indítása
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormElements;

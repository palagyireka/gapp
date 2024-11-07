import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import CheckboxTwo from '../../../components/Checkboxes/CheckboxTwo';
import DatePickerOne from '../../../components/Forms/DatePicker/DatePickerOne';
import SelectGroupTwo from '../../../components/Forms/SelectGroup/SelectGroupTwo';

const Identifier = () => {
  const navigate = useNavigate(); // Hook to navigate to another page
  const [loading, setLoading] = useState(false);

  const [base64Images, setBase64Images] = useState<string[]>([]); // Initialize an array to hold multiple base64 strings

  // Right after the upload of an image, the function converts it into a Base64 String and stores it in base64Images.
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Loop over all selected files
      const newBase64Images: string[] = []; // Temporary array to hold new base64 strings

      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result as string;
          newBase64Images.push(base64String);

          // Once all files are read, update the state
          if (newBase64Images.length === files.length) {
            setBase64Images((prevImages) => [
              ...prevImages,
              ...newBase64Images,
            ]);
          }
        };

        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };

        reader.readAsDataURL(file); // Initiates the base64 encoding
      });
    }
  };

  // Handles form submission, it sends an api req to plant.id to get the relevant information.
  const handleApiReq = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const apiKey = import.meta.env.VITE_IDENTIFICATION_API_KEY;
    const details =
      'common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,edible_parts,watering,propagation_methods';

    try {
      setLoading(true);
      const response = await fetch(
        `https://plant.id/api/v3/identification?details=${details}&language=hu`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Api-Key': `${apiKey}`,
          },
          body: JSON.stringify({
            images: base64Images,
            latitude: 49.207,
            longitude: 16.608,
            similar_images: true,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      navigate('/forms/identifier/result', { state: { plantData: data } });
    } catch (error) {
      console.log(`API Request failed`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Növényhatározó" />
      <div className="text-lg rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-9">
        <p>
          Az alábbi oldalon kép alapján a GAPP segít meghatározni, hogy milyen
          növényt találtál, néztél ki magadnak, vagy esetleg kaptál valakitől.
        </p>
        <p>
          Ezen kívül számos preferenciát, plusz információt is beállíthatsz a
          hatékonyabb azonosítás érdekében.
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
                  ajánlott. A képformátum .jpg vagy .png legyen.
                </label>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleFileUpload}
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
              onClick={handleApiReq}
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

export default Identifier;

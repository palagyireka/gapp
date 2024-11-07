// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DiseasePicker from '../../../components/Forms/SelectGroup/DiseasePicker';

const PlantDoctor = () => {
  const navigate = useNavigate(); // Hook to navigate to another page
  const [loading, setLoading] = useState(false);
  const [whichOne, setWhichOne] = useState('');
  const [isSelected, setIsSelected] = useState(false); // Track if a value is selected
  const [base64Images, setBase64Images] = useState<string[]>([]); // Initialize an array to hold multiple base64 strings

  const handleDiseaseSelection = (selected: string) => {
    setWhichOne(selected);
    console.log(
      `Kiválasztott probléma ${selected} és ${selected === 'insect'}`,
    );
    setIsSelected(true);
  };
  React.useEffect(() => {
    console.log(`Updated whichOne: ${whichOne} és ${whichOne === 'insect'}`);
  }, [whichOne]);

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

    const apiKey =
      whichOne === 'insect'
        ? import.meta.env.VITE_INSECT_API_KEY
        : import.meta.env.VITE_HEALTH_API_KEY;
    const baseUrl =
      whichOne === 'insect'
        ? `https://insect.kindwise.com/api/v1/identification?`
        : `https://crop.kindwise.com/api/v1/identification?`;
    const details =
      whichOne === 'insect'
        ? 'common_names,url,description,image,synonyms,danger,danger_description,role' // Rovar
        : 'common_names,url,description,edibility,image,wiki_description,wiki_url,symptoms,treatment'; // Betegség

    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}?details=${details}`, {
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
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (whichOne === 'insect') {
        navigate('/forms/plant-doctor/result/insect', {
          state: { plantData: data },
        });
      } else {
        navigate('/forms/plant-doctor/result/health', {
          state: { plantData: data },
        });
      }
    } catch (error) {
      console.log(`API Request failed`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Növénydoktor - mi baja lehet a növényemnek?" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="text-lg rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-9">
              <p>
                Az alábbi oldalon kép alapján a GAPP segít kitalálni, hogy
                milyen problémája lehet a növényednek.
              </p>
              <p>
                Kérlek, első körben válassz, hogy egy kártevő rovarra gyanakszol
                vagy valami másra (gombás, vírusos megbetegedés, tápanyaghiány)!
              </p>
              <p>
                A kártevő rovar opció képes felismerni nem kártevő, akár
                jótékony ízeltlábúakat is, ezért nyugodtan használd akkor is, ha
                bizonytalan vagy, hogy kártékony-e, amit látsz.
              </p>
            </div>
            <div className="flex justify-around px-6 pb-6">
              <DiseasePicker onSelectionChange={handleDiseaseSelection} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Képfeltöltés
              </h3>
            </div>
            <form action="#">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row p-6">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Lehetőleg minél jobb felbontású, jó fényviszonyok közt
                    készült képet/képeket tölts fel! Háromnál többet feltölteni
                    nem ajánlott. A képformátum .jpg vagy .png legyen.
                  </label>
                  <input
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    capture="environment"
                    onChange={handleFileUpload}
                    multiple
                    disabled={!isSelected}
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex gap-9 mx-9 mb-4">
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from bg-meta-4 group-hover:bg-meta-4 dark:text-white dark:hover:text-black focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  type="submit"
                  onClick={handleApiReq}
                  disabled={!isSelected}
                >
                  <span className="text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-boxdark rounded-md group-hover:bg-opacity-0">
                    Azonosítás indítása
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantDoctor;

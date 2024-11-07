import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import Probability from '../../../components/Forms/Probability';
import EdibleParts from '../../../components/Forms/EdibleParts/EdibleParts';
import { useLocation } from 'react-router-dom';

const InsectResult = () => {
  const location = useLocation();
  const plantData = location.state.plantData ?? null;
  console.log(plantData);
  const mockData = JSON.stringify({
    access_token: '5HzJDLS7RjxD9J7',
    model_version: 'insect_id:2.0.0',
    custom_id: null,
    input: {
      latitude: 49.207,
      longitude: 16.608,
      similar_images: true,
      images: [
        'https://insect.kindwise.com/media/images/b37465984c8f4a1a98e39c559fe1c7c4.jpg',
      ],
      datetime: '2024-11-07T22:04:34.604413+00:00',
    },
    result: {
      classification: {
        suggestions: [
          {
            id: '7689073a3b7396ae',
            name: 'Aphis aurantii',
            probability: 0.9871,
            similar_images: [
              {
                id: 'fc7568d24972e75f2f1cd821ac6d908456cdf7ba',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/fc7/568d24972e75f2f1cd821ac6d908456cdf7ba.jpg',
                license_name: 'CC0',
                license_url:
                  'https://creativecommons.org/publicdomain/zero/1.0/',
                citation: 'Jesse Rorabaugh',
                similarity: 0.605,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/fc7/568d24972e75f2f1cd821ac6d908456cdf7ba.small.jpg',
              },
              {
                id: '00bcda5e9ef30363ad2e6cca0602ff30ac510e15',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/00b/cda5e9ef30363ad2e6cca0602ff30ac510e15.jpg',
                license_name: 'CC0',
                license_url:
                  'https://creativecommons.org/publicdomain/zero/1.0/',
                citation: 'Jesse Rorabaugh',
                similarity: 0.594,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/00b/cda5e9ef30363ad2e6cca0602ff30ac510e15.small.jpg',
              },
            ],
            details: {
              language: 'hu',
              entity_id: '7689073a3b7396ae',
            },
          },
        ],
      },
      is_insect: {
        probability: 0.8107244,
        threshold: 0.5,
        binary: true,
      },
    },
    status: 'COMPLETED',
    sla_compliant_client: true,
    sla_compliant_system: true,
    created: 1731017074.604413,
    completed: 1731017074.858219,
  });
  const convertedData = JSON.parse(mockData);
  const insectArray = convertedData.result.classification.suggestions;

  return (
    <>
      <Breadcrumb pageName="Beazonosított rovar" />
      <div className="grid grid-cols-6 gap-9 sm:grid-cols-6">
        <div className="col-span-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-lg font-medium text-black dark:text-white">
              {`${insectArray[0].name.toUpperCase()}`}
            </h3>
          </div>
          <div className="text-lg flex flex-col gap-5.5 p-6.5">
            <div></div>
            <div>
              <p>A feltöltött képed:</p>
              <img
                src={convertedData.input.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <Probability percentage={insectArray[0].probability * 100} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-9 sm:grid-cols-6">
        <div className="col-span-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-lg font-medium text-black dark:text-white">
              A feltöltött képedhez hasonló képek
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="w-full grid grid-cols-2 gap-5">
              <img
                src={insectArray[0].similar_images[0].url}
                alt={insectArray[0].name}
                className="w-full h-full object-cover"
              />
              <img
                src={insectArray[0].similar_images[1].url}
                alt={insectArray[0].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsectResult;

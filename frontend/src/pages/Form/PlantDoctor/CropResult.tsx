import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import Probability from '../../../components/Forms/Probability';
import { useLocation } from 'react-router-dom';

const CropResult = () => {
  const location = useLocation();
  const plantData = location.state.plantData ?? null;
  console.log(plantData);
  const mockData = JSON.stringify({
    access_token: '3GGBHU7RKykcyPy',
    model_version: 'crop_health:1.1.1',
    custom_id: null,
    input: {
      latitude: 49.207,
      longitude: 16.608,
      similar_images: true,
      images: [
        'https://crop.kindwise.com/media/images/ac90a007e812474d80cb9fe0453e972d.jpg',
      ],
      datetime: '2024-11-07T21:40:08.146550+00:00',
    },
    result: {
      is_plant: {
        probability: 1,
        threshold: 0.5,
        binary: true,
      },
      disease: {
        suggestions: [
          {
            id: '332e5a8ca8b185fc',
            name: 'powdery mildew',
            probability: 0.99,
            similar_images: [
              {
                id: 'cc4c6687e7089141300370e0c8e8d80ffcfddb45',
                url: 'https://crop-health.ams3.cdn.digitaloceanspaces.com/similar_images/1/cc4/c6687e7089141300370e0c8e8d80ffcfddb45.jpg',
                license_name: 'CC BY 3.0',
                license_url: 'https://creativecommons.org/licenses/by/3.0/',
                citation:
                  'Dr. Parthasarathy Seethapathy, Amrita School of Agricultural Sciences',
                similarity: 0.834,
                url_small:
                  'https://crop-health.ams3.cdn.digitaloceanspaces.com/similar_images/1/cc4/c6687e7089141300370e0c8e8d80ffcfddb45.small.jpg',
              },
              {
                id: '2b5a99e893b1183ac44f30959bf1762ca5fe0689',
                url: 'https://crop-health.ams3.cdn.digitaloceanspaces.com/similar_images/1/2b5/a99e893b1183ac44f30959bf1762ca5fe0689.jpg',
                similarity: 0.805,
                url_small:
                  'https://crop-health.ams3.cdn.digitaloceanspaces.com/similar_images/1/2b5/a99e893b1183ac44f30959bf1762ca5fe0689.small.jpg',
              },
            ],
            details: {
              language: 'hu',
              entity_id: '332e5a8ca8b185fc',
            },
            scientific_name: 'Erysiphaceae',
          },
        ],
      },
      crop: {
        suggestions: [],
      },
    },
    status: 'COMPLETED',
    sla_compliant_client: true,
    sla_compliant_system: true,
    created: 1731015608.14655,
    completed: 1731015608.604652,
  });
  const convertedData = JSON.parse(mockData);
  const disease = convertedData.result.disease.suggestions;

  return (
    <>
      <Breadcrumb pageName="Egészségi állapot" />
      <div className="grid grid-cols-6 gap-9 sm:grid-cols-6">
        <div className="col-span-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-lg font-medium text-black dark:text-white">
              {`${disease[0].name.toUpperCase()} (${
                disease[0].scientific_name
              })`}
            </h3>
          </div>
          <div className="text-lg flex flex-col gap-5.5 p-6.5">
            <div>Leírás a betegségről</div>
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
          <Probability percentage={disease[0].probability * 100} />
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
                src={disease[0].similar_images[0].url}
                alt={disease[0].name}
                className="w-full h-full object-cover"
              />
              <img
                src={disease[0].similar_images[1].url}
                alt={disease[0].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropResult;

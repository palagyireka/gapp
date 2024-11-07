import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import Probability from '../../../components/Forms/Probability';
import EdibleParts from '../../../components/Forms/EdibleParts/EdibleParts';
import { useLocation } from 'react-router-dom';

const IdentifierResult = () => {
  const location = useLocation();
  const plantData = location.state.plantData ?? null;
  console.log(plantData);
  const mockData = JSON.stringify({
    access_token: 'TBUcxtSvOU62a6u',
    model_version: 'plant_id:4.1.2',
    custom_id: null,
    input: {
      latitude: 49.207,
      longitude: 16.608,
      similar_images: true,
      images: [
        'https://plant.id/media/imgs/613269df79ae4d8ea51c7e7627acf01d.jpg',
      ],
      datetime: '2024-11-07T15:09:26.844757+00:00',
    },
    result: {
      is_plant: {
        probability: 0.9992623,
        threshold: 0.5,
        binary: true,
      },
      classification: {
        suggestions: [
          {
            id: '62c4f6ac65e05756',
            name: 'Vitis vinifera',
            probability: 0.99,
            similar_images: [
              {
                id: '21aea3ce0fbb311a0997305471c01f2340d06371',
                url: 'https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/4/21a/ea3ce0fbb311a0997305471c01f2340d06371.jpeg',
                license_name: 'CC BY-SA 4.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/4.0/',
                citation: 'Asia Stella',
                similarity: 0.815,
                url_small:
                  'https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/4/21a/ea3ce0fbb311a0997305471c01f2340d06371.small.jpeg',
              },
              {
                id: '9235acbb1fd1613918704202a1fb8a0bd03b8bb2',
                url: 'https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/4/923/5acbb1fd1613918704202a1fb8a0bd03b8bb2.jpeg',
                license_name: 'CC BY-SA 4.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/4.0/',
                citation: '1',
                similarity: 0.725,
                url_small:
                  'https://plant-id.ams3.cdn.digitaloceanspaces.com/similar_images/4/923/5acbb1fd1613918704202a1fb8a0bd03b8bb2.small.jpeg',
              },
            ],
            details: {
              common_names: ['bortermő szőlő', 'kerti szőlő'],
              taxonomy: {
                class: 'Magnoliopsida',
                genus: 'Vitis',
                order: 'Vitales',
                family: 'Vitaceae',
                phylum: 'Tracheophyta',
                kingdom: 'Plantae',
              },
              url: 'https://hu.wikipedia.org/wiki/Bortermő_szőlő',
              gbif_id: 5372392,
              inaturalist_id: 79519,
              rank: 'species',
              description: {
                value:
                  'A bortermő szőlő (Vitis vinifera) a szőlőfélék (Vitaceae) családjának legnevezetesebb, gazdaságilag legjelentősebb faja — mint neve is mutatja, a legfontosabb szőlő, amelyből a bor készül. A legtöbb, emberi fogyasztásra alkalmas szőlő a direkt termő (Vitis Labrusca) és a kereklevelű  (Vitis Rotundifolia) fajhoz tartozik.',
                citation: 'https://hu.wikipedia.org/wiki/Bortermő_szőlő',
                license_name: 'CC BY-SA 3.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/3.0/',
              },
              synonyms: [
                'Cissus vinifera',
                'Maerklinia viridis',
                'Noachia macrophylla',
                'Palatina dichotoma',
                'Palatina dissecta',
                'Palatina macrocarpa',
                'Palatina oblonga',
                'Palatina septemloba',
                'Palatina sinuata',
                'Palatina sylvestris',
                'Palatina tilicefolia',
                'Palatina wisilocensis',
                'Schamsia ligustrica',
                'Sickleria brevicirrhata',
                'Thalesia rubrivenia',
                'Tyrtamia revoluta',
                'Vitis alexandrina',
                'Vitis apiana',
                'Vitis apiifolia',
                'Vitis apyrena',
                'Vitis cebennensis',
                'Vitis corinthiaca',
                'Vitis cylindrica',
                'Vitis densiflora',
                'Vitis farinosa',
                'Vitis guilelmi',
                'Vitis isabella',
                'Vitis labrusca',
                'Vitis laciniosa',
                'Vitis laxiflora',
                'Vitis mensarum',
                'Vitis moschata',
                'Vitis praecox',
                'Vitis saccharina',
                'Vitis silvestris',
                'Vitis sinuosa',
                'Vitis succinea',
                'Vitis tinctoria',
                'Vitis turbinata',
                'Vitis vinifera subsp. albuelis',
                'Vitis vinifera subsp. aminea',
                'Vitis vinifera subsp. apiana',
                'Vitis vinifera subsp. austriaca',
                'Vitis vinifera subsp. burgundica',
                'Vitis vinifera subsp. cathartica',
                'Vitis vinifera subsp. chenopodia',
                'Vitis vinifera subsp. clavennensis',
                'Vitis vinifera subsp. franconica',
                'Vitis vinifera subsp. italica',
                'Vitis vinifera subsp. laciniosa',
                'Vitis vinifera subsp. macrocarpa',
                'Vitis vinifera subsp. misera',
                'Vitis vinifera subsp. nicarina',
                'Vitis vinifera subsp. pendula',
                'Vitis vinifera subsp. pulverulenta',
                'Vitis vinifera subsp. pusilla',
                'Vitis vinifera subsp. rhaetica',
                'Vitis vinifera subsp. sancti-urbani',
                'Vitis vinifera subsp. sativa',
                'Vitis vinifera subsp. tinctoria',
                'Vitis vinifera subsp. tyrolensis',
                'Vitis vinifera subsp. vinifera',
                'Vitis vinifera subsp. xanthocarpa',
                'Vitis vinifera var. albuelis',
                'Vitis vinifera var. aminea',
                'Vitis vinifera var. apyrena',
                'Vitis vinifera var. austriaca',
                'Vitis vinifera var. caudata',
                'Vitis vinifera var. clavennensis',
                'Vitis vinifera var. laciniata',
                'Vitis vinifera var. laciniosa',
                'Vitis vinifera var. macrocarpa',
                'Vitis vinifera var. normalis',
                'Vitis vinifera var. pusilla',
                'Vitis vinifera var. rhaetica',
                'Vitis vinifera var. sativa',
                'Vitis vinifera var. tinctoria',
                'Vitis vinifera var. tyrolensis',
                'Vitis virgiliana',
                'Vitisaustriaca',
                'Vitisclavennensis',
                'Vitismacrocarpa',
                'Vitistinctoria',
                'Vitistyrolensis',
                'Zaehringia nobilis',
              ],
              image: {
                value:
                  'https://plant-id.ams3.cdn.digitaloceanspaces.com/knowledge_base/wikidata/497/497f1e5366d54393435ffe337ad48c1f72f57088.jpg',
                citation:
                  '//commons.wikimedia.org/wiki/File:Vitis-vinifera.JPG',
                license_name: 'CC BY 3.0',
                license_url: 'https://creativecommons.org/licenses/by/3.0/',
              },
              edible_parts: ['flowers', 'leaves', 'oil', 'fruit', 'shoots'],
              watering: {
                max: 2,
                min: 2,
              },
              propagation_methods: ['cuttings'],
              language: 'hu',
              entity_id: '62c4f6ac65e05756',
            },
          },
        ],
      },
    },
    status: 'COMPLETED',
    sla_compliant_client: true,
    sla_compliant_system: true,
    created: 1730992166.844757,
    completed: 1730992167.050493,
  });
  const convertedData = JSON.parse(mockData);
  const plantArray = convertedData.result.classification.suggestions;

  return (
    <>
      <Breadcrumb pageName="Eredmény" />
      <div className="grid grid-cols-6 gap-9 sm:grid-cols-6">
        <div className="col-span-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-lg font-medium text-black dark:text-white">
              {`${plantArray[0].details.common_names[0].toUpperCase()} (${
                plantArray[0].name
              })`}
            </h3>
          </div>
          <div className="text-lg flex flex-col gap-5.5 p-6.5">
            <div>{plantArray[0].details.description.value}</div>
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
          <Probability percentage={plantArray[0].probability * 100} />
          <EdibleParts edible_parts={plantArray[0].details.edible_parts} />
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
                src={plantArray[0].similar_images[0].url}
                alt={plantArray[0].name}
                className="w-full h-full object-cover"
              />
              <img
                src={plantArray[0].similar_images[1].url}
                alt={plantArray[0].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentifierResult;

import Flowers from './Flowers';
import Leaves from './Leaves';
import Oil from './Oil';
import Fruit from './Fruit';
import Shoots from './Shoots';
interface EdiblePartsProps {
  edible_parts: string[] | null;
}

// Egyelőre amiről tudunk, hogy lehet ehető rész: ["flowers", "leaves", "oil", "fruit", "shoots"]

const EdibleParts: React.FC<EdiblePartsProps> = ({ edible_parts }) => {
  const ediblePartsDict = {
    flowers: <Flowers />,
    leaves: <Leaves />,
    oil: <Oil />,
    fruit: <Fruit />,
    shoots: <Shoots />,
  };
  return (
    <>
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark ">
        <h3 className="text-lg font-medium text-black dark:text-white">
          Ehető részek
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 dark:bg-boxdark-2 dark:text-bodydark m-5 p-5 rounded-xl">
        {edible_parts ? (
          edible_parts.map((part, index) => (
            <div key={index} className="col-span-1">
              {ediblePartsDict[part] || null}
            </div>
          ))
        ) : (
          <div>Nem ehető</div> // You should return JSX, not just a string
        )}
      </div>
    </>
  );
};

export default EdibleParts;

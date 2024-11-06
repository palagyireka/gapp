import React from 'react';
import PlantCard from '../../components/PlantCard';

const About: React.FC = () => {
  return (
    <>
      <div className="text-lg rounded-sm border  bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark mb-9">
        <h2>Üdvözöllek a kertészkedési tippeket adó GAPP főoldalán!</h2>
        <p>
          A weboldalon számos növényfajt és a hozzájuk tartozó információkat,
          ültetési útmutatót megtalálsz.
        </p>
        <p>A GAPP projekt egy diplomamunka részeként jött létre.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <PlantCard
          name="Heirloom Paradicsom"
          origin="Dél-Amerika"
          id="123"
          img_src="https://www.honesttogoodness.com/wp-content/uploads/2020/09/Heirloom-Tomatoes.jpg.webp"
        ></PlantCard>
        <PlantCard
          name="Mustár"
          origin="Egyiptom"
          id="123"
          img_src="https://plantura.garden/uk/wp-content/uploads/sites/2/2022/03/mustard-plant.jpg"
        ></PlantCard>
        <PlantCard
          name="Brokkoli"
          origin="Európa (Mediterranean)"
          id="123"
          img_src="https://www.marthastewart.com/thmb/PDJPdCam6sdLRmalhRrbFVzI8NU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ms-growing-broccoli-getty-9edeef54075c48f89c0acc629d9e6c47.jpg"
        ></PlantCard>
      </div>
    </>
  );
};

export default About;

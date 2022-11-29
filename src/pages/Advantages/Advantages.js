import React from 'react';
import Image from '../../components/Image/Image';
import FirstImage from '../../assets/images/advantage-second.jpg';


const Advantages = () => {
  return (
    <div>
      <div>
          <img className="images" src={FirstImage} alt="sales"/>
        <p>Постоянные скидки на наши товары</p>
      </div>
      <div>
        {/*<Image src={SecondImage} alt='delivery'/>*/}
        <p>Доставка по Минску и почтовыми отделениями по всей Беларуси</p>
      </div>
      <div>
        <Image />
        <p>Наши цены вас приятно удивят</p>
      </div>
      <div>
        <Image />
        <p>Специализируемся только на лучшей сантехники из Китая</p>
      </div>
      <div>
        <Image />
        <p>Удобное расположение нашего магазина</p>
      </div>
    </div>
  );
};

export default Advantages;

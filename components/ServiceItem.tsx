import { useState } from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image';

const ServiceItem = ({ title, content } : { title: string; content: string;}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.services__list__item}>
      <div onClick={toggle} className={styles.services__list__item__heading}>
         <h3>
         {title}
         </h3>
         <Image 
            src="/icons/down-arrow.svg" 
            alt="" 
            width={15} 
            height={15}
            style={ { transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' } }
            />
      </div>
      <p className={isOpen ? styles.visible : styles.hidden}>
        {content}
      </p>
    </div>
  );
};

export default ServiceItem;
import React, { useState } from "react";
import styles from "./Ourvalue.module.css";
import { useTranslation } from "react-i18next";

// import value from ''

const OurValues = () => {
  const [selected, setSelected] = useState(1);
  console.log(selected);

  const { t } = useTranslation();
  const loremIpsum = t('loremIpsum');


  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>  {t('home.ourValues.OurVal')}</h2>
          <p>{t(`loremIpsum`)} </p>
          <ul>
            <li>{t(`home.ourValues.selectHeading1`)}</li>
            <li>{t(`home.ourValues.selectHeading2`)}</li>
            <li>{t(`home.ourValues.selectHeading3`)}</li>

          </ul>
        </div>
        <div className={styles.card}>
          <h2> {t('home.ourValues.ourVision')}</h2>
          <p>{loremIpsum.slice(0, 50)} </p>
          <ul>
            <li>
              {loremIpsum.slice(0, 70)}
            </li>
            <li>{loremIpsum.slice(0, 80)} </li>
            <li>
              {loremIpsum.slice(0, 60)}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurValues;

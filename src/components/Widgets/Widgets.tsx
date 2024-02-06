import React from 'react';
import { IWidgets } from './interfaces';
import styles from './Widgets.module.scss';
import { Paragraph } from 'components/Paragraph/Paragraph';

const Widgets: React.FC<IWidgets> = ({ header, value, Icon }) => {
  return (
    <div className={styles.widgetContainer}>
      <div className={styles.infoWrapper}>
        <Paragraph>{header}</Paragraph>
        <Paragraph className={styles.value}>{value}</Paragraph>
      </div>
      <div className={styles.iconWrapper}>{Icon}</div>
    </div>
  );
};

export default Widgets;

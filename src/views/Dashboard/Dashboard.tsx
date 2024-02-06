import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import Widgets from 'components/Widgets/Widgets';
import { BAR_GRAPH_LABELS, WIDGET_INFO } from './constants';
import { ColorPalette } from 'constants/ColorPalette';
import { IBarData } from 'components/BarGraph/interfaces';
import BarGraph from 'components/BarGraph/BarGraph';

const Dashboard: React.FC = () => {
  const [barData, setBarData] = useState<IBarData>({
    labels: BAR_GRAPH_LABELS,
    datasets: [
      {
        label: '',
        backgroundColor: '#b8adc7',
        borderColor: '#b8aaca',
        borderWidth: 1,
        hoverBackgroundColor: '#9285a5',
        hoverBorderColor: '#9181a9',
        data: []
      }
    ]
  });

  useEffect(() => {
    setBarData({
      labels: BAR_GRAPH_LABELS,
      datasets: [
        {
          label: 'Tool count',
          backgroundColor: '#b8adc7',
          borderColor: '#b8aaca',
          borderWidth: 1,
          hoverBackgroundColor: '#9285a5',
          hoverBorderColor: '#9181a9',
          data: [
            565, 359, 780, 581, 456, 555, 240, 730, 220, 610, 805, 115, 433
          ]
        }
      ]
    });
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.widgetsWrapper}>
        {WIDGET_INFO.map((info, index) => {
          return (
            <Widgets
              key={`index-${index}`}
              header={info.header}
              value={info.value}
              Icon={<info.Icon color={ColorPalette['white']} />}
            />
          );
        })}
      </div>
      <div className={styles.barGraphWrapper}>
        <BarGraph data={barData} width={1000} height={380} />
      </div>
    </div>
  );
};

export default Dashboard;

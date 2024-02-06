import React from 'react';
import styles from './Sidebar.module.scss';
import Logo from 'icons/Logo';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { NavLink } from 'react-router-dom';
import { ColorPalette } from 'constants/ColorPalette';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.companyInfo}>
        <Logo />
        <Paragraph bold>ConstructIt</Paragraph>
      </div>
      <div className={styles.menuWrapper}>
        <div className={styles.menuSubWrapper}>
          <Paragraph bold>ANALYZE</Paragraph>
          <div className={styles.menuItem}>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                color: isActive
                  ? ColorPalette['black']
                  : ColorPalette['sidebar-text']
              })}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/report"
              style={({ isActive }) => ({
                color: isActive
                  ? ColorPalette['black']
                  : ColorPalette['sidebar-text']
              })}
            >
              Report
            </NavLink>
          </div>
        </div>
        <div className={styles.menuSubWrapper}>
          <Paragraph bold>MANAGE</Paragraph>
          <div className={styles.menuItem}>
            <NavLink
              to="/teams"
              style={({ isActive }) => ({
                color: isActive
                  ? ColorPalette['black']
                  : ColorPalette['sidebar-text']
              })}
            >
              Team
            </NavLink>
            <NavLink
              to="/tools"
              style={({ isActive }) => ({
                color: isActive
                  ? ColorPalette['black']
                  : ColorPalette['sidebar-text']
              })}
            >
              Tools
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import ActionIcon from 'icons/ActionIcon';
import MaintenanceIcon from 'icons/MaintenanceIcon';
import OrderIcon from 'icons/OrderIcon';
import ToolsIcon from 'icons/ToolsIcon';

export const WIDGET_INFO = [
  {
    header: 'Total Available Tools',
    value: '10000',
    Icon: ToolsIcon
  },
  {
    header: 'Tools Under Maintenance',
    value: '600',
    Icon: MaintenanceIcon
  },
  {
    header: 'Tools Requiring Action',
    value: '200',
    Icon: ActionIcon
  },
  {
    header: 'New Orders Placed',
    value: '1000',
    Icon: OrderIcon
  }
];

export const BAR_GRAPH_LABELS = [
  'Hand ',
  'Power ',
  'Heavy Machinery',
  'Measuring and Layout ',
  'Safety Equipment',
  'Concrete ',
  'Painting and Finishing ',
  'Electrical ',
  'Plumbing ',
  'Landscaping and Outdoor',
  'Tool Storage and Organization',
  'Welding and Metalworking ',
  'Cleaning and Maintenance '
];

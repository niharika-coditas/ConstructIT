export interface IBarGraph {
  data: IBarData;
  width?: number;
  height?: number;
}

export interface IBarData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    hoverBackgroundColor: string;
    hoverBorderColor: string;
    data: number[];
  }[];
}

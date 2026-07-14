export interface LineChartProps {
  points: number[];
  width?: number;
  height?: number;
}
export function LineChart(props: LineChartProps): JSX.Element;

export interface BarChartProps {
  values: number[];
  width?: number;
  height?: number;
  barColor?: string;
}
export function BarChart(props: BarChartProps): JSX.Element;

export interface DonutSegment {
  value: number;
  color: string;
}
export interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
}
export function DonutChart(props: DonutChartProps): JSX.Element;

export const Charts: {
  LineChart: typeof LineChart;
  BarChart: typeof BarChart;
  DonutChart: typeof DonutChart;
};

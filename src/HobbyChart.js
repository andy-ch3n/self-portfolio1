import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartArea,
} from "@progress/kendo-react-charts";
import "hammerjs";
import data from "./power-distribution-data.json";
import '@progress/kendo-theme-default/dist/all.css';


export default function HobbyChart() {
  const labelContent = (e) => e.category;
//lol
  return (
    <div>
      <Chart>
        <ChartArea background="none"/>
        <ChartSeries background="#eee">
          <ChartSeriesItem
            background="#eee"
            type="donut"
            data={data}
            categoryField="kind"
            field="share"
          >
            <ChartSeriesLabels
              color="white"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend visible={false} />
      </Chart>
      ;
    </div>
  );
}

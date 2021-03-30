import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-echarts-board',
  templateUrl: './echarts-board.component.html',
  styleUrls: ['./echarts-board.component.scss']
})
export class EchartsBoardComponent implements OnInit {

  constructor() { }
  x: number = 24;
  y: number = 4;
  row: number[] = [];
  col: number[] = [];

  //[x坐标,y坐标,数量,类型]
  data1 = [
    [0, 0, 5, "直径1.2m"], [1, 0, 1, "直径1.2m"], [4, 0, 0, "直径1.2m"], [5, 0, 0, "直径1.2m"], [6, 0, 0, "直径1.2m"], [9, 0, 0, "直径1.2m"], [10, 0, 0, "直径1.2m"],
    [1, 1, 0, "直径1.2m"], [2, 1, 0, "直径1.2m"], [3, 1, 0, "直径1.2m"], [4, 1, 0, "直径1.2m"], [6, 1, 0, "直径1.2m"], [7, 1, 0, "直径1.2m"], [10, 1, 5, "直径1.2m"],
    [1, 2, 1, "直径1.2m"], [2, 2, 0, "直径1.2m"], [4, 2, 0, "直径1.2m"], [6, 2, 0, "直径1.2m"], [7, 2, 0, "直径1.2m"], [9, 2, 0, "直径1.2m"], [11, 2, 2, "直径1.2m"],
    [2, 3, 0, "直径1.2m"], [3, 3, 0, "直径1.2m"], [5, 3, 0, "直径1.2m"], [6, 3, 0, "直径1.2m"], [9, 3, 0, "直径1.2m"], [8, 1, 0, "直径1.2m"], [11, 3, 4, "直径1.2m"],
    [2, 0, 0, "直径1.6m"], [3, 0, 0, "直径1.6m"], [3, 2, 0, "直径1.6m"], [7, 3, 0, "直径1.6m"], [10, 2, 3, "直径1.6m"], [10, 3, 5, "直径1.6m"],
    [0, 1, 7, "直径1.6m"], [0, 2, 1, "直径1.6m"], [8, 2, 0, "直径1.6m"], [9, 1, 0, "直径1.6m"], [8, 3, 1, "直径1.6m"], [11, 1, 2, "直径1.6m"],
    [0, 3, 7, "直径1.8m"], [1, 3, 3, "直径1.8m"], [5, 2, 0, "直径1.8m"], [8, 0, 0, "直径1.8m"],
    [5, 1, 0, "直径1.8m"], [4, 3, 0, "直径1.8m"], [7, 0, 0, "直径1.8m"], [11, 0, 2, "直径1.8m"]
  ];

  chartOption = {
    tooltip: {
      position: 'top'
    },
    xAxis: {
      type: "category",
      data: this.row,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: this.col,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      type: 'piecewise',
      pieces: [
        {lte:"直径1.2m", gte:"直径1.2m", label:'直径1.2m', color:'red'},
        {lte:"直径1.6m", gte:"直径1.6m", label:'直径1.6m', color:'yellow'},
        {lte:"直径1.8m", gte:"直径1.8m",  label:'直径1.8m', color:'green'}
      ],
      calculable: true,
      orient: 'horizontal',
      left: 'center',
    },
    series: [
      {
        name: "Tire details",
        type: 'heatmap',
        data: this.data1.map(item =>{
          if(item[2]!=0) {
            return [item[0], item[1], item[2], item[3]]
          }else return [item[0], item[1], null, item[3]]
        }),
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
    ]
  }

  ngOnInit() {
    for(let i=1;i<=this.x;i++) this.row.push(i);
    for(let j=1;j<=this.y;j++) this.col.push(j);
  }

  testFun(event: any) {
    console.log("param", event);
  }

}

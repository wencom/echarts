import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-echarts-board',
  templateUrl: './echarts-board.component.html',
  styleUrls: ['./echarts-board.component.scss']
})
export class EchartsBoardComponent implements OnInit {

  constructor() { }

  data1 = [
    [0, 0, 5], [1, 0, 1], [4, 0, 0], [5, 0, 0], [6, 0, 0], [9, 0, 0], [10, 0, 0],
    [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [6, 1, 0], [7, 1, 0], [8, 1, 0],[10, 1, 5],
    [1, 2, 1], [2, 2, 0], [4, 2, 0], [6, 2, 0], [7, 2, 0], [9, 2, 0], [11, 2, 2],
    [2, 3, 0], [3, 3, 0], [5, 3, 0], [6, 3, 0], [9, 3, 0], [10, 3, 5], [11, 3, 4]
  ];

  data2 = [[2, 0, 0], [3, 0, 0], [3, 2, 0], [7, 3, 0], [8, 3, 1], [11, 1, 2], [0, 1, 7], [0, 2, 1], [8, 2, 0], [10, 2, 3], [9, 1, 0]];

  data3 = [[0, 3, 7], [1, 3, 3], [5, 2, 0], [8, 0, 0], [5, 1, 0], [11, 0, 2], [4, 3, 0], [7, 0, 0]];


  chartOption = {
    tooltip: {
      position: 'top'
    },
    legend: {},
    xAxis: {
      type: "category",
      data: [1,2,3,4,5,6,7,8,9,10,11,12],
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: [1,2,3,4],
      splitArea: {
        show: true
      }
    },
    series: [
      {
        name: "直径1.2m",
        type: 'heatmap',
        data: this.data1,
        //   .map(item => {
        //   return [item[0], item[1], item[2]==0?null:item[2]]
        // }),
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
      {
        name: "直径1.6m",
        type: "heatmap",
        data: this.data2,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
      {
        name: "直径1.8m",
        type: "heatmap",
        data: this.data3,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  ngOnInit() {}

  testFun(event: any) {
    console.log("param", event);
  }

}

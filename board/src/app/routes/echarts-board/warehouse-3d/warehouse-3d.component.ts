import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-3d',
  templateUrl: './warehouse-3d.component.html',
  styleUrls: ['./warehouse-3d.component.scss']
})
export class Warehouse3dComponent implements OnInit {

  constructor() { }

  x: number = 12;
  y: number = 4;
  row: number[] = [];
  col: number[] = [];

  //[x坐标,y坐标,数量,类型]
  data1 = [
    [0, 0, 9, '001'], [1, 0, 1, '001'], [4, 0, 0, '001'], [5, 0, 2, '001'], [6, 0, 0, '001'], [9, 0, 0, '001'], [10, 0, 0, '001'],
    [1, 1, 0, '001'], [2, 1, 0, '001'], [3, 1, 0, '001'], [4, 1, 0, '001'], [6, 1, 0, '001'], [7, 1, 0, '001'], [10, 1, 5, '001'],
    [1, 2, 1, '001'], [2, 2, 0, '001'], [4, 2, 0, '001'], [6, 2, 0, '001'], [7, 2, 0, '001'], [9, 2, 0, '001'], [11, 2, 2, '001'],
    [2, 3, 0, '001'], [3, 3, 0, '001'], [5, 3, 0, '001'], [6, 3, 0, '001'], [9, 3, 0, '001'], [8, 1, 0, '001'], [11, 3, 4, '001'],
    [2, 0, 0, '002'], [3, 0, 0, '002'], [3, 2, 0, '002'], [7, 3, 0, '002'], [10, 2, 3, '002'], [10, 3, 5, '002'],
    [0, 1, 7, '002'], [0, 2, 1, '002'], [8, 2, 0, '002'], [9, 1, 0, '002'], [8, 3, 1, '002'], [11, 1, 2, '002'],
    [0, 3, 7, '003'], [1, 3, 3, '003'], [5, 2, 0, '003'], [8, 0, 0, '003'],
    [5, 1, 0, '003'], [4, 3, 0, '003'], [7, 0, 0, '003'], [11, 0, 2,'003']
  ];

  //[编号,描述,颜色]
  types = [
    ['001', '直径1.2m', 'green'], ['002', '直径1.6m', 'yellow'], ['003', '直径1.8m', 'blue']
  ];

  optionScatter3D = {
    backgroundColor: '#333',
    tooltip: {},
    visualMap: {
      top: 30,    //类型标签置于坐标上方
      type: 'piecewise',
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      pieces: this.types.map(function (item) {
        return {lte: item[0], gte: item[0], label: item[1], color: item[2], symbolSize: 30 /*散点大小*/}
      }),
    },
    xAxis3D: {
      type: 'value',
      split: this.row.length,
      data: this.row,
    },
    yAxis3D: {
      type: 'value',
      splitArea: 1,
      data: [1,2]
    },
    zAxis3D: {
      type: 'value',
      splitNumber: 1,
      // data: this.col
    },
    grid3D: {
      axisLine: {
        lineStyle: { color: '#fff' }
      },
      axisPointer: {
        lineStyle: { color: '#fff' }
      },
      viewControl: {
        // autoRotate: true
      }
    },
    series: [{
      type: 'scatter3D',
      // symbol: 'rect',
      data: this.data1
    }]
  };

  ngOnInit() {
    for(let i=1;i<=this.x;i++) this.row.push(i);
    for(let j=1;j<=this.y;j++) this.col.push(j);
  }

  testFun(event: any) {
    console.log("param", event);
  }
}

import {Component, OnInit} from '@angular/core';
import 'echarts-gl/dist/echarts-gl';

@Component({
  selector: 'app-echarts-board',
  templateUrl: './echarts-board.component.html',
  styleUrls: ['./echarts-board.component.scss']
})
export class EchartsBoardComponent implements OnInit {

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

  option2D = {
    backgroundColor: '#333',
    //坐标标题
    title: {
      text: '轮胎库平面图',
      left: 'center',
      textStyle: {
        // fontSize: 70,
        color: 'rgba(255, 255, 255, 0.9)'
      }
    },
    //悬浮框
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (param: any) => {
        let source = param.value;
        return [
          '坐标: x'+(source[0]+1)+',y'+(source[1]+1),
          "类型: "+source[3],
          "数量: "+source[2]
        ].join('<br/>')
      }
    },
    //画板尺寸
    grid: {
      left: '20%',
      right: '20%'
    },
    //X轴
    xAxis: {
      type: "category",
      data: this.row,
      splitArea: {
        show: true
      },
      axisTick: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      }
    },
    //Y轴
    yAxis: {
      type: 'category',
      data: this.col,
      splitArea: {
        show: true
      },
      axisTick: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      }
    },
    //视觉映射组件, 此处作为区分类型的颜色表示
    visualMap: {
      top: 30,    //类型标签置于坐标上方
      type: 'piecewise',
      pieces: this.types.map(function (item) {
        return {lte: item[0], gte: item[0], label: item[1], color: item[2], symbolSize: 60 /*散点大小*/}
      }),
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      textStyle: {
        color: '#ccc'
      },
      // outOfRange: {
      //   color: '#555'
      // }
    },
    //系列， 绘制图形
    series: [
      {
        name: "Tire details",
        // type: 'heatmap',     //热力图系列、散点系列都可用
        type: 'scatter',
        symbol: 'rect', //散点类型，默认为圆点
        data: this.data1.map(item =>{
          if(item[2]!=0) {
            return [item[0], item[1], item[2], item[3]]
          }else return null;
        }),
        label: {
          formatter: '{@[2]}',
          show: true
        },
        itemStyle: {
          emphasis: {
            borderColor: '#333',
            borderWidth: 1
          }
        }
        // emphasis: {
        //   itemStyle: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //   },
        // },
      },
    ]
  }

  option3D = {
    backgroundColor: '#333',
    tooltip: {},
    visualMap: {
      top: 30,
      type: 'piecewise',
      pieces: this.types.map(function (item) {
        return {lte: item[0], gte: item[0], label: item[1], color: item[2]}
      }),
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      textStyle: {
        color: '#ccc'
      },
      outOfRange: {
        color: '#555'
      }
    },
    xAxis3D: {
      type: 'category',
      data: this.row,
      axisTick: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      }
    },
    yAxis3D: {
      type: 'category',
      data: this.col,
      axisTick: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      }
    },
    zAxis3D: {
      name: "amount",
      type: 'value',
      axisTick: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#ddd'
        }
      }
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      boxHeight: 100,
      width: '100%',
      height: '100%',
      environment: 'auto',
      light: {
        main: {
          intensity: 1.2
        },
        ambient: {
          intensity: 0.3
        },
      }
    },
    series: [{
      name: "Tire details",
      type: 'bar3D',
      data: this.data1.map(function (item) {
        return {
          value: [item[0], item[1], item[2], item[3]]
        }
      }),
      shading: 'color',
      label: {
        show: false,
        fontSize: 16,
        borderWidth: 1
      },
      itemStyle: {
        opacity: 0.4
      },
      emphasis: {
        label: {
          fontSize: 20,
          color: '#900'
        },
        itemStyle: {
          color: 'red'
        }
      }
    }]
  }

  occupancy = {
    backgroundColor: '#333',
    series: [{
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 40
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [{
        value: 20,
        name: 'Perfect',
        title: {
          offsetCenter: ['0%', '-40%']
        },
        detail: {
          offsetCenter: ['0%', '-20%']
        }
      },
        {
          value: 40,
          name: 'Good',
          title: {
            offsetCenter: ['0%', '0%']
          },
          detail: {
            offsetCenter: ['0%', '10%']
          }
        },
        {
          value: 60,
          name: 'Commonly',
          title: {
            offsetCenter: ['0%', '30%']
          },
          detail: {
            offsetCenter: ['0%', '40%']
          }
        }
      ],
      title: {
        fontSize: 14
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'auto',
        borderColor: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesRoutingModule } from './routes-routing.module';
import { NgxEchartsModule } from "ngx-echarts";
import {NzButtonModule} from "ng-zorro-antd/button";
import {EchartsBoardModule} from "./echarts-board/echarts-board.module";

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule,
    EchartsBoardModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NzButtonModule
  ]
})
export class RoutesModule { }

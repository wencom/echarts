import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { EchartsBoardComponent } from './echarts-board/echarts-board.component';
import { NgxEchartsModule } from "ngx-echarts";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [EchartsBoardComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NzButtonModule
  ]
})
export class RoutesModule { }

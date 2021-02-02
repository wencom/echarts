import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { EchartsBoardComponent } from './echarts-board/echarts-board.component';
import { NgxEchartsModule } from "ngx-echarts";


@NgModule({
  declarations: [EchartsBoardComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    NgxEchartsModule
  ]
})
export class RoutesModule { }

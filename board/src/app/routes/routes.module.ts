import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { EchartsBoardComponent } from './echarts-board/echarts-board.component';


@NgModule({
  declarations: [EchartsBoardComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }

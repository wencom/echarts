import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartsBoardRoutingModule } from './echarts-board-routing.module';
import { Warehouse2dComponent } from './warehouse-2d/warehouse-2d.component';
import { Warehouse3dComponent } from './warehouse-3d/warehouse-3d.component';
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [Warehouse2dComponent, Warehouse3dComponent],
  imports: [
    CommonModule,
    EchartsBoardRoutingModule,
    NgxEchartsModule
  ]
})
export class EchartsBoardModule { }

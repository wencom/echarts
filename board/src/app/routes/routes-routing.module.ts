import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EchartsBoardComponent} from "./echarts-board/echarts-board.component";

const routes: Routes = [
  {path: 'board', component: EchartsBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }

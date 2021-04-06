import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Warehouse2dComponent} from "./warehouse-2d/warehouse-2d.component";
import {Warehouse3dComponent} from "./warehouse-3d/warehouse-3d.component";

const routes: Routes = [
  {path: "warehouse/2d", component: Warehouse2dComponent},
  {path: "warehouse/3d", component: Warehouse3dComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsBoardRoutingModule { }

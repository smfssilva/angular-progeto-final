import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculadoraRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

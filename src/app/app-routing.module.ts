import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { YogaDashboardComponent } from './components/yoga-dashboard/yoga-dashboard.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "dashboard", component: YogaDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

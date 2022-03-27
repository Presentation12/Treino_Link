import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FuncionarioComponent} from './funcionario/funcionario.component';
import {DepartamentoComponent} from './departamento/departamento.component';

const routes: Routes = [
  {path:'funcionario', component:FuncionarioComponent},
  {path:'departamento', component:DepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

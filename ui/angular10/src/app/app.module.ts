import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { ShowDepComponent } from './departamento/show-dep/show-dep.component';
import { AddEditDepComponent } from './departamento/add-edit-dep/add-edit-dep.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { AddEditFuncComponent } from './funcionario/add-edit-func/add-edit-func.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowFuncComponent } from './funcionario/show-func/show-func.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    ShowDepComponent,
    AddEditDepComponent,
    FuncionarioComponent,
    AddEditFuncComponent,
    ShowFuncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

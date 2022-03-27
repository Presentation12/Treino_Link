import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";
  readonly FotoUrl="http://localhost:5000/fotos";

  constructor(private http:HttpClient) { }

  //DEPARTAMENTO
  getDepList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Departamento');
  }

  addDepartment(val:any)
  {
    return this.http.post<any>(this.APIUrl+'/Departamento', val);
  }

  updateDepartment(val:any)
  {
    return this.http.put<any>(this.APIUrl+'/Departamento', val);
  }

  deleteDepartment(val:any)
  {
    return this.http.delete<any>(this.APIUrl+'/Departamento/'+ val);
  }

  //FUNCIONARIO
  getFuncList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Funcionario');
  }

  addFunc(val:any)
  {
    return this.http.post<any>(this.APIUrl+'/Funcionario', val);
  }

  updateFunc(val:any)
  {
    return this.http.put<any>(this.APIUrl+'/Funcionario', val);
  }

  deleteFunc(val:any)
  {
    return this.http.delete<any>(this.APIUrl+'/Funcionario/'+ val);
  }

  UploadPhoto(val:any)
  {
    return this.http.delete<any>(this.APIUrl+'/Funcionario/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/Funcionario/GetAllDepartmentNames');
  }
}

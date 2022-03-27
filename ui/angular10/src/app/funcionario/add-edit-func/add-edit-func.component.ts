import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-func',
  templateUrl: './add-edit-func.component.html',
  styleUrls: ['./add-edit-func.component.css']
})
export class AddEditFuncComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() func: any;
  ID_Func: string = "";
  Nome_Func: string = "";
  Departamento: string = "";
  Data_Entrada: string = "";
  Ficheiro_Foto: string = "";
  Caminho_Foto: string = "";

  DepartmentsList: any[] = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList()
  {
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.ID_Func=this.func.ID_Func;
      this.Nome_Func=this.func.Nome_Func;
      this.Departamento=this.func.Departamento;
      this.Data_Entrada=this.func.Data_Entrada;
      this.Ficheiro_Foto=this.func.Ficheiro_Foto;
      this.Caminho_Foto=this.service.FotoUrl+this.Ficheiro_Foto;
    });
  }

  addFunc() {
    var val = {
      ID_Func: this.ID_Func,
      Nome_Func: this.Nome_Func,
      Departamento:this.Departamento,
      Data_Entrada:this.Data_Entrada,
      Ficheiro_Foto:this.Ficheiro_Foto,

    };
    this.service.addFunc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateFunc() {
    var val = {
      ID_Func: this.ID_Func,
      Nome_Func: this.Nome_Func,
      Departamento:this.Departamento,
      Data_Entrada:this.Data_Entrada,
      Ficheiro_Foto:this.Ficheiro_Foto,

    };
    this.service.updateFunc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any)
  {
    var file=event.target.fies[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Ficheiro_Foto=data.toString();
      this.Caminho_Foto=this.service.FotoUrl+this.Ficheiro_Foto;
    })
  }

}

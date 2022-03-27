import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-func',
  templateUrl: './show-func.component.html',
  styleUrls: ['./show-func.component.css']
})
export class ShowFuncComponent implements OnInit {

  constructor(private service: SharedService) { }

  FuncList: any = [];

  ModalTitle: string = "";
  ActivateAddEditFuncComp: boolean = false;
  func: any;

  ngOnInit(): void {
    this.refreshFuncList();
  }

  addClick() {
    this.func = {
      ID_Func: 0,
      Nome_Func: "",
      Departamento: "",
      Data_Entrada: "",
      Ficheiro_Foto: "joao.png"
    }
    this.ModalTitle = "Adicionar"
    this.ActivateAddEditFuncComp = true;
  }

  closeClick() {
    this.ActivateAddEditFuncComp = false;
    this.refreshFuncList();
  }

  editClick(item: any) {
    this.func = item;
    this.ModalTitle = "Editar"
    this.ActivateAddEditFuncComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Você tem a certeza?')) {
      this.service.deleteFunc(item.ID_Func).subscribe(data=> {
        alert(data.toString());
        this.refreshFuncList();
      });
    }
  }

  refreshFuncList() {
    this.service.getFuncList().subscribe(data => {
      this.FuncList = data;
    });
  }


}

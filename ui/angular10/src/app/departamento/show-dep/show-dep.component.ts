import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList: any = [];

  ModalTitle: string = "";
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      ID_Dep: 0,
      Nome_Dep: ""
    }
    this.ModalTitle = "Adicionar"
    this.ActivateAddEditDepComp = true;
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Editar"
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Você tem a certeza?')) {
      this.service.deleteDepartment(item.ID_Dep).subscribe(data=> {
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }

  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    });
  }

}

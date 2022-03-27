import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any;
  ID_Dep: string = "";
  Nome_Dep: string = "";

  ngOnInit(): void {
    this.ID_Dep = this.dep.ID_Dep;
    this.Nome_Dep = this.dep.Nome_Dep;
  }

  addDepartment() {
    var val = {
      ID_Dep: this.ID_Dep,
      Nome_Dep: this.Nome_Dep
    };
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var val = {
      ID_Dep: this.ID_Dep,
      Nome_Dep: this.Nome_Dep
    };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
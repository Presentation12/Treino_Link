import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFuncComponent } from './add-edit-func.component';

describe('AddEditFuncComponent', () => {
  let component: AddEditFuncComponent;
  let fixture: ComponentFixture<AddEditFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

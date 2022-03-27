import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFuncComponent } from './show-func.component';

describe('ShowFuncComponent', () => {
  let component: ShowFuncComponent;
  let fixture: ComponentFixture<ShowFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

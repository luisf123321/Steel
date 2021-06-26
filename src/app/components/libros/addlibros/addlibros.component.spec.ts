import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibrosComponent } from './addlibros.component';

describe('AddlibrosComponent', () => {
  let component: AddlibrosComponent;
  let fixture: ComponentFixture<AddlibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

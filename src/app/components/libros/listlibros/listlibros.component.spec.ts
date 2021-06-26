import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlibrosComponent } from './listlibros.component';

describe('ListlibrosComponent', () => {
  let component: ListlibrosComponent;
  let fixture: ComponentFixture<ListlibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

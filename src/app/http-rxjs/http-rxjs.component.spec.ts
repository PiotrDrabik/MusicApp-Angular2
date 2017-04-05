import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRxjsComponent } from './http-rxjs.component';

describe('HttpRxjsComponent', () => {
  let component: HttpRxjsComponent;
  let fixture: ComponentFixture<HttpRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

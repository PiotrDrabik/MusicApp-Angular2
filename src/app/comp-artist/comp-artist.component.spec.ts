import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArtistComponent } from './comp-artist.component';

describe('CompArtistComponent', () => {
  let component: CompArtistComponent;
  let fixture: ComponentFixture<CompArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

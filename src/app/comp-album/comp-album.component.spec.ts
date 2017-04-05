import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAlbumComponent } from './comp-album.component';

describe('CompAlbumComponent', () => {
  let component: CompAlbumComponent;
  let fixture: ComponentFixture<CompAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

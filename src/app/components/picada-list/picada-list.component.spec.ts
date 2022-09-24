import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicadaListComponent } from './picada-list.component';

describe('PicadaListComponent', () => {
  let component: PicadaListComponent;
  let fixture: ComponentFixture<PicadaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicadaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

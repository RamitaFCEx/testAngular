import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicadaAboutComponent } from './picada-about.component';

describe('PicadaAboutComponent', () => {
  let component: PicadaAboutComponent;
  let fixture: ComponentFixture<PicadaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicadaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicadaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

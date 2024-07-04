import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAgenciaComponent } from './registro-agencia.component';

describe('RegistroAgenciaComponent', () => {
  let component: RegistroAgenciaComponent;
  let fixture: ComponentFixture<RegistroAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAgenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

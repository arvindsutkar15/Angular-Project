import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmDiectiveDemoComponent } from './custm-diective-demo.component';

describe('CustmDiectiveDemoComponent', () => {
  let component: CustmDiectiveDemoComponent;
  let fixture: ComponentFixture<CustmDiectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmDiectiveDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmDiectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

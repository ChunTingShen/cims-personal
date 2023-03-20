import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerbannerComponent } from './lowerbanner.component';

describe('LowerbannerComponent', () => {
  let component: LowerbannerComponent;
  let fixture: ComponentFixture<LowerbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

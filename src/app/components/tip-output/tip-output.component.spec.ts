import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipOutputComponent } from './tip-output.component';

describe('TipOutputComponent', () => {
  let component: TipOutputComponent;
  let fixture: ComponentFixture<TipOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

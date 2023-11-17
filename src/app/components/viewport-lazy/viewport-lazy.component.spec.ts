import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportLazyComponent } from './viewport-lazy.component';

describe('ViewportLazyComponent', () => {
  let component: ViewportLazyComponent;
  let fixture: ComponentFixture<ViewportLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewportLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

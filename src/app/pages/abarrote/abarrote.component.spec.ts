import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbarroteComponent } from './abarrote.component';

describe('AbarroteComponent', () => {
  let component: AbarroteComponent;
  let fixture: ComponentFixture<AbarroteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbarroteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbarroteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

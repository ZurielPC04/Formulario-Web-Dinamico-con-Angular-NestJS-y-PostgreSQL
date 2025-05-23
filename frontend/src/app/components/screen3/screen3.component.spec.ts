import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Screen3Component } from './screen3.component';

describe('Screen3Component', () => {
  let component: Screen3Component;
  let fixture: ComponentFixture<Screen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Screen3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

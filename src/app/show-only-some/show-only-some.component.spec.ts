import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnlySomeComponent } from './show-only-some.component';

describe('ShowOnlySomeComponent', () => {
  let component: ShowOnlySomeComponent;
  let fixture: ComponentFixture<ShowOnlySomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOnlySomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOnlySomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

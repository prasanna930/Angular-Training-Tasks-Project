import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplecheckboxesComponent } from './multiplecheckboxes.component';

describe('MultiplecheckboxesComponent', () => {
  let component: MultiplecheckboxesComponent;
  let fixture: ComponentFixture<MultiplecheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplecheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplecheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

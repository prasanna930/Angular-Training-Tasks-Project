import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyserverComponent } from './proxyserver.component';

describe('ProxyserverComponent', () => {
  let component: ProxyserverComponent;
  let fixture: ComponentFixture<ProxyserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

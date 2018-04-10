import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPageComponent } from './wall-page.component';

describe('WallPageComponent', () => {
  let component: WallPageComponent;
  let fixture: ComponentFixture<WallPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

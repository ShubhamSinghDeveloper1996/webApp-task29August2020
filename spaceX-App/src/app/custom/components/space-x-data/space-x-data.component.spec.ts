import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXDataComponent } from './space-x-data.component';

describe('SpaceXDataComponent', () => {
  let component: SpaceXDataComponent;
  let fixture: ComponentFixture<SpaceXDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

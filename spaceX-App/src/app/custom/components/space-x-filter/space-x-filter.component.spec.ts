import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXFilterComponent } from './space-x-filter.component';

describe('SpaceXFilterComponent', () => {
  let component: SpaceXFilterComponent;
  let fixture: ComponentFixture<SpaceXFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

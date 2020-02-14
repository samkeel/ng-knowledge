import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsMainFormComponent } from './docs-main-form.component';

describe('DocsMainFormComponent', () => {
  let component: DocsMainFormComponent;
  let fixture: ComponentFixture<DocsMainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

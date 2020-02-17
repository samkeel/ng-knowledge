import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHeaderComponent } from './docs-header.component';

describe('DocsHeaderComponent', () => {
  let component: DocsHeaderComponent;
  let fixture: ComponentFixture<DocsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

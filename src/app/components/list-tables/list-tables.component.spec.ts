import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTablesComponent } from './list-tables.component';

describe('ListTablesComponent', () => {
  let component: ListTablesComponent;
  let fixture: ComponentFixture<ListTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

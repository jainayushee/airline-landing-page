import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcardTwoComponent } from './searchcard-two.component';

describe('SearchcardTwoComponent', () => {
  let component: SearchcardTwoComponent;
  let fixture: ComponentFixture<SearchcardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

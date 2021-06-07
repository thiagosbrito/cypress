import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClubsInputComponent } from './search-clubs-input.component';

describe('SearchClubsInputComponent', () => {
  let component: SearchClubsInputComponent;
  let fixture: ComponentFixture<SearchClubsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClubsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClubsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

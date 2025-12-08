import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolio } from './my-portfolio';

describe('MyPortfolio', () => {
  let component: MyPortfolio;
  let fixture: ComponentFixture<MyPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

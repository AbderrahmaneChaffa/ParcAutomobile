import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueuiladminPage } from './accueuiladmin.page';

describe('AccueuiladminPage', () => {
  let component: AccueuiladminPage;
  let fixture: ComponentFixture<AccueuiladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueuiladminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueuiladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

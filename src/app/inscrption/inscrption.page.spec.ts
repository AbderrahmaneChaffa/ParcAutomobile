import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscrptionPage } from './inscrption.page';

describe('InscrptionPage', () => {
  let component: InscrptionPage;
  let fixture: ComponentFixture<InscrptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscrptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

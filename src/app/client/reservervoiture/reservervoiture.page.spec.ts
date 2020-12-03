import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservervoiturePage } from './reservervoiture.page';

describe('ReservervoiturePage', () => {
  let component: ReservervoiturePage;
  let fixture: ComponentFixture<ReservervoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservervoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservervoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

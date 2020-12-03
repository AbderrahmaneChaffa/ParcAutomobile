import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChauffeursPage } from './chauffeurs.page';

describe('ChauffeursPage', () => {
  let component: ChauffeursPage;
  let fixture: ComponentFixture<ChauffeursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChauffeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChauffeurPage } from './chauffeur.page';

describe('ChauffeurPage', () => {
  let component: ChauffeurPage;
  let fixture: ComponentFixture<ChauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

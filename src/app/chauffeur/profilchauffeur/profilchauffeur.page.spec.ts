import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilchauffeurPage } from './profilchauffeur.page';

describe('ProfilchauffeurPage', () => {
  let component: ProfilchauffeurPage;
  let fixture: ComponentFixture<ProfilchauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilchauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

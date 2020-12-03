import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterchauffeurPage } from './ajouterchauffeur.page';

describe('AjouterchauffeurPage', () => {
  let component: AjouterchauffeurPage;
  let fixture: ComponentFixture<AjouterchauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterchauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscrptionchauffeurPage } from './inscrptionchauffeur.page';

describe('InscrptionchauffeurPage', () => {
  let component: InscrptionchauffeurPage;
  let fixture: ComponentFixture<InscrptionchauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrptionchauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscrptionchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

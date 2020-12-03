import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutervoituresPage } from './ajoutervoitures.page';

describe('AjoutervoituresPage', () => {
  let component: AjoutervoituresPage;
  let fixture: ComponentFixture<AjoutervoituresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutervoituresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutervoituresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

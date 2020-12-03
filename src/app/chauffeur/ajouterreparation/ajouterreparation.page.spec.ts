import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterreparationPage } from './ajouterreparation.page';

describe('AjouterreparationPage', () => {
  let component: AjouterreparationPage;
  let fixture: ComponentFixture<AjouterreparationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterreparationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterreparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutermissionsPage } from './ajoutermissions.page';

describe('AjoutermissionsPage', () => {
  let component: AjoutermissionsPage;
  let fixture: ComponentFixture<AjoutermissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermissionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoituresPage } from './voitures.page';

describe('VoituresPage', () => {
  let component: VoituresPage;
  let fixture: ComponentFixture<VoituresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoituresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoituresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

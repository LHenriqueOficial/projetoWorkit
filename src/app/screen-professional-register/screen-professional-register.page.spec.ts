import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenProfessionalRegisterPage } from './screen-professional-register.page';

describe('ScreenProfessionalRegisterPage', () => {
  let component: ScreenProfessionalRegisterPage;
  let fixture: ComponentFixture<ScreenProfessionalRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenProfessionalRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenProfessionalRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

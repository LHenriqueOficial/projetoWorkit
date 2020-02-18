import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenBankAccountRegisterPage } from './screen-bank-account-register.page';

describe('ScreenBankAccountRegisterPage', () => {
  let component: ScreenBankAccountRegisterPage;
  let fixture: ComponentFixture<ScreenBankAccountRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenBankAccountRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenBankAccountRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

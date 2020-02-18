import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenLoginPage } from './screen-login.page';

describe('ScreenLoginPage', () => {
  let component: ScreenLoginPage;
  let fixture: ComponentFixture<ScreenLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

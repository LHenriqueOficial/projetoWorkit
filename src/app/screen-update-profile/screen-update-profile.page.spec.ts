import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenUpdateProfilePage } from './screen-update-profile.page';

describe('ScreenUpdateProfilePage', () => {
  let component: ScreenUpdateProfilePage;
  let fixture: ComponentFixture<ScreenUpdateProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenUpdateProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenUpdateProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

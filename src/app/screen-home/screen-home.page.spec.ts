import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenHomePage } from './screen-home.page';

describe('ScreenHomePage', () => {
  let component: ScreenHomePage;
  let fixture: ComponentFixture<ScreenHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

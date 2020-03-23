import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenUsuariosPage } from './screen-usuarios.page';

describe('ScreenUsuariosPage', () => {
  let component: ScreenUsuariosPage;
  let fixture: ComponentFixture<ScreenUsuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenUsuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

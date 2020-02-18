import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SreenInicialPage } from './sreen-inicial.page';

describe('SreenInicialPage', () => {
  let component: SreenInicialPage;
  let fixture: ComponentFixture<SreenInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SreenInicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SreenInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

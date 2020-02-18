import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeResgisterPage } from './scree-resgister.page';

describe('ScreeResgisterPage', () => {
  let component: ScreeResgisterPage;
  let fixture: ComponentFixture<ScreeResgisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeResgisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeResgisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

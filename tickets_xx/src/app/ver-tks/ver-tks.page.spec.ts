import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerTksPage } from './ver-tks.page';

describe('VerTksPage', () => {
  let component: VerTksPage;
  let fixture: ComponentFixture<VerTksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerTksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

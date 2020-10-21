import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplateCreatePage } from './template-create.page';

describe('TemplateCreatePage', () => {
  let component: TemplateCreatePage;
  let fixture: ComponentFixture<TemplateCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

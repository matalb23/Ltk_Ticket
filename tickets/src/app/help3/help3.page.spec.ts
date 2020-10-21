import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Help3Page } from './help3.page';

describe('Help3Page', () => {
  let component: Help3Page;
  let fixture: ComponentFixture<Help3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Help3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Help3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

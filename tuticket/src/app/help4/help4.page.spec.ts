import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Help4Page } from './help4.page';

describe('Help4Page', () => {
  let component: Help4Page;
  let fixture: ComponentFixture<Help4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Help4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Help4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

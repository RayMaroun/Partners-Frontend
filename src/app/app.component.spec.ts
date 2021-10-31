import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './partner-details/layout.component';
import { PartnerDetailsFormComponent } from './partner-details/partner-details-form.component';
import { PartnerDetailsComponent } from './partner-details/partner-details.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LayoutComponent,
        PartnerDetailsComponent,
        PartnerDetailsFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PartnersManagement'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PartnersManagement');
  });
});

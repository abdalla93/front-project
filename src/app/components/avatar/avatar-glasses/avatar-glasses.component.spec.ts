import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGlassesComponent } from './avatar-glasses.component';

describe('AvatarGlassesComponent', () => {
  let component: AvatarGlassesComponent;
  let fixture: ComponentFixture<AvatarGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarGlassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

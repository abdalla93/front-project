import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarColorComponent } from './avatar-color.component';

describe('AvatarColorComponent', () => {
  let component: AvatarColorComponent;
  let fixture: ComponentFixture<AvatarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

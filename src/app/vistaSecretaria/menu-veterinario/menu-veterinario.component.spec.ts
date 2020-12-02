import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVeterinarioComponent } from './menu-veterinario.component';

describe('MenuVeterinarioComponent', () => {
  let component: MenuVeterinarioComponent;
  let fixture: ComponentFixture<MenuVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

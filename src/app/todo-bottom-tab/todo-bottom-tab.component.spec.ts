import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBottomTabComponent } from './todo-bottom-tab.component';

describe('TodoBottomTabComponent', () => {
  let component: TodoBottomTabComponent;
  let fixture: ComponentFixture<TodoBottomTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBottomTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBottomTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

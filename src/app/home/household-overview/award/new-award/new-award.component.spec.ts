/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewAwardComponent } from './new-award.component';

describe('NewAwardComponent', () => {
  let component: NewAwardComponent;
  let fixture: ComponentFixture<NewAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

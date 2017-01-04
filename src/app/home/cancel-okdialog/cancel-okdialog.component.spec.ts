/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CancelOKdialogComponent} from "./cancel-okdialog.component";

describe('CancelOKdialogComponent', () => {
  let component: CancelOKdialogComponent;
  let fixture: ComponentFixture<CancelOKdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelOKdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelOKdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

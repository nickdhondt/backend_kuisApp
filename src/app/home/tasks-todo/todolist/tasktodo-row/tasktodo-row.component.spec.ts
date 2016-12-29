/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TasktodoRowComponent} from "./tasktodo-row.component";

describe('TasktodoRowComponent', () => {
    let component: TasktodoRowComponent;
    let fixture: ComponentFixture<TasktodoRowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TasktodoRowComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TasktodoRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

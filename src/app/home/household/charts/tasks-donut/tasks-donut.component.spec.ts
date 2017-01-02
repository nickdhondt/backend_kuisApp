/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TasksDonutComponent} from "./tasks-donut.component";

describe('TasksDonutComponent', () => {
    let component: TasksDonutComponent;
    let fixture: ComponentFixture<TasksDonutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TasksDonutComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TasksDonutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ContributionDonutComponent} from "./contribution-donut.component";

describe('ContributionDonutComponent', () => {
    let component: ContributionDonutComponent;
    let fixture: ComponentFixture<ContributionDonutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContributionDonutComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContributionDonutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

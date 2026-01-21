import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { TimelineModule } from "primeng/timeline";
import { ITimelineContentFragment } from "./timeline-content.fragment.interface";

@Component({
    selector: 'timeline-content-fragment',
    templateUrl: './timeline-content.fragment.html',
    styleUrls: ['./timeline-content.fragment.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TimelineModule]
})
export class TimelineContentFragment implements OnInit {
    @Input() data!: Array<ITimelineContentFragment>;
    @Input() contentClass: string = '';
    @Input() positionClass: string = '';
    @Input() enterpriseClass: string = '';

    ngOnInit(): void {
        
    }
}

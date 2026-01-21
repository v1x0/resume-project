import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'profile-content-fragment',
    templateUrl: './profile-content.fragment.html',
    styleUrls: ['./profile-content.fragment.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContentFragment {
    @Input() contentClass: string = '';
    @Input() image: string = '';
    @Input() imageClass: string = '';
    @Input() nameClass: string = '';
    @Input() positionLabel: string = '';
    @Input() positionClass: string = '';
}

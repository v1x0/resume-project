import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'education-content-fragment',
    templateUrl: './education-content.fragment.html',
    styleUrls: ['./education-content.fragment.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationContentFragment {
    @Input() contentClass: string = '';
    @Input() descriptionClass: string = '';
    @Input() description: string = '';
    @Input() universityClass: string = '';
    @Input() university: string = '';
}

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'professional-summary-content-fragment',
    templateUrl: './professional-summary-content.fragment.html',
    styleUrls: ['./professional-summary-content.fragment.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalSummaryContentFragment {
    @Input() contentClass: string = '';
    @Input() titleClass: string = '';
    @Input() title: string = '';
    @Input() descriptionClass: string = '';
    @Input() description: string = '';

}

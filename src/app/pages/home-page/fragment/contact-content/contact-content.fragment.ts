
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IContactItem } from "./contact-content.fragment.interface";

@Component({
    selector: 'contact-content-fragment',
    templateUrl: './contact-content.fragment.html',
    styleUrls: ['./contact-content.fragment.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactContentFragment {
    @Input() contentClass: string = '';
    @Input() contactClass: string = '';
    @Input() contactLabel: string = '';
    @Input() contacts: Array<IContactItem> = [];
}

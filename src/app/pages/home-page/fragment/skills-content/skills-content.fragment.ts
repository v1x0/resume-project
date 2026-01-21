import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ISkillsContentFragment } from "./skills-content.fragment.interface";
import { ChipModule } from "primeng/chip";

@Component({
    selector: 'skills-content-fragment',
    templateUrl: './skills-content.fragment.html',
    styleUrls: ['./skills-content.fragment.html'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ChipModule]
})
export class SkillsContentFragment implements OnInit {
    @Input() data: ISkillsContentFragment = {};
    @Input() contentClass: string = '';
    @Input() titleClass: string = '';
    @Input() titleLabel: string = '';
    @Input() classIcon: string = '';
    @Input() skillTitleClass: string = '';
    @Input() skillsContentClass: string = '';
    protected keysSkills: Array<string> = [];
    
    ngOnInit(): void {
        this.keysSkills = Object.keys(this.data);
    }
}

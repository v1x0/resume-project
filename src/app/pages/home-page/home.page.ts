import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from "@angular/core";
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import moment from 'moment';
import { skills } from "./data/skills";
import { ProfileContentFragment } from "./fragment/profile-content/profile-content.fragment";
import { ProfessionalSummaryContentFragment } from "./fragment/professional-summary-content/professional-summary-content.fragment";
import { IContactItem } from "./fragment/contact-content/contact-content.fragment.interface";
import { getContactItems } from "./utils/sanitizedData";
import { ContactContentFragment } from "./fragment/contact-content/contact-content.fragment";
import { SkillsContentFragment } from "./fragment/skills-content/skills-content.fragment";
import { TimelineContentFragment } from "./fragment/timeline-content/timeline-content.fragment";
import { IHomeGeneric } from "./home.page.interface";
import { ITimelineContentFragment } from "./fragment/timeline-content/timeline-content.fragment.interface";
import { EducationContentFragment } from "./fragment/education-content/education-content.fragment";

@Component({
    selector: 'resume-page',
    standalone: true,
    templateUrl: './home.page.html',
    imports: [
        AvatarModule,
        CardModule,
        DividerModule,
        ChipModule,
        TimelineModule,
        TranslateModule,
        ProfileContentFragment,
        ProfessionalSummaryContentFragment,
        ContactContentFragment,
        SkillsContentFragment,
        TimelineContentFragment,
        EducationContentFragment
    ],
    styleUrls: ['./home.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumePageComponent {
   protected timelineData: Array<ITimelineContentFragment> = [];
   protected readonly skills = skills;
   protected contactData: Array<IContactItem> = []
    constructor(private readonly translate: TranslateService, private readonly cdr: ChangeDetectorRef, private readonly route: ActivatedRoute) {
        this.contactData = getContactItems();
        this.route.data.subscribe(data => {
            this.translate.use(data['language']).subscribe(dataLanguaje => {
                const experienceJobs: IHomeGeneric = dataLanguaje['EXPERIENCE_JOBS'] as unknown as IHomeGeneric;
                const timelineDataAux: Array<ITimelineContentFragment> = []
                Object.keys(experienceJobs).forEach(k => {
                    const startDate = moment(experienceJobs[k]['DATE']['START'], 'MMMM-YYYY');
                    let endDate = data['language'] === 'en' ? 'PRESENT': 'PRESENTE';
                    if(experienceJobs[k]['DATE']['END']) {
                        endDate = moment(experienceJobs[k]['DATE']['END'], 'MM-YYYY').format('MMMM, YYYY');
                    }
                    const activities = Object.keys(experienceJobs[k]['ACTIVITIES']).map(activityKey => experienceJobs[k]['ACTIVITIES'][activityKey])
                    timelineDataAux.push({
                        position: experienceJobs[k]['ROL'],
                        enterprise: experienceJobs[k]['ENTERPRISE'],
                        time: `${startDate.format('MMMM, YYYY')} - ${endDate}`,
                        activities
                    })
                })
                this.timelineData = timelineDataAux;
                this.cdr.detectChanges();
            });
        });
    }
}
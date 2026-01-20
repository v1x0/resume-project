import { ChangeDetectorRef, Component, signal } from "@angular/core";
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import moment from 'moment';

@Component({
    selector: 'resume-page',
    standalone: true,
    templateUrl: './home.page.html',
    imports: [AvatarModule, CardModule, DividerModule, ChipModule, TimelineModule, TranslateModule ],
    styleUrls: ['./home.page.scss']
})
export class ResumePageComponent {
   protected experiencias: any = [];
    constructor(private readonly translate: TranslateService, private readonly cdr: ChangeDetectorRef, private readonly route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.translate.use(data['language']).subscribe((data2: any) => {
                const a = data2['EXPERIENCE_JOBS'];
                const w: Array<any> = []
                Object.keys(a).forEach(k => {
                    const startDate = moment(a[k]['DATE']['START'], 'MMMM-YYYY');
                    let endDate = data['language'] === 'en' ? 'PRESENT': 'PRESENTE';
                    if(a[k]['DATE']['END']) {
                        endDate = moment(a[k]['DATE']['END'], 'MM-YYYY').format('MMMM, YYYY');
                    }
                    const activities = Object.keys(a[k]['ACTIVITIES']).map(activityKey => a[k]['ACTIVITIES'][activityKey])
                    w.push({
                        puesto: a[k]['ROL'],
                        empresa: a[k]['ENTERPRISE'],
                        periodo: `${startDate.format('MMMM, YYYY')} - ${endDate}`,
                        activities: activities
                    })
                })
                this.experiencias = w;
                this.cdr.detectChanges();
            });
        });
    }
}
export interface IHomeGeneric {
    [key: string]: IExperienceJobs
}

export interface IExperienceJobs {
    DATE: IDateExperienceJob
    ACTIVITIES: IActivitiesExperienceJob
    ROL: string
    ENTERPRISE: string
}

export interface IDateExperienceJob {
    START: string
    END: string
}

export interface IActivitiesExperienceJob {
    [key: string]: Array<string>
}

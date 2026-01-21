import { IContactItem } from "../fragment/contact-content/contact-content.fragment.interface";

export function getContactItems(): Array<IContactItem> {
    const contactIconClass = "pi mr-3 text-primary ";
    const contactItemClass = "flex align-items-center mb-2";
    return [{
        contactIconClass: `${contactIconClass + 'pi-envelope'}`,
        contactItemClass,
        contactItemLabel: 'davidfi.unam@gmail.com',
        contactItemRef: 'mailto:davidfi.unam@gmail.com'
    }, {
        contactIconClass: `${contactIconClass + 'pi-linkedin'}`,
        contactItemClass,
        contactItemLabel: 'Linkedin',
        contactItemRef: 'https://www.linkedin.com/in/david-reyes-unam/'
    }, {
        contactIconClass: `${contactIconClass + 'pi-github'}`,
        contactItemClass,
        contactItemLabel: 'Github',
        contactItemRef: 'https://github.com/v1x0'
    }];
}

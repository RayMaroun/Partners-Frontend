import { Office } from "./office.model";

export class Partner {
    id: number = 0;
    urlName: string = '';
    organization: string = '';
    customerLocations: string = '';
    willWorkRemotely: boolean = false;
    website: string = '';
    services: string = '';
    offices: Office[] = [];
}

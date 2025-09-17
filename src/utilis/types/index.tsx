export interface TravelRecord {
    id: string;
    route: string;
    driver: string;
    vehicle: string;
    kmRange: string;
    departure: string;
    return: string;
    dispatcher: string;
    addEdit: string;
}

export interface NavigationItem {
    id: string;
    label: string;
    icon: string;
    active?: boolean;
}

export interface Driver {
    id: string;
    name: string;
    fin: string;
    category: string;
    tabelNumber: string;
    addedBy: string;
    addedDate: string;
    editedBy: string;
    editedDate: string;
}
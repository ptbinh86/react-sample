export interface Location {
    country: string;
    province: string;
    district: string;
    wards: string;
    address: string;
}

export interface Province {
    id: string;
    name: string;
    slug: string;
    type: string;
    nameWithType: string;
    thumbnail: string;
}

export interface Project {
    id: number;
    name: string;
    price: number;
    location: Location;
    latitude: string;
    longitude: string;
    thumbnail: string;
    images: string;
    investorId: number;
    investorName: string;
    category: string;
    startDate: Date;
    endDate: Date;
    metaData: string;
    description: string;
    status: string;
    province: Province;
    district?: any;
    ward?: any;
}
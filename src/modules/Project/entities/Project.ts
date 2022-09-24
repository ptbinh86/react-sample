import { Province } from '../../Address/entities/Province';
import { Location } from '../../Address/entities/Location';

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

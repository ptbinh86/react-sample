export interface Investor {
	id: number;
	name: string;
	location: string;
	website: string;
	phone: string;
	thumbnail: string;
	description: string;
	charteredCapital: number;
	createdYear: Date;
	field: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: any;
	createdBy?: number;
	updatedBy?: number;
	deletedBy?: any;
}

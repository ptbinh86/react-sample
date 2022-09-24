import { Investor } from '../entities/Investor';
import {
	createApiUrl,
	get
} from '../../../services/HttpService';

export function getInvestors () {
	return get<Investor>(createApiUrl('/investors.json')).then(
		(data) => data.content
	)
}

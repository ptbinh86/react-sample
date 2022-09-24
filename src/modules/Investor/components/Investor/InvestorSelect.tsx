import useQuery from '../../../../hooks/useQuery';

import { Select } from 'antd';
import { getInvestors } from '../../services/InvestorService';

export default function InvestorSelect (props) {
	const { data } = useQuery(getInvestors)

	return (
		<Select {...props}>
			{data && (data.map(investor => (
				<Select.Option value={investor.id.toString()} key={investor.id}>{investor.name}</Select.Option>
			)))}
		</Select>
	)
}

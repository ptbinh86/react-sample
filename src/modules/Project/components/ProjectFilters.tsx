import { useForm } from 'antd/lib/form/Form';
import _ from 'lodash'

import {
	Button,
	Form,
	Input,
	Select
} from 'antd';

import InvestorSelect from '../../Investor/components/Investor/InvestorSelect';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ({ onSearch, disabled }) {
	const [form] = useForm()
	const [search] = useSearchParams()

	/**
	 * The callback function to emit filtering parameters
	 * to parent component
	 *
	 * @param values
	 */
	const handleSubmit = (values) => {
		// Cleanup values before emit to parent
		onSearch(_.omitBy(values, _.isEmpty))
	}

	useEffect(() => {
		form.setFieldsValue(
			_.merge({
				investor: null,
				keyword: null,
				status: null
			}, Object.fromEntries(search))
		)
	}, [search])

	return (
		<Form form={form} onFinish={handleSubmit} layout="inline">
			<Form.Item name="keyword">
				<Input placeholder="Search"/>
			</Form.Item>

			<Form.Item name="investor">
				<InvestorSelect placeholder="Select investor" />
			</Form.Item>

			<Form.Item name="status">
				<Select placeholder="Select status">
					<Select.Option value="all">All</Select.Option>
					<Select.Option value="pending">Pending</Select.Option>
					<Select.Option value="approved">Approved</Select.Option>
					<Select.Option value="rejected">Rejected</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" disabled={disabled}>
					Search
				</Button>
			</Form.Item>
		</Form>
	)
}

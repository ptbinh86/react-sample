import { useForm } from 'antd/lib/form/Form';
import {
	Button,
	Form,
	Input,
	Select
} from 'antd';

export default function ({ onSearch, disabled }) {
	const [form] = useForm()
	const statusOptions = {
		all: 'All',
		approved: 'Approved',
		pending: 'Pending'
	};

	return (
		<Form form={form} onFinish={onSearch} layout="inline">
			<Form.Item name="keyword">
				<Input placeholder="Search"/>
			</Form.Item>

			<Form.Item name="status">
				<Select placeholder="Select status">
					{Object.keys(statusOptions).map((value) => (
						<Select.Option
							value={value}
							key={value}>
							{statusOptions[value]}
						</Select.Option>
					))}
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

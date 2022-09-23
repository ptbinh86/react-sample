import {
	Form,
	Input
} from 'antd';

export default function ProjectForm () {
	return (
		<Form>
			<Form.Item label="Name" name="name">
				<Input placeholder="Project name" />
			</Form.Item>
		</Form>
	)
}

import { Table } from 'antd';
import { NavLink } from 'react-router-dom';
import { Project } from '../entities/Project';

export default function ProjectTable ({ dataSource }) {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Investor',
        dataIndex: 'investorName',
        key: 'investor',
    }, {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    }, {
			title: 'Actions',
			render: (text: string, record: Project, index: number) => {
				return (
					<NavLink to={`/projects/${record.id}`}>Edit</NavLink>
				)
			}
		}];

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey="id"
        />
    )
}

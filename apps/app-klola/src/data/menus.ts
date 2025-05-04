
import { DollarSign, FileText, Folder, Home, Users } from 'lucide-react';
import { MenuItem, MenuItemType } from '../shared/types/menu-Item';


export const menusData: MenuItem[] = [
    {
        id: 1,
        name: 'Human Resources',
        parent_id: null,
        icon: Home,
        permission: 'name_module_hr_payroll',
        children: [
            {
                id: 2,
                name: 'Employee Management',
                parent_id: 1,
                icon: Folder,
                permission: 'name_module_master_data_position',
                children: [
                    {
                        id: 3,
                        name: 'Employee List',
                        parent_id: 2,
                        icon: FileText,
                        permission: 'name_module_master_data_position',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Finance',
        parent_id: null,
        icon: Home,
        permission: 'name_module_finance_accounts',
        children: []
    }
];

export const menuItems: MenuItemType[] = [
    { name: 'Keuangan & Akuntansi', icon: DollarSign, onClick: () => console.log('Keuangan & Akuntansi') },
    { name: 'Human Resources', icon: Users, onClick: () => console.log('Human Resources') }
];


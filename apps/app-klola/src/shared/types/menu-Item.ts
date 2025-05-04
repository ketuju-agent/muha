import { LucideIcon } from 'lucide-react';

export interface MenuItemType {
    name: string;
    icon: React.ElementType;
    onClick: () => void;
}

export interface MenuItem {
    id: number;
    name: string;
    parent_id: number | null;
    icon?: LucideIcon;
    children: MenuItem[];
    permission?: string;
}

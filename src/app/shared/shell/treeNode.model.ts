export interface treeNodeModel {
    id: number;
    name: string;
    routeLink?: string;
    children?: treeNodeChildren[];
}

export interface treeNodeChildren {
    id: number;
    name: string;
    routeLink?: string;
    children?: treeNodeSubChildren[];
}

export interface treeNodeSubChildren {
    id: number;
    name: string;
    routeLink?: string;
}
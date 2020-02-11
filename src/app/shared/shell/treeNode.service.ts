import { treeNodeModel } from './treeNode.model';


export class treeNodeService {
    private treeNodes: treeNodeModel[] = [
        {id: 1, name: "Engineering"},
        {
            id: 2, 
            name: "SP3D",
            children: [
                {id: 1, name: "Components", routeLink: "/docs"},
                {id: 2, name: "Cable Ladder"},
                {id: 3, name: "Conduits"}
            ]            
        },
        {
            id: 3,
            name: "Microstation",
            children: [
                {id: 1, name: "Routed", routeLink: "/docs"},
                {id: 2, name: "child 2"},
                {id: 3, name: "child 3"}
            ]            
        },
        {
            id: 3,
            name: "AutoCAD",
            children: [
                {id: 1, name: "Routed", routeLink: "/docs"},
                {id: 2, name: "child 2"},
                {id: 3, name: "child 3"}
            ]            
        }
    ];

    getTrees() {
        return this.treeNodes.slice();
    }
}

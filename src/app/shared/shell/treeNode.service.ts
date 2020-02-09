import { treeNodeModel } from './treeNode.model';


export class treeNodeService {
    private treeNodes: treeNodeModel[] = [
        {id: 1, name: "Subject1"},
        {
            id: 2, 
            name: "Subject2",
            children: [
                {id: 1, name: "Routed", routeLink: "/docs"},
                {id: 2, name: "child 2"},
                {id: 3, name: "child 3"}
            ]            
        },
        {
            id: 3,
            name: "Subject3",
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

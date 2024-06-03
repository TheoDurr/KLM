// src/react-vis-network.d.ts
declare module 'react-vis-network' {
    import * as React from 'react';

    interface Node {
        id: number;
        label?: string;
    }

    interface Edge {
        from: number;
        to: number;
    }

    interface Data {
        nodes: Node[];
        edges: Edge[];
    }

    interface NetworkProps {
        data: Data;
        style?: React.CSSProperties;
    }

    export class Network extends React.Component<NetworkProps> {}
}
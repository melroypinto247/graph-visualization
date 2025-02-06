import { type AppNode } from '../helper/types.ts';

 
export const initialNodes = [
  {
    id: '1',
    type: 'colorNode',
    data: { color: '#55efc4' ,fontSize:14, label:'node 1' },
    position: { x: 250, y: 25 },
  },
 
  {
    id: '2',
    type: 'colorNode',
    data: { color: '#00b894',fontSize:14, label:'node 2' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'colorNode',
    data: { color: '#81ecec',fontSize:14, label:'node 3' },
    position: { x: 100, y: 250 },
  },
  {
    id: '4',
    type: 'colorNode',
    data: { color: '#74b9ff',fontSize:14, label:'node 4' },
    position: { x: 100, y: 350 },
  },
  {
    id: '5',
    type: 'colorNode',
    data: { color: '#a29bfe',fontSize:14, label:'node 5' },
    position: { x: 100, y: 450 },
  },
  {
    id: '6',
    type: 'colorNode',
    data: { color: '#00b894',fontSize:14, label:'node 6' },
    position: { x: 250, y: 550 },
  },
  {
    id: '7',
    type: 'colorNode',
    data: { color: '#00cec9',fontSize:14, label:'node 7' },
    position: { x: 350, y: 450 },
  },
  {
    id: '8',
    type: 'colorNode',
    data: { color: '#0984e3',fontSize:14, label:'node 8' },
    position: { x: 450, y: 350 },
  },
  {
    id: '9',
    type: 'colorNode',
    data: { color: '#6c5ce7',fontSize:14, label:'node 9' },
    position: { x: 350, y: 250 },
  },
  {
    id: '10',
    type: 'colorNode',
    data: { color: '#b2bec3',fontSize:14, label:'node 10' },
    position: { x: 550, y: 150 },
  },
] as AppNode[];
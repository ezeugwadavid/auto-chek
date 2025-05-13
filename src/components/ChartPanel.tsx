import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Emeka Olise', posts: 5 },
  { name: 'David Ezeugwa', posts: 7 },
  { name: 'Ola Adegoke', posts: 3 },
];

const ChartPanel: React.FC = () => (
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="posts" fill="#8add32" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ChartPanel;
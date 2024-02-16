import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const ArticlesChart = () => {
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/interestpoints');
        processData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  const processData = (articles) => {
    const format = 'YYYY-MM-DD';
    const now = dayjs();
    const startOfThisWeek = now.startOf('week');
    const startOfLastWeek = now.subtract(1, 'week').startOf('week');
  
    const thisWeekCounts = Array(7).fill(0);
    const lastWeekCounts = Array(7).fill(0);
  
    articles.forEach(article => {
      const createdAt = dayjs(article.created_at);
      if (createdAt.isAfter(startOfThisWeek)) {
        // Article créé cette semaine
        const dayIndex = createdAt.day() - startOfThisWeek.day();
        thisWeekCounts[dayIndex]++;
      } else if (createdAt.isAfter(startOfLastWeek)) {
        // Article créé la semaine passée
        const dayIndex = createdAt.day() - startOfLastWeek.day();
        lastWeekCounts[dayIndex]++;
      }
    });

    setChartData({
        labels: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        datasets: [
          {
            label: 'Semaine en cours',
            data: thisWeekCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Semaine passée',
            data: lastWeekCounts,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }
        ]
      });
    };
    return Object.keys(chartData).length > 0 ? <Bar data={chartData} options={{ responsive: true }} /> : null;
};

export default ArticlesChart;

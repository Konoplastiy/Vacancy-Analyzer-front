import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
import {ChartConfiguration, ChartData, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  topInfo = [
    {title: 'Vacancies online', value: 1234, photo: "assets/icons/vacancy.svg"},
    {title: 'Users online', value: 1, photo: "assets/icons/user.svg"},
    {title: 'Top Language', value: "Java", photo: "assets/icons/java.svg"}
  ];

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true
      }
    }
  };
  barChartType: ChartType = 'bar';
  barChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      { data: [1011, 1103, 1220, 1186, 1234], label: 'Vacancies jobs' }
    ]
  };

  ngOnInit(): void {
    AOS.init();
  }

}

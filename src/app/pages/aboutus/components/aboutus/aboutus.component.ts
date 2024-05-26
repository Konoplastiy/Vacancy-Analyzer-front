import {Component, OnInit} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  teamMembers = [
    {
      imgSrc: '/assets/images/team1.png',
      name: 'Andriy Konoplastiy',
      role: 'Full Stack Developer'
    },
    {
      imgSrc: '/assets/images/team2.png',
      name: 'Eddie Stephens',
      role: 'QA Engineer'
    },
    {
      imgSrc: '/assets/images/team3.png',
      name: 'Jon Harrison',
      role: 'UI/UX Designer'
    }
  ];
  achievements = [
    {
      icon: '/assets/images/award.png',
      title: 'Top Industry Leader 2023',
      description: 'Recognized as the top industry leader in the technology sector for 2023.'
    },
    {
      icon: '/assets/images/growth.png',
      title: '500% Growth',
      description: 'Achieved a 500% growth in revenue over the past three years.'
    },
    {
      icon: '/assets/images/community.png',
      title: 'Community Support Award',
      description: 'Awarded for exceptional community service and support during the 2024 health crisis.'
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}

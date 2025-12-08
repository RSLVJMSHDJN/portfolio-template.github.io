import { Component } from '@angular/core';
import { ProgressBar } from '../../progress-bar/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ProgressBar, CommonModule],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss']
})
export class MySkills {

  skills = [
    { name: 'HTML - 5', value: 80, img: 'HTML5.png' },
    { name: 'CSS - 3', value: 75, img: 'CSS3.png' },
    { name: 'Tailwind CSS', value: 75, img: 'tailwind-css.png' },
    { name: 'JavaScript', value: 55, img: 'javascript.png' },
    { name: 'React', value: 55, img: 'react.png' },
    { name: 'Figma', value: 80, img: 'figma.png' },
    { name: 'Adobe Photoshop', value: 60, img: 'photoshop.png' },
    { name: 'Adobe Illustrator', value: 65, img: 'illustrator.png' },
  ];

}

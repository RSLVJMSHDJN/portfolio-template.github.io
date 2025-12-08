import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.scss']
})
export class ProgressBar {
  @Input() value: number = 0;
}

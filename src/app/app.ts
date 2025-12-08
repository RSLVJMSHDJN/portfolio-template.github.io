import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AboutMe } from './main/about-me/about-me';
import { MySkills } from './main/my-skills/my-skills';
import { MyServices } from './main/my-services/my-services';
import { MyPortfolio } from './main/my-portfolio/my-portfolio';
import { ContactMe } from './main/contact-me/contact-me';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [Header, AboutMe, MySkills, MyServices, MyPortfolio, ContactMe, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-template');

}

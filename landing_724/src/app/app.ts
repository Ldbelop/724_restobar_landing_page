import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from "./landing/hero-section/hero-section";
import { FeaturesSection } from "./landing/features-section/features-section";
import { ExplainSection } from './landing/explain-section/explain-section';
import { AdvanceSection } from './landing/advance-section/advance-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, FeaturesSection, ExplainSection,AdvanceSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'landing_724';
}

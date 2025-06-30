import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwind-card',
  imports: [CommonModule],
  templateUrl: './tailwind-card.component.html',
  styleUrl: './tailwind-card.component.css',
})
export class TailwindCardComponent {
  @Input() title = 'Tailwind Card';
  @Input() description = 'This is a beautiful card styled with Tailwind CSS utility classes.';
  @Input() imageUrl?: string;
  @Input() badges: string[] = ['CSS', 'Responsive', 'Modern'];
  @Input() showButton = true;
  @Input() buttonText = 'Learn More';
}

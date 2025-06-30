import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-material-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent {
  @Input() title = 'Material Card';
  @Input() subtitle = 'This is a subtitle';
  @Input() content = 'This is the content of the card using Angular Material components.';
  @Input() imageUrl?: string;
  @Input() showActions = true;
}

import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavConfig, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule, RouterModule, NgbTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'Vishali Dogra';
  @Input() disabled = true;
  constructor(config: NgbNavConfig){
    config.destroyOnHide = false;
		config.roles = false;
  }
}

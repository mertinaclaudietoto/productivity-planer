import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'producivity-planer';
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly isstaging= !(environment as any).production
}

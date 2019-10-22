import { Component } from '@angular/core';
import { ResttestService } from './resttest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-api';

  constructor(private resttestService: ResttestService) { }

  salvar() {
    this.resttestService.getConfig()
      .subscribe((data) => console.log(data));
  }
}

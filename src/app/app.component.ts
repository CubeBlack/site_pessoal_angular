import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina_angular';

  showFiller = false;

  //abrir url ao clicar
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}

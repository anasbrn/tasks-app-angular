import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-zone',
  standalone: true,
  template: `
    <h1>Compteur : {{ compteur }}</h1>
    <p>Statut : {{ statut }}</p>
  `
})
export class TestZoneComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {
  }
  compteur = 0;
  statut = 'Initialisé';

  ngOnInit() {
    // Avec Zone.js : La vue se met à jour toutes les secondes.
    // SANS Zone.js (Zoneless) : Le chiffre reste à 0 à l'écran,
    // même si la variable change en arrière-plan.
    setInterval(() => {
      this.cdr.detectChanges(); // force detect changes
      this.compteur++;
      this.statut = 'En cours...';
      console.log('Valeur réelle du compteur :', this.compteur);
    }, 1000);
  }
}

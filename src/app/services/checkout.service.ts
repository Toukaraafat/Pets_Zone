import { Injectable } from '@angular/core';

import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService  {
  constructor(private snackBar: MatSnackBar) {}

  showPopup(message: string) {
    const config = new MatSnackBarConfig();
    config.duration = 5000;

    // Add inline styles directly to the content of the Snackbar
    config.panelClass = ['custom-snackbar'];
    config.verticalPosition = 'top';
    config.data = { style: { color: 'black', 'text-align': 'center', 'font-size': '16px' } };

    this.snackBar.open(message, 'Close', config);
  }
}

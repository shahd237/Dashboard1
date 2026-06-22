import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  imports: [RouterLink],
  template: `<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Cairo,sans-serif;direction:rtl"><div style="text-align:center"><p>للمتابعة اذهب إلى <a routerLink="/forgot-password">نسيت كلمة المرور</a></p></div></div>`,
})
export class ResetPassword {}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeroComponent],
  providers: [HeroService],
})
export class HeroModule {}

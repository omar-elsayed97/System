import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sys-hero',
  template: `
    <section [ngStyle]="{ backgroundImage: 'url(' + bg + ')' }">
      <div class="overlay"></div>
      <div style="max-width: 450px; margin: 0 auto; position: relative">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        position: relative;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        border-radius: 15px;
        padding: 15px;
        text-align: center;
        color: #fff;
        width: calc(100% - 30px);
        margin: 15px auto;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;
        overflow: hidden;
      }

      h2 {
        margin-bottom: 20px;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 0;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  @Input() public bg?: string;
  @Input() public title?: string;
  @Input() public description?: string;

  public constructor() {}

  public ngOnInit(): void {}
}

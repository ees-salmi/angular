/*import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  @Input() size: number | string = 4;
  @Input() color: string = '';
  @Input() isCircle: boolean = false;
  @Input() circleSize: number | string = '4';
  @Input() circleColor: string = '';

  iconClasses: {[key: string]: boolean} = {};
  circleClasses: {[key: string]: boolean} = {};
  iconStyles: {[key: string]: string} = {};
  circleStyles: {[key: string]: string} = {};

  ngOnInit(): void {
    this.setIconClasses();
    this.setCircleClasses();
    this.setIconStyles();
    this.setCircleStyles();
  }

  private setIconClasses(): void {
    this.iconClasses = {
      'mix-icon': true,
      'mix-icon--default-size': !this.size,
      [`mixi-${this.name}`]: true,
      [`mix-icon--${this.color}`]: true,
      [`mix-icon--${this.size}`]: this.size && typeof this.size !== 'number'
    };
  }

  private setCircleClasses(): void {
    this.circleClasses = {
      'mix-icon-circle': true,
      'mix-icon-circle--default-size': !this.circleSize,
      [`mix-icon-circle--${this.circleColor}`]: true,
      [`mix-icon-circle--${this.circleSize}`]: typeof this.circleSize && typeof this.circleSize !== 'number'
    };
  }

  private setIconStyles(): void {
    if (this.size && typeof this.size === 'number') {
      this.iconStyles.fontSize = `${this.size}px`;
    }
  }

  private setCircleStyles(): void {
    if (this.circleSize && typeof this.circleSize === 'number') {
      this.circleStyles.width = `${this.circleSize}px`;
      this.circleStyles.height = `${this.circleSize}px`;
    } else if (this.size && typeof this.size === 'number') {
      const calculatedSize = calculateIconCircleSize(this.size);
      this.circleStyles.width = `${calculatedSize}px`;
      this.circleStyles.height = `${calculatedSize}px`;
    }
  }
}*/

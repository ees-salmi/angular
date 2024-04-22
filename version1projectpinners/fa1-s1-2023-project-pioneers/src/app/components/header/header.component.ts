import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string = "khadija";
  searchValue: string = '';

  constructor(private headerService: HeaderService) {}

  onInputChange() {
    this.headerService.setSearchValue(this.searchValue);
  }
}

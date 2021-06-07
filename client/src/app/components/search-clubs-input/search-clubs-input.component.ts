import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchClubsService } from 'src/app/services/search-clubs.service';
import { startWith, map } from 'rxjs/operators';
import { Club } from 'src/app/interfaces/clubs.interface';

@Component({
  selector: 'app-search-clubs-input',
  templateUrl: './search-clubs-input.component.html',
  styleUrls: ['./search-clubs-input.component.scss']
})
export class SearchClubsInputComponent implements OnInit {

  clubs!: Club[];
  selectedClub: any;
  club = new FormControl();
  filteredOptions!: any;

  constructor(
    private searchClubsService: SearchClubsService
  ) { }

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs() {
    this.searchClubsService.getClubs().subscribe(( response: any ) => {
      this.clubs = response;
      this.filteredOptions = this.club.valueChanges
        .pipe(
          startWith(''),
          map(name => this._filter(name)),
        );
    });
  }

  getClubDetails(club: Club ) {
    this.searchClubsService.getClubByName(club.code).subscribe(( club: Club[]) => {
      console.log(club[0]);
      this.selectedClub = club[0];
    });
  }

  private _filter(value: string): Club[] {
    return this.clubs.filter(option=>
      option.name.toLowerCase().includes(value.toLowerCase()));
  }

}

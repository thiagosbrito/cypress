import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchClubsInputComponent } from './search-clubs-input/search-clubs-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchClubsInputComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SearchClubsInputComponent]
})
export class ComponentsModule { }

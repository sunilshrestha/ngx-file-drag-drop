import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FileValidators, NgxFileDragDropComponent, EmptyPlaceholderDirective } from 'projects/ngx-file-drag-drop/src/public-api';

@Component({
    selector: 'app-root',
    template: `
        <ngx-file-drag-drop 
          [formControl]="fileControl" 
          activeBorderColor="#3F51B5" 
          multiple 
          (valueChanged)="onValueChange($event)">
            <ng-template emptyPlaceholder>
                <div style="display:flex; flex-direction:column;align-items: center; row-gap: 4px;">
                  <span><mat-icon>add_a_photo</mat-icon></span>
                  <span style="font-weight: 500;">Upload Photos</span>
                  <span>Drop files or click to select</span>
                </div>
            </ng-template>
        </ngx-file-drag-drop>
    `,
    styles: [],
    standalone: true,
    imports: [ReactiveFormsModule, NgxFileDragDropComponent, EmptyPlaceholderDirective, MatIconModule, JsonPipe]
})
export class AppComponent implements OnInit {

  fileControl = new FormControl([], [FileValidators.required,FileValidators.uniqueFileNames]);

  onValueChange(file: File[]) {
    console.log(file)
  }
  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) => console.log('value changed!!'))
  }
}

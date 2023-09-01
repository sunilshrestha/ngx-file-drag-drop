# ngx-file-drag-drop

#### Check out the [Demo](https://stackblitz.com/edit/ngx-file-drag-drop)

## Install

```
npm i ngx-file-drag-drop
```

## API reference

### [Standalone API](https://angular.io/guide/standalone-components)

```ts
import { NgxFileDragDropComponent } from 'ngx-file-drag-drop';

@Component({
  imports: [
    NgxFileDragDropComponent
  ]
})
```

### NgxFileDragDropComponent

selector: `<ngx-file-drag-drop>`

implements: [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) to work with angular forms

**Additionnal properties**

| Name                                                     | Description                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------------ |
| _@Input()_ multiple: `boolean`                           | Allows multiple file inputs, `false` by default                          |
| _@Input()_ accept: `string`                              | Any value the native `accept` attribute can get. Doesn't validate input. |
| _@Input()_ disabled: `boolean`                           | Disable the input.                                                       |
| _@Input()_ emptyPlaceholder : `string`                   | Placeholder for empty input, default `Drop file or click to select`      |
| _@Input()_ displayFileSize : `boolean`                   | Show file size in chip rather than in tooltip, default `false`           |
| _@Input()_ activeBorderColor: `string`                   | A css color for when file is dragged into drop area, default `purple`    |
| _@Output()_ valueChanged:`EventEmitter<File[]>`          | Event emitted when input value changes                                   |
| addFiles():`(files: File[] \| FileList \| File) => void` | Update input                                                             |
| removeFile():`(file:File) => void`                       | Removes the file from the input                                          |
| clear(): `() => void`                                    | Removes all files from the input                                         |
| files: `File[]`                                          | Getter for form value                                                    |
| isEmpty: `boolean`                                       | Whether the input is empty (no files) or not                             |

### Custom Placeholder

selector: `emptyPlaceholder`

Usage:

```ts
import { NgxFileDragDropComponent, EmptyPlaceholderDirective } from 'ngx-file-drag-drop';

@Component({
  imports: [
    NgxFileDragDropComponent, EmptyPlaceholderDirective
  ]
})
```

```html
<ngx-file-drag-drop>
  <ng-template emptyPlaceholder>
    <div style="display:flex; flex-direction:column;align-items: center; row-gap: 4px;">
      <span style="font-weight: 500;">Upload Files</span>
       <span>Drop files or click to select</span>
    </div>
  </ng-template>
</ngx-file-drag-drop>
```

```css
  .empty-placeholder {
    
  }
```

### BytePipe

Usage:

```html
<span>{{ 104857600 | byteFormat }}</span>
```

_Output:_ 100 MB

### Validators

```ts
import { FileValidators } from "ngx-file-drag-drop";
```

| Validator                             | Description                            |
| ------------------------------------- | -------------------------------------- |
| `uniqueFileNames`                     | Disallow two files with same file name |
| `fileExtension(ext: string[])`        | Required file extensions               |
| `fileType(types: string[] \| RegExp)` | Required Mime Types                    |
| `maxFileCount(count: number)`         | Max number of files                    |
| `maxFileSize(bytes: number)`          | Max bytes allowed per file             |
| `maxTotalSize(bytes: number)`         | Max total input size                   |
| `required`                            | At least one file required             |

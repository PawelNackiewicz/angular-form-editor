import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill'
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    QuillModule.forRoot(),
    EditorModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

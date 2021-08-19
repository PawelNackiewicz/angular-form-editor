import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  editorContent: string = 'My Document\'s Title'

  editor: Editor;
  html: '';
  
  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  options = {
    placeholderText: 'Edit Your Content Here! Pawi',
    charCounterCount: false,
    toolbarButtons: [
      ['bold', 'italic', 'underline', 'paragraphFormat', 'formatOL', 'formatUL'],
      ['insertHTML', 'undo', 'redo', 'html']
    ]
  }

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']                         // link and image, video
    ]
  }
  editorModel = [{
    attributes: {
      font: 'roboto'
    },
    insert: 'test'
  }]
  textFormat = 'Siema'
}

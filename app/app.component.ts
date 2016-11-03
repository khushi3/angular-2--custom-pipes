import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <h2> {{name | capitalize}} </h2>

  
  `
})

export class AppComponent { 
  private name;
  private birthday;
  private price;
  // private todos= [
  // {
    //   text='do shopping'
    // },
    // {
      //   text= 'watch movies'
      // }
      // ];

      constructor () {
        this.name = 'khushi pandey';
        this.birthday=new Date('1/3/1990');
        this.price= 500;
        // this.todos;
      }

    }

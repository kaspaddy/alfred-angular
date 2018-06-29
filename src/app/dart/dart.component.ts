import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';


@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent implements OnInit {

  player1Control = new FormControl('', [Validators.required]);
  player2Control = new FormControl('', [Validators.required]);

  players: any[] = [
    {name: 'Patrick'},
    {name: 'Test'},
    {name: 'Alex'},
    {name: 'Flo'},
  ];

  player1: any;
  player2: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  start() {
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.players.push({name: result});
    });
  }
}

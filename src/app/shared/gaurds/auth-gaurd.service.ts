import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild{

    canActivate(){
        console.log('Checking if this works');
        return true;
    }

    canActivateChild(){

          console.log('Checking if this works woth child');
        return true;
    }
}
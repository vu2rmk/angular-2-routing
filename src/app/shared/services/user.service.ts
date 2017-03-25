import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([

    {

        id:1,
        name: 'Ram',
        username: 'vu2rmk',
        avatar : 'https://smallbiztrends.com/wp-content/uploads/2014/05/mute-a-twitter-user-660x369.jpg'
    },
    {
        id: 2,
        name: 'asdasd',
        username: 'adasdf',
        avatar: 'http://www.fancyicons.com/free-icons/124/web-2.0/png/256/twitter_256.png'
    },
    {
        id: 3,
        name: 'awfawe',
        username: 'fkyfjyh',
        avatar: 'http://i.ndtvimg.com/mt/2013-12/Twitter_silhouette_REUTERS_360x270.jpg'
    }

]);

@Injectable()
export class UserService {

    //get all the Users
    getUsers(){

        return usersPromise;
    }


    //get a partivular user
    getUser(username){

        return usersPromise.then(users => users.find(user => user.username === username));

        // let user = usersPromise.then(users => {

        //     users.find(user => {

        //         return user.username === username;
        //     });
        // });

        // return user;
    }



}
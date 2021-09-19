import { Component, OnInit } from '@angular/core';
import { User } from '../../usr/user';

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})

export class UserComponent implements OnInit {

    u: User = {
        firstName : '',
        lastName : '',
        email : ''
    }

    user!: User[];
    loaded: boolean = false;
    isExpand: boolean = true;
    isAdd: boolean = true;
    currentClass = {};
    currentStyles = {};
    showExtend: boolean = false;

    constructor() {
        console.log("hello");
    }

    add2num(num1: number, num2: number): number {
        return num1 + num2 + 4;
    }

    ngOnInit() {
        
            this.user = [{
                firstName : 'C. Yashwanth',
                lastName : 'Kumar',
                email : 'cyashu2000@gmail.com',
                age : 20,
                address : {
                    street : 'saint st.',
                    city :  'kdp'
                },
                image: 'http://lorempixel.com/600/600/people/3',
                isActive: true,
                isBalance: 500,
                registered: new Date('07/14/2000'),
                hide: true
            },
    
            {
                firstName : 'ABD',
                lastName : '- The Legend',
                age : 34,
                email : 'cyashuyashu183@gmail.com',
                address : {
                    street : 'pretorea st.',
                    city :  'SA'
                },
                image: 'http://lorempixel.com/600/600/people/4',
                isActive: false,
                isBalance: 800,
                registered: new Date('02/17/1986'),
                hide: true
            },
    
    
             {
                firstName : 'VK',
                lastName : '- The G.O.A.T',
                email : 'cyashu17@protonmail.com',
                age : 20,
                address : {
                    street : 'Delhi',
                    city :  'Ind'
                },
                image: 'http://lorempixel.com/600/600/people/1',
                isActive: true,
                isBalance: 200,
                registered: new Date('11/05/1989'),
                hide: true
            }];
            this.loaded = true;
            this.setCurrentClass();
            this.setCurrentStyles();

    }

    sayHello() {
        console.log('hello by');
    }

    setCurrentClass() {
        this.currentClass = {
            'btn-warning' : !this.isAdd
        }
    }

    setCurrentStyles() {
        this.currentStyles = {
            'text-transform' : this.isExpand ? '' : 'uppercase' 
        }
    }

    onClick(e) {
        this.showExtend = true;
    }

    addUser()
    {
        this.user.unshift(this.u);
        this.u.isActive = true;
       this.u.hide = true;

       this.u = {
        firstName : '',
        lastName : '',
        age : null,
        address: {
            street : '',
            city : ''
        },
        isBalance : null,
        registered : ''
       }
       this.showExtend = false;

    }

    expand(e) {
        this.isExpand = true;
    }

    dataHide(us : User)
    {
        us.hide = !us.hide;
    }

    onSubmit(u) {
        this.user.push(u);
    }
}



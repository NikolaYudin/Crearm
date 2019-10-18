import { Component, OnInit } from '@angular/core';
import { DataService } from './user.service';
import { User } from './user';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [DataService]
})

export class UserComponent implements OnInit{
    user: User = new User();   // изменяемый товар
    users: User[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadUsers();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data: User[]) => this.users = data);
    }
    // сохранение данных
    save() {
        if (this.user.id == null) {
            this.dataService.createUser(this.user)
                .subscribe((data: User) => this.users.push(data));
        } else {
            this.dataService.updateUser(this.user)
                .subscribe(() => this.loadUsers());
        }
        this.cancel();
    }
    editProduct(p: User) {
        this.user = p;
    }
    cancel() {
        this.user = new User();
        this.tableMode = true;
    }
    delete(p: User) {
        this.dataService.deleteUser(p.id)
            .subscribe(() => this.loadUsers());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}
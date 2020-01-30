import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    private loading:boolean = false;

    private adminToggle:boolean = false;

    //classes on alert
    private alertAdd = {
        hidden: true
    };

    private loginAdd = {
        shake: false
    };

    //user entered values
    public email = "";
    public password = "";

    //injecting auth service
    constructor(
        private router: Router,
        private _accountService: AccountService
    ) {}

    ngOnInit() {
        console.log(this.adminToggle)
    }

    //login function
    public login() {
        this.loginAdd.shake = false;
        this.loading = true;
        this._accountService.authenticate(this.email, this.password).subscribe(
            data => {
                if (data == false) {
                   //if invalid details
                    this.password = "";
                    this.alertAdd.hidden = false;
                    this.loginAdd.shake = true;
                    this.loading = false;
                    return;
                }
                //if details are correct i.e data has some values
                sessionStorage.setItem('prn', data);
                this.router.navigate(["/student/notifications"]);
            },
            err => {
               
            }
        );
    }
}

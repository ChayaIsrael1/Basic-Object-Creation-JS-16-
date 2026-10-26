class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    print(){
        console.log(`Owner: ${this.owner} balance: ${this.balance}`)
    }
    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        if (this.balance -= amount<0)
        throw new Error("insufficient funds")
    else { this.balance -= amount}
    } 

}

class BankAccountAllowOverdrafts extends BankAccount{
    constructor(owner, balance){
        super(owner, balance)
    }
    withdraw(amount){
        this.balance = this.balance-amount
    } 
}

class BankAccountEarnInterest extends BankAccount{
    constructor(owner, balance){
        super(owner, balance)
    }
        deposit(amount){
        this.balance += amount*0.05
    }
}

class Bank{
    constructor(){
        this.Accounts = []
        //not same name owner
        console.log("")
        var readlineSync = require('readline-sync');
        var end = false
        while (!end)
        {
        var choise = readlineSync.question('What you want to do - to create an account enter 1, to transfer enter 2 , to show balance enter 3 , and to exit the program enter 4');
        switch (choise){
            case 1:
                var name = readlineSync.question('to create an account enter name that not have account yet');
                const Try = false
                this.Accounts.filter((account)=>{
                    if (account[owner]==name)
                    {Try = true}
                })
                if (Try = true)
                {
                var bankType = readlineSync.question('to create an account enter 1, to create account that earn interest enter 2, to create account that allow overdrafts enter 3');
                var balance = readlineSync.question('enter integer positive number to enter balance')
                //check balane
                //create one from 3 type of acccount
                }
                else 
                {
                console.log('that name already taken, invalid input, try again');
                }
            break
            case 2:

            break
            case 3:

            break
            case 4:
                end=true
            break
            default:
               console.log('invalid input, try again');
            break

                
        }
    }
    }
    addAccount(account){
        this.Accounts.push(account)
    }
    transfer(fromName, toName, amount){
        const from = this.Accounts.filter(account => {
            account[owner]=fromName
        });
        const to = this.Accounts.filter(account => {
            account[owner]=toName
        });
        try{from.withdraw(amount)
            to.deposit(amount)
        }
        catch{console.log(`cant make the transfer, insufficient funds`)} 
    }

    showBalances() {
        this.Accounts.forEach(account => {
            account.print()
        });
    }

}
 var accounts = [ ];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var i;
        var acc;
        for (i=0; i<accounts.lenght; i++){
            if (accounts[i].username === username) {
            acc = accounts[i];
            }
        };

        return accounts[acc];
}

function getBalance (acc) {
	account =  getAccount (acc);
        return function() {
        return accounts.balance;
    };
        
}


function balance(account,amount){
    
    this.currentAmount = getBalance(account)('balance');
    this.account = getAccount(account);
    this.amount = amount;
    
    this.deposit = function(account, amount){
        if (typeof(amount) === 'number' && amount > 0) {
            return account.balance += amount;
        } else {
            console.log('Error: Wrong value');
        };
	
    };
    
    this.withdraw = function(account, amount) {
	 if (typeof(amount) === 'number' && amount > 0) {
            return account.balance -= amount;
        } else {
            console.log('Error: Wrong value');
        };
    };
};

 

 



//tests

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

var x =  new balance('Andrew',100).deposit();
console.log(x);

//withdraw(andrewsAccount, 'test');
//console.log(getBalance(andrewsAccount));

//var existingAccount = getAccount('Andrew');
//console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);
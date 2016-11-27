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

        return accounts[acc]
}

function deposit (account, amount) {
        if (typeof(amount) === 'number' && amount > 0) {
            return account.balance += amount;
        } else {
            console.log('Error: Wrong value');
        };
	
}

function withdraw (account, amount) {
	 if (typeof(amount) === 'number' && amount > 0) {
            return account.balance -= amount;
        } else {
            console.log('Error: Wrong value');
        };
}

function getBalance (account) {
	return account.balance;
}

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);
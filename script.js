
// DEFINING VARIABLES
//Acount 1
let account1_name = "Luna Njei";
let account1_balance = 1000;
let account1_currency = "USD";
let account1_type = "Savings";

//Acount 2
let account2_name = "Lemuel Njei";
let account2_balance = 500;
let account2_currency = "USD";
let account2_type = "Checking";

//Acount 3
let account3_name = "Leroy Njei";
let account3_balance = 200;
let account3_currency = "USD";
let account3_type = "Savings";

//Account 4-foreign currency
let account4_name = "Legend Njei";
let account4_balance = 600;
let account4_currency = "Euro";
let account4_type = "Checking";

//Defining transactions
let deposit_amount_1 = 200; //luna wants to deposit 200
let deposit_amount_2 = 100; //lemuel wants to deposit 100

let withdrawal_amount_1 = 300; // Leroy wants to withdraw 300
let withdrawal_amount_2 = 200; // legend wants to withdraw 200

let transfer_amount_1 = 100; // luna wants to transfer 100 to lemuel
let transfer_amount_2 = 100; // legend wants to transfer 100 to luna

//Deposit 1; Luna
account1_balance = account1_balance + deposit_amount_1
console.log(`${account1_name} new balance after deposit: ${account1_balance} ${account1_currency}`);

//Deposit 1; Lemuel
account2_balance = account2_balance + deposit_amount_2
console.log(`${account2_name} new balance after deposit: ${account2_balance} ${account2_currency}`);

//Withdrawal 1; Leroy
//account3 balance = 200
//withdrawal amount = 300
//acount name = leroy
//acount currency= usd
//checking if balance is enough
if (account3_balance>=withdrawal_amount_1) {account3_balance=account3_balance-withdrawal_amount_1;
    console.log(`${account3_name} new balance after withdrawal: ${account3_balance} ${acount3_currency}`);
}
else {console.log(`withdrawal denied for ${account3_name}; insuffient funds`);}

//Withdrawal 2; Legend
//account3 balance = 600
//withdrawal amount = 200
//acount name = legend
//acount currency= Euro
//checking if balance is enough
if (account4_balance>=withdrawal_amount_1) {account4_balance=account4_balance-withdrawal_amount_2;
    console.log(`${account4_name} new balance after withdrawal: ${account4_balance} ${account4_currency}`);
}
else {console.log(`withdrawal denied for ${account3_name}; insuffient funds`);}

//transfer 1; Luna to lemuel
//account1 balance =1200
//transfer amount = 100
//acount name = luna
//acount currency= usd
//checking if balance is enough
if (account1_balance<transfer_amount_1) {
    console.log(`transfer failed: insuffient funds ${account1_balance}`)  
}
//checking currency mismatch
else if (account1_currency!=account2_currency) { 
    console.log (`transfer failed: currency mismatched ${account1_currency} Vs ${account2_currency}`)}

//checking currency match
else if (account1_currency== account2_currency) {account2_balance=account2_balance+transfer_amount_1;
    account1_balance = account1_balance-transfer_amount_1;

    console.log(`${account1_name} balance after transfer; ${account1_balance} ${account2_currency}`)
    console.log(`${account2_name} balance after transfer: ${account2_balance} ${account1_currency}`)
    }
    
//transfer 2; Legend to luna
//account4 balance after withdrawal = 400
//transfer amount = 100
//acount name = legend
//acount currency= Euro
//checking if balance is enough
if (account4_balance<transfer_amount_2) {
    console.log(`transfer failed: insuffient funds ${account4_balance}`)  
}
//checking currency mismatch
else if (account4_currency!=account1_currency) { 
    console.log (`transfer failed: currency mismatched ${account4_currency} Vs ${account1_currency}`)}

//checking currency match
else if (account4_currency== account1_currency) {account1_balance=account1_balance+transfer_amount_2;
    account4_balance = account4_balance-transfer_amount_2;

    console.log(`${account4_name} balance after transfer; ${account4_balance} ${account4_currency}`)
    console.log(`${account1_name} balance after transfer: ${account1_balance} ${account1_currency}`)
    }
    
//monthly maintenance

if(account1_type == "Savings") {account1_balance= account1_balance + (account1_balance * 0.02);
console.log(`${account1_name} new balance after 2% interest added: ${account1_balance} ${account1_currency}`)} 
else if (account1_type== "checking") {account1_balance= account1_balance -50
console.log(`${account1_name} new balance after deducting 50: ${account1_balance} ${account1_currency}` )
}

if(account2_type == "Savings") {account2_balance= account2_balance + (account2_balance * 0.02);
console.log(`${account2_name} new balance after 2% interest added: ${account2_balance} ${account2_currency}`)} 
else if (account2_type== "Checking") {account2_balance=account2_balance -50
console.log(`${account2_name} new balance after deducting 50: ${account2_balance} ${account2_currency}` )
}

if(account3_type == "Savings") {account3_balance= account3_balance + (account3_balance * 0.02);
console.log(`${account3_name} new balance after 2% interest added: ${account3_balance} ${account3_currency}`)} 
else if (account3_type== "Checking") {account3_balance=account3_balance -50
console.log(`${account3_name} new balance after deducting 50: ${account3_balance} ${account3_currency}` )
}

if(account4_type == "Savings") {account4_balance= account4_balance + (account4_balance * 0.02);
console.log(`${account4_name} new balance after 2% interest added: ${account4_balance} ${account4_currency}`)} 
else if (account4_type== "Checking") {account4_balance=account4_balance -50
console.log(`${account4_name} new balance after deducting 50: ${account4_balance} ${account4_currency}` )
}

//account with higest balance
//let 1 eur =2 usd
//conversion rate
//convert legends balance to usd for comparison
if(account4_currency=="Euro") {account4_balance = account4_balance * 4;}

//let account 1 be both higest and lowest
let highest_name = account1_name
let highest_balance=account1_balance
let lowest_name = account1_name
let lowest_balance = account1_balance
//checks for highest
//compare highest balance with account 2
if (account2_balance>highest_balance) {highest_name=account2_name; highest_balance=account2_balance
}
//compare highest balance with account 3
if (account3_balance>highest_balance) {highest_name = account3_name; highest_balance=account3_balance;}
//compare highest balance with account 4
if (account4_balance>highest_balance) {highest_name = account4_name; highest_balance = account4_balance;
    }
//checks for highest
//compare highest balance with account 2
if (account2_balance < lowest_balance) {lowest_balance = account2_balance; lowest_name=account2_name;}
if (account3_balance<lowest_balance) {lowest_balance = account3_balance; lowest_name = account3_name;
}

if (account4_balance <lowest_balance) {lowest_balance = account4_balance; lowest_name = account4_name
}

console.log (`highest balance is ${highest_balance} Account name = ${highest_name} in usd`);
console.log (`lowest balance is ${lowest_balance} Account name = ${lowest_name}`);

//status check
let account1_status;
if (account1_balance > 0) {account1_status = "Active";}
    else if (account1_balance === 0) { account1_status = "empty";}
    else account1_status = "overdrawn"; 
    console.log(`${account1_name} Status:, ${account1_status} account balance:, ${account1_balance}`)
    
let account2_status
if (account2_balance > 0) {account2_status = "Active";}
    else if (account2_balance === 0) { account2_status = "empty";}
    else account2_status = "overdrawn"; 
    console.log(`${account2_name} Status:, ${account2_status} account balance:, ${account2_balance}`)
    

  let account3_status
if (account3_balance > 0) {account3_status = "Active";}
    else if (account3_balance === 0) { account3_status = "empty";}
    else account3_status = "overdrawn"; 
console.log(`${account3_name} Status:, ${account3_status} account balance:, ${account3_balance}`)

let account4_status
if (account4_balance > 0) {account4_status = "Active";}
    else if (account4_balance === 0) { account4_status = "empty";}
    else account4_status = "overdrawn";
    console.log(`${account4_name} Status:, ${account4_status} account balance:, ${account4_balance}`)
    
    //final transaction summary
    console.log("final_account_balnace" )
    console.log(`${account1_name}; type; ${account1_type} account balance:${account1_balance} account status: ${account1_status}`)
       console.log(`${account2_name}; type; ${account2_type} account balance:${account2_balance} account status: ${account2_status}`)
          console.log(`${account3_name}; type; ${account3_type} account balance:${account3_balance} account status: ${account3_status}`)
              console.log(`${account4_name}; type; ${account4_type} account balance:${account4_balance} account status: ${account1_status}`)

             
              
              // Bonus Challenge: Transfer from foreign currency account

// Check currency mismatch
if (account4_currency != account1_currency) {
    console.log("Transfer failed: currency mismatch");

    // Apply conversion rate: 1 EUR = 1.1 USD
    let conversion_rate = 1.1;
    let converted_amount = transfer_amount_2 * conversion_rate;

    // Check if Legend has enough balance
    if (account4_balance >= transfer_amount_2) {
        account4_balance -= transfer_amount_2;
        account1_balance += converted_amount;

        console.log(`Transaction successful from ${account4_name} to ${account1_name}: ${transfer_amount_2} EUR converted to ${converted_amount} USD`);
        console.log(`${account4_name} new balance: ${account4_balance} Euro`);
        console.log(`${account1_name} new balance: ${account1_balance} USD`);
    } else {
        console.log(`Withdrawal denied for ${account4_name}: insufficient funds`);
    }
} else {
    // If currencies were the same
    if (account4_balance >= transfer_amount_2) {
        account4_balance -= transfer_amount_2;
        account1_balance += transfer_amount_2;

        console.log(`Transaction successful from ${account4_name} to ${account1_name}: ${transfer_amount_2} USD`);
        console.log(`${account4_name} new balance: ${account4_balance} USD`);
        console.log(`${account1_name} new balance: ${account1_balance} USD`);
    } else {
        console.log(`Withdrawal denied for ${account4_name}: insufficient funds`);
    }
}

const {Block}=require('./blockchain/block');
const {Blockchain}=require('./blockchain/gen_block');



let btc_coin=new Blockchain();

console.log("Mining first block");
btc_coin.AddBlock(new Block(1,"10/03/2023",{name:"Rama"}));
console.log("Mining second block");
btc_coin.AddBlock(new Block(2,"11/03/2023",{name:"Rajnikant"}));

console.log(JSON.stringify(btc_coin,null,5));
btc_coin.IsBlockchainValid();

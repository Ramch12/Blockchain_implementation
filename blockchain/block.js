"use strict"


const SHA256=require('crypto-js/SHA256');

class Block
{
    constructor(index,timestamp,data,previoushash){

        this.index=index;
        this.previoushash=previoushash;
        this.timestamp=timestamp;
        this.data=data;
        this.hash=this.createBlockhash();
        this.hash=this.createBlockhash();
        this.nonce=0;

    };

    createBlockhash()
    {
        return SHA256(this.index+this.previoushash+this.timestamp+this.nonce+JSON.stringify(this.data)).toString();
    };

    mineBlock(difficulty)
    {
        while(this.hash.substring(0,difficulty)!==Array(difficulty+1).join("0"))
        {
            this.nonce++;
            this.hash=this.createBlockhash();
        };
        console.log("Block mined...",this.hash);
    }

}

exports.Block=Block;

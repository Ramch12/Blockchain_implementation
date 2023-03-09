"use strict"

const { Block } = require('./block');

class Blockchain {

    constructor() {

        this.chain = [this.createGenesisblock()];
        this.difficulty=5;

    };

    
    createGenesisblock() {

        return new Block('0', '09/03/2023', "FirstBlock", '0');

    };

    getLatestblock() {

        return this.chain[this.chain.length - 1];

    };

    AddBlock(new_block) {

        new_block.previoushash = this.getLatestblock().hash;
        new_block.mineBlock(this.difficulty);
        this.chain.push(new_block);

    };

    IsBlockchainValid() {

        for (var i = 1; i < this.chain.length; i++) {

            let current_block = this.chain[i];
            let previous_block = this.chain[i - 1];

            if (current_block.createBlockhash() !== current_block.hash) {
                console.log("Invalid blockchain");
                return;
            }

            if (previous_block.hash !== current_block.previoushash) {
                console.log("Invalid blockchain");
                return;
            }
        };

        if (i === 6) {
            console.log("Valid blockchain")
        }
    };

};

exports.Blockchain = Blockchain;

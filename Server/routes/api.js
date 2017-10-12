let express = require('express');
let router = express.Router();

// Contract
let PatentToken = require('../../Solidity/build/contracts/PatentToken.json');
let contract = require('truffle-contract');
let PatentTokenContract = contract(PatentToken);

// Web3
let Web3 = require('web3');
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
let web3 = new Web3(provider);

PatentTokenContract.setProvider(provider);

router.get('/wallet', function(req, res) {
    let wallet = req.query.wallet;
    PatentTokenContract.deployed().then((instance) => {
        return instance.balanceOf.call(wallet);
    }).then((balance) => {
        res.json({wallet: wallet, balance: balance.valueOf()});
    });
});



module.exports = router;

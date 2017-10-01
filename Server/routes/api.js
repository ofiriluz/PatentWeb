let express = require('express');
let router = express.Router();
let Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
let PatentToken = require('../build/contracts/PatentToken.json');
let contract = require('truffle-contract');

let PatentTokenContract = contract(PatentToken);
PatentTokenContract.setProvider(web3.currentProvider);
PatentTokenContract.deployed().then((instance)=>{console.log("HI")});

router.get('/wallet', function(req, res) {
    let wallet = req.query.wallet;
    PatentTokenContract.deployed().then((instance) => {
        console.log(instance);
        return instance.balanceOf.call(wallet);
    });
});

module.exports = router;

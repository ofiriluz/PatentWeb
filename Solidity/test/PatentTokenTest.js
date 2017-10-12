var web3 = global.web3;
var PatentToken = artifacts.require('./PatentToken.sol');

contract('PatentToken', function (accounts) {
    it("Should check that the owner has 1000 tokens", function () {
        return PatentToken.deployed().then((instance) => {
            token = instance;
            return token.balanceOf.call(accounts[0]);
        }).then((balance) => {
            assert.equal(balance.valueOf(), 1000, "First account does not have 1000 tokens");
        }).catch((err) => {
            throw err;
        });
    });

    it("Should transfer 10 tokens from the owner to the second account", function () {
        return PatentToken.deployed().then((instance) => {
            token = instance;
            return token.transfer(accounts[1], 10, {from: accounts[0], gas: 100000});
        }).then((result) => {
            return token.balanceOf.call(accounts[1]);
        }).then((firstBalance) => {
            assert.equal(firstBalance.valueOf(), 10, "10 Tokens were not passed to account 1");
            return token.balanceOf.call(accounts[0]);
        }).then((secondBalance) => {
            assert.equal(secondBalance.valueOf(), 990, "Account 0 does not have 990 tokens");
        }).catch((err) => {
            throw err;
        });
    });

    it("Should return the 10 tokens from the second account to the owner", function () {
        return PatentToken.deployed().then((instance) => {
            token = instance;
            return token.transfer(accounts[0], 10, {from: accounts[1], gas: 100000});
        }).then((result) => {
            return token.balanceOf.call(accounts[0]);
        }).then((firstBalance) => {
            assert.equal(firstBalance.valueOf(), 1000, "1000 Tokens were not passed to account 0");
            return token.balanceOf.call(accounts[1]);
        }).then((secondBalance) => {
            assert.equal(secondBalance.valueOf(), 0, "Account 1 does not have 0 tokens");
        }).catch((err) => {
            throw err;
        });
    });
});
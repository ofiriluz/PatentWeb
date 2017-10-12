var PatentToken = artifacts.require('./PatentToken.sol');

module.exports = function(deployer)
{
    const INITIAL_SUPPLY_DEPLOYMENT = 1000;
    deployer.deploy(PatentToken, INITIAL_SUPPLY_DEPLOYMENT);
};

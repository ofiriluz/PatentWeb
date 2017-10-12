pragma solidity ^0.4.0;

import "./libraries/SafeMath.sol";
import "./tools/Ownable.sol";
import "./PatentToken.sol";

contract PatentStore is Ownable
{
    using SafeMath for uint256;
    PatentToken private m_Token;
    address private m_WalletAddress;
    uint256 private m_WeiRate;

    function PatentStore(address aPatentToken, address aWallet, uint256 uWeiRate)
    {
        m_Token = PatentToken(aPatentToken);
        m_WalletAddress = aWallet;
        m_WeiRate = uWeiRate;
    }

    function() payable
    {
        buyTokensFromStore(msg.sender);
    }

    function buyTokensFromStore(address aBeneficiary) payable
    {
        require(aBeneficiary != 0x0);
        
    }

    function sellTokensToAccount()
    {

    }

    function setRate() Ownable
    {

    }
}

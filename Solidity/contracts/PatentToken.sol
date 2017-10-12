pragma solidity ^0.4.11;

import "./tools/Ownable.sol";
import "./tools/Lockable.sol";

import "./libraries/SafeMath.sol";

import "./interfaces/IERC20.sol";


contract PatentToken is IERC20, Ownable, Lockable
{
    using SafeMath for uint256;

    string public constant symbol = "PT";
    string public constant name = "PatentToken";
    uint public constant decimals = 18;

    uint256 private m_TotalSupply;
    mapping(address => uint256) private m_Balances;
    mapping(address => mapping(address => uint256)) private m_Allowed;

    event Mint(uint256 amount);
    event MintFinished();

    function PatentToken(uint uTotalSupply)
    {
        m_TotalSupply = uTotalSupply;
        m_Balances[msg.sender] = uTotalSupply;
    }

    function performTransfer(address aFrom, address aTo, uint256 uValue) private returns (bool bOutSuccess)
    {
        m_Balances[aFrom] = m_Balances[aFrom].sub(uValue);
        m_Balances[aTo] = m_Balances[aTo].add(uValue);
        Transfer(aFrom, aTo, uValue);
        bOutSuccess = true;
    }

    function totalSupply() constant external returns (uint256 uOutTotalSupply)
    {
        uOutTotalSupply = m_TotalSupply;
    }

    function balanceOf(address aOwner) constant external returns (uint256 uOutBalance)
    {
        uOutBalance = m_Balances[aOwner];
    }

    function transferFrom(address aFrom, address aTo, uint256 uValue) external returns (bool bOutSuccess)
    {
        bOutSuccess = performTransfer(aFrom, aTo, uValue);
    }

    function transfer(address aTo, uint256 uValue) external returns (bool bOutSuccess)
    {
        bOutSuccess = performTransfer(msg.sender, aTo, uValue);
    }

    function approve(address aSpender, uint256 uValue) external returns (bool bOutSuccess)
    {
        require((uValue == 0) || (m_Allowed[msg.sender][aSpender] == 0));

        m_Allowed[msg.sender][aSpender] = uValue;
        Approval(msg.sender, aSpender, uValue);

        bOutSuccess = true;
    }

    function allowance(address rOwner, address aSpender) constant external returns (uint256 uOutRemaning)
    {
        uOutRemaning = m_Allowed[rOwner][aSpender];
    }

    function mint(uint256 uAmount) Owner Lock external returns (bool bOutSuccess)
    {
        m_TotalSupply = m_TotalSupply.add(uAmount);
        m_Balances[msg.sender] = m_Balances[msg.sender].add(uAmount);
        Mint(uAmount);
        bOutSuccess = true;
    }

    function finishMinting() Owner Unlock external returns (bool bOutSuccess)
    {
        MintFinished();
        bOutSuccess = true;
    }
}

pragma solidity ^0.4.11;

contract IERC20
{
  function totalSupply() constant external returns (uint256 uOutTotalSupply);
  function balanceOf(address aOwner) constant external returns (uint256 uOutBalance);
  function transfer(address aTo, uint256 uValue) external returns (bool bOutSuccess);
  function transferFrom(address aFrom, address aTo, uint256 uValue) external returns (bool bOutSuccess);
  function approve(address aSpender, uint256 uValue) external returns (bool bOutSuccess);
  function allowance(address rOwner, address aSpender) constant external returns (uint256 uOutRemaining);

  event Transfer(address indexed aFrom, address indexed aTo, uint256 uValue);
  event Approval(address indexed aOwner, address indexed aSpender, uint256 uValue);
}

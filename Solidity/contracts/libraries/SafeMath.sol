pragma solidity ^0.4.11;

library SafeMath
{
    function mul(uint256 uA, uint256 uB) internal constant returns (uint256)
    {
        uint256 c = uA * uB;
        require(uA == 0 || c / uA == uB);
        return c;
    }

    function div(uint256 uA, uint256 uB) internal constant returns (uint256)
    {
        uint256 c = uA / uB;
        return c;
    }

    function sub(uint256 uA, uint256 uB) internal constant returns (uint256)
    {
        require(uB <= uA);
        return uA - uB;
    }

    function add(uint256 uA, uint256 uB) internal constant returns (uint256)
    {
        uint256 c = uA + uB;
        require(c >= uA);
        return c;
    }
}

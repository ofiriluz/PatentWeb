pragma solidity ^0.4.0;

contract Ownable
{
    address internal m_Owner;

    function Ownable() internal
    {
        m_Owner = msg.sender;
    }

    modifier Owner()
    {
        require(msg.sender == m_Owner);
        _;
    }

    function transferOwnership(address newOwner) public Owner
    {
        if (newOwner != address(0))
        {
            m_Owner = newOwner;
        }
    }

    function owner() public returns(address aOutOwner)
    {
        aOutOwner = m_Owner;
    }
}

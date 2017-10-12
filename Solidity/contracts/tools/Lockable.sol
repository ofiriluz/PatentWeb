pragma solidity ^0.4.0;

contract Lockable
{
    bool internal m_Lock;

    function Lockable() internal
    {
        m_Lock = false;
    }

    modifier Lock()
    {
        require(m_Lock);
        m_Lock = true;
        _;
    }

    modifier Unlock()
    {
        require(!m_Lock);
        m_Lock = false;
        _;
    }
}

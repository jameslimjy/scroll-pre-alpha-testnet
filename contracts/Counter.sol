// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint8 public currentCount;

    function addCount() external {
        currentCount++;
    }
}

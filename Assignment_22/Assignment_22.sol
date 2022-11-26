// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Array {
    uint[] public arr= [1, 2, 3, 4, 5,6,7,8,9];

    function remove(uint _index) public {
        require(_index < arr.length, "index out of bound");

        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    function getArr() public view returns (uint[] memory) {
        return arr;
    }

}

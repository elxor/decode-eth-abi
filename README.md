# Decode Ethereum Abi

JS tool to decode abi data params from ethereum transaction.

Support human standard token abi. It's a standard interface for tokens ERC-20.

ERC-20 Token Standard Abi Interface Specification: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md

Live demo: [decode-eth-abi](https://elxor.github.io/decode-eth-abi)

Try this data abi:

```
0xa9059cbb000000000000000000000000bc87d919b6f097ef0c369b701f18b5efd0691e500000000000000000000000000000000000000000000000006124fee993bc0000
```

It should be decoded to:

```
{
    "name": "transfer",
    "params": [
        {
            "name": "_to",
            "value": "0xbc87d919b6f097ef0c369b701f18b5efd0691e50",
            "type": "address"
        },
        {
            "name": "_value",
            "value": "7000000000000000000",
            "type": "uint256"
        }
    ]
}
```
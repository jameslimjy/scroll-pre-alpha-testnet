# Building on Scroll
Simple counter smart contract deployed to [Scroll's pre-alpha testnet](https://guide.scroll.io/developers/building-on-scroll).

## Steps
1. Get test ETH and USDC tokens on L1 from [faucet](https://scroll.io/prealpha/faucet)
2. Use [bridge](https://scroll.io/prealpha/bridge) to transfer some TSETH from L1 to L2
3. Get wallet private key and paste it into .env (need to create this file)
4. deploy SC `npx hardhat run scripts/deploy.js --network scrollPrealpha`
5. interact with SC `npx hardhat run scripts/addToCount.js`


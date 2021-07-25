async function main() {
    // Get the deployer which is set set inside inside .env and referenced by hardhat.config.js
    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const MyFirstContract = await ethers.getContractFactory("MyFirstContract");
    const deployedContract = await MyFirstContract.deploy();
    console.log("Deployed MyFirstContract contract address:", deployedContract.address);

    // Set the number on the smart contract
    await deployedContract.setNumber(7)

    let result = BigInt(await deployedContract.getNumber()).toString()
    console.log('Stored value in contract is: ', result)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

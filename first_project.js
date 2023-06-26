/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (token, data) {
    let nft = {
        'token':token,
        'data':data
    };

     nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0 ; i<nfts.length; i++){
        let nft = nfts[i];
        console.log(i+1, ')\n')
        console.log('Token : ', nft.token); 
        console.log('Data : ', nft.data);
        console.log('\n'); 
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('Total Supply : ', nfts.length)

}

// call your functions below this line
mintNFT('1', 'k3h43rou49dfh131)!7(!2$')
mintNFT('2', '012udn381@^!51391&*#@7%')
mintNFT('3', 'dgjd*(@@92)12234csdsd++_')
listNFTs()
getTotalSupply()
import Web3 from 'web3';

export const GUEST_ACCOUNT = '0x0000000000000000000000000000000000000001';

export async function getWeb3AndAccount() {
  if (localStorage.getItem('guestMode') === 'true') {
    const web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'));
    window.web3 = web3;
    return { web3, account: GUEST_ACCOUNT };
  }
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return { web3: window.web3, account: accounts[0] };
}

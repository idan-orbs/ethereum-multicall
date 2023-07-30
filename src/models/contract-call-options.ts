export interface ContractCallOptions {
  blockNumber?: string;
  from?: string,
  gas?: Number;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  data?: string;
}

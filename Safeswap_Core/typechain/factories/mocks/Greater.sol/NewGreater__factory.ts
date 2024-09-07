/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NewGreater,
  NewGreaterInterface,
} from "../../../mocks/Greater.sol/NewGreater";

const _abi = [
  {
    inputs: [],
    name: "__nothing",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decrease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "doSomethingWithCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610212806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80634a4b9feb1161005b5780634a4b9feb146100c7578063ce6bad36146100e7578063d732d955146100f0578063e8927fbc146100f857600080fd5b806306661abd14610082578063195f9f7d1461009d57806347bb89f0146100a7575b600080fd5b61008b60015481565b60405190815260200160405180910390f35b6100a5610100565b005b61008b6100b5366004610141565b60026020526000908152604090205481565b6100a56100d536600461015a565b60009182526002602052604090912055565b61008b60005481565b6100a561011a565b6100a5610131565b600a600160008282546101139190610192565b9091555050565b6001805490600061012a836101aa565b9190505550565b6001805490600061012a836101c1565b60006020828403121561015357600080fd5b5035919050565b6000806040838503121561016d57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b600082198211156101a5576101a561017c565b500190565b6000816101b9576101b961017c565b506000190190565b60006000198214156101d5576101d561017c565b506001019056fea26469706673582212200d4dbdf1dcf06914b77569a15b11f6ecaed35fd1762eb5b4bf0825ceca12537764736f6c634300080b0033";

type NewGreaterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewGreaterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewGreater__factory extends ContractFactory {
  constructor(...args: NewGreaterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NewGreater> {
    return super.deploy(overrides || {}) as Promise<NewGreater>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NewGreater {
    return super.attach(address) as NewGreater;
  }
  override connect(signer: Signer): NewGreater__factory {
    return super.connect(signer) as NewGreater__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewGreaterInterface {
    return new utils.Interface(_abi) as NewGreaterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewGreater {
    return new Contract(address, _abi, signerOrProvider) as NewGreater;
  }
}

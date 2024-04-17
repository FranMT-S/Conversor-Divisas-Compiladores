import { Token, TreeImg, TreeRaw } from "./CurrencyConverterHttp";

export type CompilerResults = {
  tokens: Token[];
  tree: {
    data: TreeRaw[];
    imgBlob: TreeImg;
  };
};

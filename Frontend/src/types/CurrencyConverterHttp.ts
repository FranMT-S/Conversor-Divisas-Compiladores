export type Token = {
  position: number;
  type: string;
  value: string;
};

export type TreeRaw = [string, string | number];

export type TreeImg = Blob;

export type ResponseModel = {
  isSuccess: boolean;
  result: number;
  tokens: Token[];
  tree: TreeRaw[];
};

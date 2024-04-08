export interface Promotion {
    prmList: PromotionList,
    totalCount: number,
    resultCode: number,
}

export interface PromotionList {
    prmId: string,
    prmTitle: string,
    prmOrder: number,
    prmViewUrl: string,
    pswipeImgUrl: string,
    mswipeImgUrl: string,
    ptileImgUrl: string,
    mtileImgUrl: string,
}

export type PromotionStatType = 'ING' | 'END'
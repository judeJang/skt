import axios from "axios";
import {API_PROMOTION_LIST} from "@/apps/common/endpoint";

export const getComponent = (view: string, depth?: string): any => {
    if (depth) {
        return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${depth}/${view}View.vue`);
    }
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}View.vue`);
}

export const getPromotionList = async (prmStat: any, currentPage: any, rowsPerPage: any) => {
    const {data} = await axios.post(
        API_PROMOTION_LIST,
        {
            prmStat: prmStat.value,
            pageIdx: currentPage.value,
            rowsPerPage: rowsPerPage.value,
        }
    ).catch((error) => {
        return {data: undefined}
    })
    return {data};
}

export const getIsMobile = () => {
    const userAgent = navigator.userAgent
    return userAgent.indexOf('iPhone') > -1
        || userAgent.indexOf('iPad') > -1
        || userAgent.indexOf('iPod') > -1
        || userAgent.indexOf('Android') > -1;
}

export const eventPopup = (url: string) => {
    const opt = (getIsMobile()) ? '' : 'width=500, height=700, top=100, left=100, location=no, scrollbars=yes'
    window.open(url, 'event', opt)
}
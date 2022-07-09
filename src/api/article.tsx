import {apiService} from "./apiService"
import QueryString from "query-string"

import {createArticleRequest,createArticleResponse,listArticleResponse,getArticleResponse,getCategoryListResponse} from "../types/article"

function createArticle (data: createArticleRequest) {
    return apiService.post<createArticleResponse> ("/article/create", JSON.stringify(data))
}
function getArticleList (queryStr:any) {
    const url = QueryString.stringifyUrl(
        {url:"/article/list",query:queryStr},
        {skipNull:true}
    );
    return apiService.get<listArticleResponse>(url)
}
function getArticle(id:number) {
    const url = "/article/"+id
    return apiService.get<getArticleResponse>(url)
}
function getArticleByCategory(category:string) {
    const url = "/article/category/"+category
    return apiService.get<listArticleResponse>(url)
}
function getCategoryList() {
    return apiService.get<getCategoryListResponse>("/category/list")
}

export  {createArticle,getArticleList,getArticle,getArticleByCategory,getCategoryList}
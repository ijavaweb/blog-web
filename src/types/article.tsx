interface createArticleRequest {
    title:string,
    content:string,
    category:string
}
interface createArticleResponse {
    code:number,
    msg:string,
    data: {
        article_id:number
    }
}

interface article {
    id:number,
    title:string,
    category:string,
    content:string,
    create_time:string,
    update_time:string,
    letter_num:number
}

interface listArticleResponse {
    code:number,
    msg:string,
    data: {
        total:number,
        articles: article[]
    }
}
interface getArticleResponse {
    code:number,
    msg:string,
    data: article
}

interface getCategoryListResponse {
    code:number,
    msg:string,
    data: string[]
}

export  type {
    createArticleRequest,
    createArticleResponse,
    article,
    listArticleResponse,
    getArticleResponse,
    getCategoryListResponse
}


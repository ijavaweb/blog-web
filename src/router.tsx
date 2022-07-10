import CreateArticlePage from "./pages/createArticle"
import ArticleList from "./pages/articleList"
import Article from "./pages/article"
import ArticleListAll from "./pages/articleListAll"
import ArticleIndex from "./pages/articlIndex"
import ArticleCategoryList from "./pages/articleCategory"
import {RouteProps} from "react-router"
import {Navigate } from "react-router-dom"
export const routes: Array<RouteProps> = [
    {
        element:<ArticleIndex />,
        path: "/"
    },
    {
        element:<CreateArticlePage />,
        path: "/article/create"
    },
    {
        element:<ArticleList/>,
        path:"/article/list"
    },
    {
        element:<ArticleListAll/>,
        path:"/article/list/all"
    },
    {
        element:<Article/>,
        path:"/article/:id"
    },
    {
        element:<ArticleCategoryList/>,
        path:"/article/category/:category"
    },
];

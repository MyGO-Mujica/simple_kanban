// 定义路由
import { createBrowserRouter } from "react-router"
import { BoardPage } from "@/view/Borad"
import { HomePage } from "@/view/Home"

// 先定义路由
const routes = [
{
        path: '/',
        element: <HomePage />
},
{
        path: '/board',
        element: <BoardPage />
}
]


// createBrowserRouter  创建路由实例
// createHashRouter  创建路由实例，使用hash模式
// createMemoryRouter  创建路由实例，使用内存模式
// createStaticRouter  创建路由实例，使用静态模式
export const router = createBrowserRouter(routes)
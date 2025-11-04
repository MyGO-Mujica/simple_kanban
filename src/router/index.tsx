// 定义路由
import { createBrowserRouter } from "react-router"
import { BoardPage } from "@/view/Borad"

// 先定义路由
const routes = [
{
        path: '/',
        element: <div>首页</div>
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
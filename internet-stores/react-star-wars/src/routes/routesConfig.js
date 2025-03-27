import { Home } from "../containers/Home/Home";
import People from "../containers/PeoplePage/People";
import { NotFoundPage } from '../containers/NotFoundPage/NotFoundPage'

const routesConfig = [
    {
        path: '/',
        exact: 'true',
        element: Home,
        title: 'Home'
    },
    {
        path: '/people',
        exact: 'true',
        element: People,
        title: 'People'
    },
    {
        path: '/*',
        exact: 'false',
        element: NotFoundPage,
        title: 'Not Found'
    }
]

export default routesConfig
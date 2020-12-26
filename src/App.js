import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './Components/users';
import { PostList, PostEdit, PostCreate, PostShow} from './Components/posts';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import Dashboard from './Components/Dashboard';
import authProvider from './Components/authProvider';
import {CommentList, CommentEdit} from './Components/comments';
import { createMuiTheme } from '@material-ui/core/styles';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
        <Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="users" list={UserList} icon={UserIcon} />
          <Resource name="posts" options={{ label: 'Posts' }} list={PostList} show={PostShow} edit={PostEdit}  create={PostCreate}  icon={PostIcon} />
          <Resource name="comments" list={CommentList} icon={MessageIcon} edit={CommentEdit}  />
        </Admin>
);

export default App;
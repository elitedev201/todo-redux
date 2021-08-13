import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import CreateTodo from '../components/CreateTodo';
import UrlProvider from '../utils/UrlContext';
import TodoList from '../components/TodoList';


export default function Home() {
  return (
    <>
      <UrlProvider>
        <Navbar />
        <Container maxWidth="sm" style={{
          padding: "1rem"
        }} >
          <CreateTodo />
          <TodoList />
        </Container>
      </UrlProvider>
    </>
  );
}
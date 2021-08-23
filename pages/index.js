import Container from '@material-ui/core/Container';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';
import styled from "styled-components";

const CustomContainer = styled(Container)({
  fontFamily: "Lato",
  height: "100vh",
  padding: "2rem",
})

export default function Home() {
  return (
    <>
      <CustomContainer maxWidth="sm">
        <CreateTodo />
        <TodoList />
      </CustomContainer>
    </>
  );
}
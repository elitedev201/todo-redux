import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import styled from "styled-components";
import { useDispatch, } from "react-redux";
import { addTodo } from "../redux/todo/todoActions"



const CreateBtn = styled(Button)({
  border: "none",
  borderRadius: "20px",
  margin: " 0 1rem",
  fontFamily: "Lato",
});

const Content = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
});

const StyledDiv = styled.div`
  @media (max-width:430px) {
    & > * {
      margin-top: 0.5rem;
    }
  }
 `;



const apiKey = process.env.NEXT_PUBLIC_GIPHY_KEY;

const CreateTodo = (props) => {
  const [itemValue, setItemValue] = useState('');
  const dispatch = useDispatch();

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();
    dispatch(addTodo(itemValue));
    setItemValue('');
  };

  return (
    <>
      <Card>
        <Content>
          <Typography variant="h5">Just do it!</Typography>
          <Typography variant="body1">
            Get started, and add some task to your list:
          </Typography>
          <br></br>
          <StyledDiv>
            <TextField
              variant="outlined"
              size="small"
              placeholder="I have to do..."
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
            <CreateBtn
              variant="contained"
              color="secondary"
              disabled={!itemValue}
              startIcon={<PlaylistAddIcon />}
              onClick={handleSubmitAndResetForm}
            >
              ADD
            </CreateBtn>
          </StyledDiv>
        </Content>
      </Card>
    </>
  );
};

export default CreateTodo;

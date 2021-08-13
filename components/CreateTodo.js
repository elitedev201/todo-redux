import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/styles";
import { useDispatch, } from "react-redux";
import { addTodo } from "../redux/todo/todoActions"


const CreateBtn = styled(Button)({
  border: "none",
  borderRadius: "20px",
  margin: " 0 1rem",
});

const Content = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

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
          <Typography variant="h5">You lazy!</Typography>
          <Typography variant="body1">
            Get you ass up, and add some task to your list:
          </Typography>
          <br></br>
          <div>
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
          </div>
        </Content>
      </Card>
    </>
  );
};

export default CreateTodo;

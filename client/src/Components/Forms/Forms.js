import React, { useState } from "react";
import {
  Button,
  Typography,
  Paper,
  TextField,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyle from '../Styles'

const Forms = () => {
  const [postData, setPostData] = useState({
    creator: "",
    tittle: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyle();

  const handleSubmit = (e) => {
    e.prevendDefault();
  };

  const clear=()=>{

  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outline"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.value.target })
          }
        />

        <TextField
          name="tittle"
          variant="outline"
          label="Tittle"
          fullWidth
          value={postData.tittle}
          onChange={(e) => setPostData({ ...postData, tittle: e.value.target })}
        />

        <TextField
          name="message"
          variant="outline"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.value.target })
          }
        />

        <TextField
          name="tags"
          variant="outline"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.value.target })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button className={classes.buttonSubmit}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth>Submit</Button>

        <Button className={classes.buttonSubmit}
        variant="contained"
        color="secondary"
        size="large"
        onClick={clear}
        fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Forms;

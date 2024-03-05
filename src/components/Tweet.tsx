import styled from "styled-components";
import { ITweet } from "./Timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, deleteField, doc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useState } from "react";
import editIcon from "/icons/edit.svg";
import deleteIcon from "/icons/remove.svg";

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
  const user = auth.currentUser;
  const photoRef = ref(storage, `tweets/${user?.uid}/${id}`);
  const [edit, setEdit] = useState(false);
  const [editedTweet, setEditedTweet] = useState("");

  const onDelete = async () => {
    const ok = confirm("Are you sure you want to delete this tweet?");
    if (!ok || user?.uid !== userId) return;
    try {
      await deleteDoc(doc(db, "tweets", id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeTweet = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedTweet(event.target.value);
  };

  const onEdit = async () => {
    if (user?.uid !== userId) return;
    try {
      await updateDoc(doc(db, "tweets", id), {
        tweet: editedTweet,
      });
    } catch (error) {
      console.log(error);
    }
    setEdit(false);
  };

  const onEditFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (user?.uid !== userId) return;
    const { files } = event.target;
    if (files && files.length === 1) {
      try {
        const result = await uploadBytes(photoRef, files[0]);
        console.log(result);
        const url = await getDownloadURL(result.ref);
        console.log(url);
        await updateDoc(doc(db, "tweets", id), {
          photo: url,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onDeleteFile = async () => {
    if (user?.uid !== userId) return;
    try {
      if (photo) {
        await deleteObject(ref(photoRef));
        await updateDoc(doc(db, "tweets", id), {
          photo: deleteField(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        {edit ? (
          <textarea defaultValue={tweet} onChange={onChangeTweet} />
        ) : (
          <Payload>{tweet}</Payload>
        )}
        {user?.uid === userId ? (
          <div>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            {edit ? (
              <EditButton onClick={onEdit}>Done</EditButton>
            ) : (
              <EditButton onClick={() => setEdit(true)}>Edit</EditButton>
            )}
          </div>
        ) : null}
      </Column>
      <Column>{photo ? <Photo src={photo} /> : null}</Column>
      {edit ? (
        <ColumnFile>
          <EditFileArea>
            <EditFile>
              <label htmlFor="tweetFile">edit</label>
              <input
                type="file"
                id="tweetFile"
                accept="image/*"
                onChange={onEditFile}
              />
            </EditFile>
            <DeleteFile onClick={onDeleteFile}>
              <span>delete</span>
            </DeleteFile>
          </EditFileArea>
        </ColumnFile>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div`
  &:last-child {
    place-self: end;
  }
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: #2c8b6f;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
`;

const ColumnFile = styled.div`
  position: relative;
  &:hover {
    & > div {
      display: block;
    }
  }
`;

const EditFileArea = styled.div`
  display: block;
  /* display: none; */
`;

const EditFile = styled.div`
  position: absolute;
  top: -14px;
  right: 25px;
  input {
    display: none;
  }
  label {
    display: inline-block;
    width: 25px;
    height: 25px;
    font-size: 0;
    background: rgba(0, 0, 0, 0.8) url(${editIcon}) no-repeat center;
    background-size: 18px 18px;
    cursor: pointer;
  }
`;

const DeleteFile = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: 25px;
  height: 25px;
  font-size: 0;
  background: rgba(255, 51, 28, 0.8) url(${deleteIcon}) no-repeat;
  background-size: cover;
  cursor: pointer;
  span {
    display: none;
  }
`;

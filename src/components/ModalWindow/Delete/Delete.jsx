import './delete.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setModalWindow, setPostList } from '../../../store/postSlice';

import Button from '@mui/material/Button';

const Delete = () => {
  const dispatch = useAppDispatch();
  const { postList, modalWindow } = useAppSelector((st) => st.postSlice);

  const deletePost = () => {
    dispatch(
      setPostList(postList.filter((item) => item.id !== modalWindow.id))
    );
    dispatch(
      setModalWindow({
        open: false,
        type: '',
        id: '',
      })
    );
  };

  const closeModal = () =>
    dispatch(
      setModalWindow({
        open: false,
        type: '',
        id: '',
      })
    );
  return (
    <div>
      <h3>Вы уверены, что хотите удалить пост ?</h3>
      <p>Данное действие нельзя будет отменить </p>
      <div className="modal_btn_group">
        <Button variant="contained" onClick={deletePost}>
          Удалить
        </Button>
        <Button variant="contained" onClick={closeModal}>
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default Delete;

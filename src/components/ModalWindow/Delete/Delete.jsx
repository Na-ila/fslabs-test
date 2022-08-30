import './delete.scss';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setPostList } from '../../../store/postSlice';

import Button from '@mui/material/Button';

const Delete = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { postList } = useAppSelector((st) => st.postSlice);

  const deletePost = () => {
    dispatch(setPostList(postList.filter((item) => item.id !== params.id)));
    navigate('/');
  };

  const closeModal = () => navigate('/');

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

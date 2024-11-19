import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <div id={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  );
};

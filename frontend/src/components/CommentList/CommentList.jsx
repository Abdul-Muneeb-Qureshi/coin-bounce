import styles from './CommentList.module.css'
import Comment from '../Comment/Comment'


function CommentList({ comments }) {

    return (
        <div className={styles.commentListWrapper}>
            <div className={styles.commentList}>
                {
                    comments.length === 0 ?
                        <div className={styles.noComments}>No Comments Posted</div> :
                        comments.map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))
                }
            </div>
        </div>
    )
}

export default CommentList
import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {

    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment}>{comment}</li>)}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export async function fetchComments() {

    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const json = await response.json();
    const data = json.map(comment => comment.name);
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}
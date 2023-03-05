import {
    REQUEST_CREATE_BOARD_DATA_TO_SPRING
} from './mutation-types'

import axios from 'axios'

export default {
    requestCreateBoardToSpring ({}, payload) {
        console.log("payload: ",payload)
        const { title, content, writer } = payload
        console.log("title:",title)
        console.log("content:",content)
        console.log("writer:",writer)
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then(() => {
                alert('게시물 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    }
}
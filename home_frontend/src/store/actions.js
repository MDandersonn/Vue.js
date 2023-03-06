import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
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
    },
    requestBoardListToSpring ({ commit }) {
        return axios.get('http://localhost:7777/board/list')//겟방식으로 여기로 요청들어감
            .then((res) => {//받아온 데이터를 담아 mutation을 일으킨다.
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring ({ commit },boardId) {
        return axios.get(`http://localhost:7777/board/${boardId}`)
        //가변인자넣을때는 `  ${boardId}`  형태로 넣는다
            .then((res) => {//반환값을 받아서  mutation에 전달한다.
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
    },
    requestDeleteBoardToSpring ({}, boardId) {
        return axios.delete(`http://localhost:7777/board/${boardId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestBoardModifyToSpring ({}, payload) {//{ boardId, title, content, writer }
        const { title, content, boardId, writer } = payload;

        return axios.put(`http://localhost:7777/board/${boardId}`,
            { title, writer, content })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    }
}
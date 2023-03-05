<template>
  <td @click="whichOneSelected" style="width: 30px; height: 30px">
    {{ cellData3 }}
  </td>
</template>

<script>

export default {
    name: "TdComponent",
    data () {
        return {
            game: {
                propsTurnShape: this.currentTurnShape3,
                propsWinner: '',
            }
        }
    },
    props: {
        cellData3: String,
        cellIndex3: Number,
        rowIndex3: Number,
        tableData3: Array,
        currentTurnShape3: String,
    },
    methods: {
        whichOneSelected () {
            console.log('오목판을 클릭했습니다!')

            let isDuplicated = this.setDataToSelectedArray()
            // 이미입력된칸이면 true 아니면 입력하고 , false반환
            let win = this.winnerCheck()// 한줄완성했으면 true  아니면 false

            if (win) {//승리자가 결정되었으면
                this.game.propsWinner = this.currentTurnShape3//승리자 입력

                this.$emit('updateWinner', this.game.propsWinner) //승리자 전달.
                this.$emit('updateTableData')//테이블초기화
            } else {//승리자가 결정안되었을땐,
                let allCellFull = true// cell이 꽉 차있다고가정 (초기값)

                // tableData3[x][y]
                // tableData3[x] === row
                // tableData3[fixed_x][y] === cell
                this.tableData3.forEach(row => {
                    row.forEach(cell => {
                        if (!cell) {//cell이 ''이면 true , 차있으면 false
                            allCellFull = false//빈셀이 있으니까 allCellFull변수를 false로 바꾸기.
                        }
                    })
                })

                if (allCellFull) { this.$emit('updateTableData') }
                //모든 cell이 o나x로 차있을때 테이블 초기화시킴
            }

            if (!isDuplicated) { this.changeTurn() }//이미 입력된칸이 아니면 입력했으니까 상대로턴바꾸기
        },
        changeTurn () {
            this.game.propsTurnShape = this.currentTurnShape3 === 'O' ? 'X' : 'O'
            // this.$emit('이벤트명', 값(옵션))
            this.$emit('updateTurnShape', this.game.propsTurnShape)
        },
        setDataToSelectedArray () {
            // this.tableData3[this.rowIndex3]: 사용자가 클릭한 행 정보
            // this.cellIndex3: 사용자가 클릭한 '행'내 열 정보
            // this.currentTurnShape3: 현재 턴('x', 'o')
            // this.$set(행, 열, 값) -> 특정[행][열] = 값
            if (this.tableData3[this.rowIndex3][this.cellIndex3] !== '') { return true }
            //해당 cell에 o나 x가 이미 입력되어있으면 true 리턴
            this.$set(this.tableData3[this.rowIndex3], this.cellIndex3, this.currentTurnShape3)
            console.log("속성을 추가할 객체:",this.tableData3[this.rowIndex3])
            console.log("추가할 속성의 키:",this.cellIndex3)
            //그렇지않다면 특정행 배열에 cell인덱스를찾아서 거기에 현재 모양 입력
            return false
        },
        winnerCheck () {
            if (//가로완성 체크
                this.tableData3[this.rowIndex3][0] === this.currentTurnShape3 &&
                this.tableData3[this.rowIndex3][1] === this.currentTurnShape3 &&
                this.tableData3[this.rowIndex3][2] === this.currentTurnShape3 &&
                this.tableData3[this.rowIndex3][3] === this.currentTurnShape3 &&
                this.tableData3[this.rowIndex3][4] === this.currentTurnShape3
            ) {
                return true
            } else if (//세로완성 체크
                this.tableData3[0][this.cellIndex3] === this.currentTurnShape3 &&
                this.tableData3[1][this.cellIndex3] === this.currentTurnShape3 &&
                this.tableData3[2][this.cellIndex3] === this.currentTurnShape3 &&
                this.tableData3[3][this.cellIndex3] === this.currentTurnShape3 &&
                this.tableData3[4][this.cellIndex3] === this.currentTurnShape3
            ) {
                return true
            } else if (// 대각선\ 모양 완성체크
                this.tableData3[0][0] === this.currentTurnShape3 &&
                this.tableData3[1][1] === this.currentTurnShape3 &&
                this.tableData3[2][2] === this.currentTurnShape3 &&
                this.tableData3[3][3] === this.currentTurnShape3 &&
                this.tableData3[4][4] === this.currentTurnShape3
            ) {
                return true
            } else if (//대각선 / 모양 체크
                this.tableData3[0][4] === this.currentTurnShape3 &&
                this.tableData3[1][3] === this.currentTurnShape3 &&
                this.tableData3[2][2] === this.currentTurnShape3 &&
                this.tableData3[3][1] === this.currentTurnShape3 &&
                this.tableData3[4][0] === this.currentTurnShape3
            ) {
                return true
            }

            return false
        }
    }
}

</script>

<style>

</style>
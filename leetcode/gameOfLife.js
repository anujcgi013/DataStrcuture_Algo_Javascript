var gameOfLife = function(board) {
    var res=[];
    for(var i=0;i<board.length;i++){
        res[i]=[];
        for(var j=0;j<board[i].length;j++){
            res[i][j]=0;
        }
    }
    
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            var alive=0;
            //当前点上边
            if(i-1>=0&&board[i-1][j]==1){
               alive++;
            }
            //当前点下边
            if(i+1<=board.length-1&&board[i+1][j]==1){
               alive++;
            }
            //当前点左边
            if(j-1>=0&&board[i][j-1]==1){
                alive++;
            }
            //当前点右边
            if(j+1<=board[i].length&&board[i][j+1]==1){
                alive++;
            }
            //当前点左上边
            if(i-1>=0&&j-1>=0&&board[i-1][j-1]==1){
                alive++;
            }
            //当前点右上边
            if(i-1>=0&&j+1<=board[i].length-1&&board[i-1][j+1]==1){
                alive++;
            }
            //当前点左下边
            if(i+1<=board.length-1&&j-1>=0&&board[i+1][j-1]==1){
                alive++;
            }
            //当前点右下边
            if(i+1<=board.length-1&&j+1<=board[i].length-1&&board[i+1][j+1]==1){
                alive++;
            }
            
            //当前点为1
            if(board[i][j]==1){
                //当前点为1且当前点周围为1的总数alive小于2
                if(alive<2){
                    res[i][j]=0;
                }
                else if(alive>=2&&alive<=3){//当前点为1且当前点周围为1的总数alive等于2或等于3
                    res[i][j]=1;
                }
                else{//当前点为1且当前点周围为1的总数alive大于3
                    res[i][j]=0;
                }
            }
            else{//当前点为0
                //当前点为0且当前点周围为1的总数alive恰好为2
                if(alive==3){
                    res[i][j]=1;
                }
                else{
                    res[i][j]=0;
                }
            }
        }
    }
    
    for(var i=0;i<res.length;i++){
        board[i]=res[i];
    }
};

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
/**
 * Created by Near on 2015/10/8.
 */
/*
TO DO
 */
(function (global){
    var N = 4;

    function isSquareMatrix (Matrix) {
        var n = Matrix.length;
        r = true;
        for(var i = 0 ; i < n; i++) {
            if(Matrix[i].length === n){

            }else {
                r = false;
            }
        }

        if(r){
            return n;
        }else {
            return false;
        }
    }

    //console.log(isSquareMatrix([[1,2],[3,4]]));
    //console.log(isSquareMatrix([[1,2],[3]]));

    function MatrixNxNToArray (N, Matrix) {
        var r = [];
        for(var i = 0; i< N; i++) {
            for(var j = 0; j < N; j++) {
                r.push(Matrix[j][i])
            }
        }
        return r;
    }

    //console.log(MatrixNxNToArray(2,[[1,2],[3,4]]))

    function ArrayToMatrixNxN (N, Array) {
        var r = [];
        for(var i = 0; i < N ; i++) {
            var r1 = [];
            for(var j = 0; j < N; j++) {
                r1.push(Array[j*N+i]);
            }
            r.push(r1)
        }
        return r;
    }

    //console.log(ArrayToMatrixNxN(2,[1,3,2,4]));

    function initMatrixNxN(N) {
        var m = [];
        for(var j = 0; j < N; j++) {
            var r = []
            for(var i = 0; i < N; i++) {
                if (i === j) {
                    r[i] = 1
                } else {
                    r[i] = 0
                }
            }
            m.push(r)
        }
        return m
    }

    //console.log(initMatrixNxN(3))

    function dotMatrixNxN(N, MatrixA, MatrixB) {
        if(isSquareMatrix(MatrixA) === N && isSquareMatrix(MatrixA) === isSquareMatrix(MatrixB) ) {
            var MatrixC = initMatrixNxN(N);
            for(var j = 0; j < N; j++) {
                for(var i = 0; i < N; i++) {
                    var r = 0;
                    for(var m = 0; m < N; m++) {
                        r += MatrixA[j][m] * MatrixB[m][i]
                    }
                    MatrixC[j][i] = r;
                }

            }
            return MatrixC;
        } else {
            return 0;
        }
    }

    //console.log(dotMatrixNxN(2,[[1,2],[3,4]],[[5,6],[7,8]]));

    var Matrix4 = function () {
        var _array = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ]



        this.translate = function (x, y, z) {

        }


        this.returnElements = function () {
            return _array;
        }
    }
})(window)
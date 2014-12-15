//
// Solution
// APP.firstEquilibriumIndex
//
// "Given an array of numbers arr, find the first index at which the sums before
// and after that index are equal. If there're no equilibrium index, then 
// returns -1.
// 
// For example: given [9,12,3,4,6,1,3,7], the first equilibrium index is 2, 
// because the sum of left side [9,2], is the same that the sum of the right 
// part [4,6,1,3,7]: 9 + 2 === 4 + 6 + 1 + 3 + 7":
//
// [9,12,3,4,6,1,3,7]
//       ^
// [9,12],[4,6,1,3,7] ==>  9 + 2 === 4 + 6 + 1 + 3 + 7
//
(function( module ) {

    "use strict";

    /**
     * @desc: Solution of algorithm 004
     */
    module.firstEquilibriumIndex = function( arr ) {
        var i,
            len = arr.length,
            lastInd = arr.length - 1,
            arrLeft = [],
            arrRight = [],
            leftSum = 0,
            rightSum = 0;


        /**
         * @desc: Extracts the left side of a given array, excluding the index.
         *
         * input: [1, 2, 3, 4, 5, 6, 7, 8, 9], index 3
         * output: [1, 2, 3]
         *
         * @param arr {Array}: Original array
         * @param ind {Integer}: Index at which to end extraction, begins from index 0
         * @return {Array}: The left side of the given array
         */
        function getLeftSide( arr, ind ){
            return arr.slice( 0, ind ); // from 0 until index (excluded)
        }


        /**
         * @desc: Extracts the right side of a given array, excluding the index.
         *
         * input: [1, 2, 3, 4, 5, 6, 7, 8, 9], index 3
         * output: [4, 5, 6, 7, 8, 9]
         *
         * @param arr {Array}: Original array
         * @param ind {Integer}: Index at which to begin extraction, until the end
         * @return {Array}: The right side of the given array
         */
        function getRightSide( arr, ind ){
            return arr.slice( ind + 1 ); // until the end of array
        }

        // Loop search
        for ( i = 0; i < len; i++ ) {
            leftSum = APP.Helpers.sumArrayElements( getLeftSide( arr, i ) );
            rightSum = APP.Helpers.sumArrayElements( getRightSide( arr, i ) );

            // The sum of both sides are equal
            if( leftSum === rightSum ){
                return i;
            }
        }

        // Not founded
        return -1;
    };


    module.firstEquilibriumIndex2 = function( arr ) { 
        var i,
            len = arr.length,
            rightSum, 
            leftSum = 0; 

        //execute once for each element, execute the callback, passing the 
        // previous callback's value and the current element
        rightSum = APP.Helpers.sumArrayElements( arr );

        //execute once for each element
        for ( i = 0; i < len; i++ ) { 
            
            rightSum -= arr[ i ];

            // The sum of both sides are equal
            if ( leftSum === rightSum ) { 
                return i;
            }

            leftSum += arr [ i ];
        }

        // Not founded
        return -1;
    };

}.call( this, APP ) );
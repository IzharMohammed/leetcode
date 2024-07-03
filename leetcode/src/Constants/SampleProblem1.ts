export default {
  prob1: `

  <br />
   <h1>LeetCode Problem 688: Knight Probability in Chessboard </h1> 
    
    <br />
  
   <h1> Problem Description</h1> 
    
    ![image](https://assets.leetcode.com/uploads/2018/10/12/knight.png)
    <br />
    On an \`n x n\` chessboard, a knight moves according to the rules of chess. The knight can move to any of the square on the standard chessboard where it then makes exactly one of the following eight possible moves:
    <br />
    1. \`(x + 1, y + 2)\`
    2. \`(x + 1, y - 2)\`
    3. \`(x - 1, y + 2)\`
    4. \`(x - 1, y - 2)\`
    5. \`(x + 2, y + 1)\`
    6. \`(x + 2, y - 1)\`
    7. \`(x - 2, y + 1)\`
    8. \`(x - 2, y - 1)\`
    
    
    Each move is considered to be independent and is selected uniformly at random from the available legal moves.
    
    The knight continues moving until it has made exactly \`K\` moves or has moved outside of the chessboard. Return the probability that the knight remains on the board after exactly \`K\` moves.
    
    <details>
    <summary><b>Input/Output Test Case 1</b></summary>
    
    - **Input:** nums = [2,7,11,15], target = 9
    - **Output:** [0,1]
    
    </details>
    <br />
    <br />
    ### Example
    
    #### Example 1:
    
    Input: \`n = 3, k = 2, row = 0, column = 0\`  
    Output: \`0.0625\`  
    Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
    <br />
    <br />
    #### Example 2:
    
    Input: \`n = 1, k = 0, row = 0, column = 0\`  
    Output: \`1.0\`  
    Explanation: Since the knight is already on the board, no moves are needed.
    
    <br />
    <br />

    ### Constraints
    
    - \`n == 1\` or \`n == 2\`
    - \`0 <= k <= 25\`
    - \`0 <= row, column <= n - 1\`
    <br />
    <br />
    ### Note
    
    The final answer must be within \`10^-5\` of the correct answer.
    <br />
    <br />
    
    ### Follow-up
    
    Can you use a solution with O(K) memory?
        
        `,
  prob2: `
        ## Problem Description
       You are given two non-empty linked lists representing two non-negative integers.
        The digits are stored in reverse order, and each of their nodes contains a single digit.
         Add the two numbers and return the sum as a linked list.
       You may assume the two numbers do not contain any leading zero, except the number 0 itself.
       ![Linked List Addition](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
       ## Example
       Let's say we have two linked lists:-
       - 'l1': 2 -> 4 -> 3 (represents the number 342),
       - 'l2': 5 -> 6 -> 4 (represents the number 465)
       Adding these numbers should give us:
       - Result: 7 -> 0 -> 8 (represents the number 807)
       `

}
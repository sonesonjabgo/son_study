def solution(board, moves):
    N = len(board)
    stack = []
    result = 0

    for k in moves:
        for j in range(N):
            if stack and stack[-1] == board[j][k - 1]:
                stack.pop()
                result += 2
                board[j][k - 1] = 0
                break
            elif board[j][k - 1]:
                stack.append(board[j][k - 1])
                board[j][k - 1] = 0
                break

    return result
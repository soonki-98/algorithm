A, B, C = input().split()
[A, B, C] = [int(A), int(B), int(C)]

if B >= C:
    print(-1)
else:
    print(int((A + C - B) / (C - B)))
